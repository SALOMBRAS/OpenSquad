import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '../../../..');
const userDataDir = path.join(root, '_opensquad', '_browser_profile');
const outDir = path.join(__dirname, 'screenshots');
const profileUrl = 'https://www.instagram.com/michelinbrasil/';

fs.mkdirSync(outDir, { recursive: true });

let browser;
let context;
let usingPersistent = false;

try {
  context = await chromium.launchPersistentContext(userDataDir, {
    channel: 'chrome',
    headless: true,
    viewport: { width: 1280, height: 900 },
    args: ['--disable-dev-shm-usage', '--no-sandbox'],
  });
  usingPersistent = true;
} catch (e1) {
  fs.writeFileSync(
    path.join(outDir, 'browser-log.txt'),
    `persistent_failed: ${e1.message}\n`,
    'utf8'
  );
  browser = await chromium.launch({
    channel: 'chrome',
    headless: true,
    args: ['--disable-dev-shm-usage', '--no-sandbox'],
  });
  context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
}

const page = await context.newPage();

try {
  await page.goto(profileUrl, { waitUntil: 'domcontentloaded', timeout: 120000 });
  await page.waitForSelector('main', { timeout: 90000 }).catch(() => {});

  for (let i = 0; i < 20; i++) {
    const hasGrid = await page.locator('article a[href*="/p/"], article a[href*="/reel/"]').count();
    const txt = await page.locator('main').innerText().catch(() => '');
    if (hasGrid > 0 || (txt.length > 200 && !/^Instagram$/m.test(txt))) break;
    await page.waitForTimeout(1500);
  }
  await page.waitForTimeout(4000);

  await page.screenshot({
    path: path.join(outDir, '01-profile-after-load.png'),
    fullPage: false,
  });

  const title = await page.title();
  const url = page.url();
  const bodySnippet = await page.evaluate(() => {
    const main = document.querySelector('main');
    return main ? main.innerText.slice(0, 12000) : document.body.innerText.slice(0, 12000);
  });

  const hasLogin =
    /Log in to Instagram|Entrar no Instagram|Phone number, username|Faça login|Crie uma conta/i.test(
      bodySnippet
    );

  const postHrefs = await page.evaluate(() => {
    const as = [...document.querySelectorAll('article a[href*="/p/"], article a[href*="/reel/"]')];
    return [...new Set(as.map((a) => a.getAttribute('href')).filter(Boolean))].slice(0, 20);
  });

  fs.writeFileSync(
    path.join(outDir, 'extracted-text-snippet.txt'),
    `browser_mode: ${usingPersistent ? 'persistent_profile' : 'ephemeral_chromium'}\ntitle: ${title}\nurl: ${url}\nlogin_wall_detected: ${hasLogin}\npost_links_found: ${postHrefs.length}\npost_hrefs:\n${postHrefs.join('\n')}\n\n---\n${bodySnippet}`,
    'utf8'
  );

  if (!hasLogin && postHrefs.length) {
    await page.evaluate(() => window.scrollBy(0, 1600));
    await page.waitForTimeout(2500);
    await page.screenshot({
      path: path.join(outDir, '02-profile-scrolled.png'),
      fullPage: false,
    });
  }
} finally {
  await context.close();
  if (browser) await browser.close();
}

console.log('done');
