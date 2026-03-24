import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '../../../..');
const userDataDir = path.join(root, '_opensquad', '_browser_profile');
const outDir = path.join(__dirname, 'screenshots');
const profileUrl = 'https://www.instagram.com/continentalpneus/';
const MAX_POSTS = 10;

fs.mkdirSync(outDir, { recursive: true });

/**
 * @param {import('playwright').Page} page
 */
async function collectGridMeta(page) {
  return page.$$eval(
    'article a[href*="/p/"], article a[href*="/reel/"]',
    (anchors) => {
      const seen = new Set();
      const rows = [];
      for (const a of anchors) {
        let href = a.getAttribute('href') || '';
        if (!href.includes('/p/') && !href.includes('/reel/')) continue;
        if (!href.startsWith('http')) href = `https://www.instagram.com${href}`;
        const key = href.split('?')[0];
        if (seen.has(key)) continue;
        seen.add(key);
        const tile =
          a.closest('[role="button"]') ||
          a.closest('div[style*="position"]') ||
          a.parentElement;
        const aria = tile?.getAttribute('aria-label') || '';
        const isReel = href.includes('/reel/');
        const lower = aria.toLowerCase();
        const isCarousel =
          lower.includes('carousel') ||
          lower.includes('carrossel') ||
          /\b\d+\s+de\s+\d+\b/.test(aria) ||
          /\b\d+\s+of\s+\d+\b/.test(lower);
        rows.push({
          href: key,
          isReel,
          isCarouselGuess: isCarousel,
          ariaSnippet: aria.slice(0, 180),
        });
      }
      return rows;
    }
  );
}

/**
 * @param {import('playwright').Page} page
 */
async function extractOpenPost(page, postUrl, shotBase) {
  await gotoReliable(page, postUrl);
  await page.waitForSelector('article', { timeout: 45000 }).catch(() => {});
  await page.waitForTimeout(4000);
  await page.screenshot({ path: path.join(outDir, `${shotBase}.png`), fullPage: false });

  const meta = await page.evaluate(() => {
    const timeEl = document.querySelector('time');
    const datetime = timeEl?.getAttribute('datetime') || '';
    const article = document.querySelector('article');
    const text = article?.innerText || document.body.innerText || '';
    return { datetime, text: text.slice(0, 12000) };
  });

  const url = page.url();
  const isCarouselUi = await page.locator('button[aria-label*="Next"], button[aria-label*="Próximo"], button[aria-label*="Avançar"]').count();
  const slides = [];

  slides.push(meta.text.split('\n').slice(0, 80).join('\n'));

  // Advance carousel if next exists
  let guard = 0;
  while (guard < 30) {
    const next = page.locator('button[aria-label*="Next"], button[aria-label*="Próximo"], button[aria-label*="Seguinte"]').first();
    if (!(await next.isVisible().catch(() => false))) break;
    const disabled = await next.isDisabled().catch(() => true);
    if (disabled) break;
    await next.click();
    await page.waitForTimeout(800);
    const t = await page.evaluate(() => {
      const article = document.querySelector('article');
      return article?.innerText || '';
    });
    slides.push(t.slice(0, 4000));
    guard++;
  }

  return {
    url,
    datetime: meta.datetime,
    bodyText: meta.text,
    carouselClicks: guard,
    slides,
    hadNextUi: isCarouselUi > 0,
  };
}

function orderPosts(items) {
  const carousels = items.filter((r) => r.isCarouselGuess && !r.isReel);
  const reels = items.filter((r) => r.isReel);
  const singles = items.filter((r) => !r.isReel && !r.isCarouselGuess);
  const ordered = [...carousels, ...reels, ...singles];
  return ordered.slice(0, MAX_POSTS);
}

const context = await chromium.launchPersistentContext(userDataDir, {
  channel: 'chrome',
  headless: true,
  viewport: { width: 1280, height: 900 },
});

const page = await context.newPage();

/**
 * @param {import('playwright').Page} p
 * @param {string} url
 */
async function gotoReliable(p, url) {
  for (let attempt = 0; attempt < 3; attempt++) {
    try {
      await p.goto(url, { waitUntil: 'networkidle', timeout: 120000 });
      return;
    } catch {
      try {
        await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 120000 });
        return;
      } catch (e2) {
        if (attempt === 2) throw e2;
        await p.waitForTimeout(2000);
      }
    }
  }
}

try {
  await gotoReliable(page, profileUrl);
  await page.waitForTimeout(8000);
  await page.screenshot({ path: path.join(outDir, '00-profile-grid.png'), fullPage: false });

  let grid = await collectGridMeta(page);
  let ordered = orderPosts(grid);

  if (ordered.length < MAX_POSTS) {
    await page.evaluate(() => window.scrollBy(0, 1400));
    await page.waitForTimeout(4000);
    await page.screenshot({ path: path.join(outDir, '00b-profile-scrolled.png'), fullPage: false });
    grid = await collectGridMeta(page);
    ordered = orderPosts(grid);
  }

  const profileHeader = await page.evaluate(() => {
    const first = document.querySelector('article') || document.querySelector('header');
    const src = first || document.body;
    return src.innerText.slice(0, 2500);
  });

  const results = {
    investigated: new Date().toISOString().slice(0, 10),
    profileUrl,
    profileHeaderSnippet: profileHeader,
    gridCountDistinct: grid.length,
    selected: ordered.map((o) => ({ href: o.href, isReel: o.isReel, isCarouselGuess: o.isCarouselGuess })),
    posts: [],
  };

  let idx = 0;
  for (const item of ordered) {
    idx += 1;
    const shotBase = `post-${idx}-${item.isReel ? 'reel' : item.isCarouselGuess ? 'carousel' : 'single'}`;
    const data = await extractOpenPost(page, item.href, shotBase);
    results.posts.push({
      gridMeta: item,
      ...data,
    });
  }

  fs.writeFileSync(path.join(__dirname, 'extraction-debug.json'), JSON.stringify(results, null, 2), 'utf8');
  console.log('Wrote extraction-debug.json with', results.posts.length, 'posts');
} finally {
  await context.close();
}
