# Raw Content: @pirelli_br (Instagram)

Investigated: 2026-03-24  
Target URL: https://www.instagram.com/pirelli_br/  
Investigation mode: `profile_5_10` (intended: up to 10 grid posts; prioritize carousels)

**Total contents analyzed (first-party, from profile grid): 0**  
**Content types (extracted):** *(none — see blockers below)*

---

## Investigation status / blockers

### Playwright MCP

- **Configured** in workspace `.mcp.json` (`@playwright/mcp` with `_opensquad/config/playwright.config.json`).
- **Not available in this Sherlock run:** no `browser_navigate`, `browser_snapshot`, `browser_click`, or related MCP tools were callable from this session, so **Profile Grid Extraction** from `sherlock.prompt.md` could not be executed (no grid snapshot, no modal opens, no per-slide carousel capture, no per-post metrics from UI).

### Direct HTTP fetch

- Attempted fetch of `https://www.instagram.com/pirelli_br/` **timed out** (no usable HTML/JSON for grid parsing).

### Video transcription prerequisites (for future Reels)

Per prerequisite check on this machine (Windows, PowerShell):

- `yt-dlp`: **not on PATH** (command not recognized).
- `ffmpeg`: **not on PATH** (command not recognized).
- `whisper`: **not on PATH** (command not recognized).

If Reels are captured later in a logged-in browser session, plan for **caption-only** unless these tools are installed (e.g. `pip install yt-dlp openai-whisper`, install FFmpeg per https://ffmpeg.org/download.html).

### Login wall (not confirmed)

- Could not reach the profile in a browser from this run. If Playwright is used interactively, expect possible Instagram login/consent wall; user should complete login once so `_opensquad/_browser_profile/` persists cookies.

### Screenshots

- No screenshots were taken (no Playwright session). When capturing later, save only with full path under:  
  `squads/rico-pneus-carousel/_investigations/pirelli_br/screenshots/{filename}.png`

---

## Partial notes (third-party / editorial — NOT from @pirelli_br grid)

*The following is not a substitute for grid extraction. It documents context found while routing around the blocker.*

1. **Pirelli corporate editorial (pt-BR)** — article *“Das redes sociais para as estradas de terra”* (Pirelli global pt-BR site) describes partnership storytelling around **Triton 4x4 Club**, mentions **@pirelli_br** in the ecosystem of Pirelli Brasil social presence, and quotes on **Pirelli Scorpion All Terrain Plus** and **Pirelli Scorpion MTR** in off-road / club context. Source: https://www.pirelli.com/global/pt-br/road/carros/das-redes-sociais-para-as-estradas-de-terra-114477/
2. **Web search** did not return a reliable set of direct **@pirelli_br** permalinks with captioned bodies suitable for pasting as “Raw Content” items; index results pointed at unrelated reels or other accounts.

---

## Content items

*No Content 1…N sections — first-party capture pending successful Playwright profile access.*

When re-run succeeds, populate items using the Sherlock template (carousel slides, reel caption + transcription or “Transcription unavailable — caption only.”, single image captions, metrics, URLs).
