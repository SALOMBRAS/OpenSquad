# Pattern Analysis: @pirelli_br (Instagram)

Analyzed: 2026-03-24  
**Sample size: 0 contents** (profile grid not accessible in this run)  
**Period covered:** N/A (no post dates extracted)

> **Method note:** Patterns below are **not** inferred from @pirelli_br posts. The intended `profile_5_10` sample was not collected because Playwright browser tools were unavailable in this session, Instagram fetch timed out, and no grid/modal captions were captured. Re-run Sherlock with Playwright MCP + persisted login in `_opensquad/_browser_profile/` to populate this file from real posts.

## Executive Summary

The investigation did not yield a first-party sample from https://www.instagram.com/pirelli_br/. Without grid snapshots and opened post modals, structural, language, and engagement patterns specific to this account cannot be claimed. A partial editorial cue from Pirelli’s own Portuguese site positions Pirelli Brasil alongside lifestyle/off-road partners (e.g. Triton 4x4 Club) and product lines such as Scorpion AT/MTR—useful brand context only, not a substitute for Instagram content patterns. **Treat this document as a placeholder until a successful grid extraction fills the template with real posts.**

## Structural Patterns

### Content Mix

| Type | Count | Percentage | Avg. Engagement |
|------|-------|------------|------------------|
| Carousel | — | — | — |
| Reel | — | — | — |
| Single Image | — | — | — |

*(No data — 0 posts sampled.)*

### Format Structures

- **Carousels:** N/A
- **Reels:** N/A (when re-run: if `yt-dlp` / `ffmpeg` / `whisper` remain missing, use caption-only per Sherlock rules)
- **Posts:** N/A

### Posting Cadence

- N/A (no timestamps)

## Language Patterns

### Tone Profile

N/A (no captions)

### Hook Patterns

1. N/A  
2. N/A  
3. N/A  
4. N/A  
5. N/A  

### Call-to-Action Patterns

1. N/A  
2. N/A  
3. N/A  

### Vocabulary Signature

- N/A (no post text)

### Style Notes

- N/A

## Engagement Patterns

### Highest Performing Content

| Rank | Content | Type | Key Metric | What Made It Work |
|------|---------|------|------------|-------------------|
| — | — | — | — | — |

### Engagement Drivers

- N/A (insufficient sample)

### Underperforming Content

- N/A (insufficient sample)

## Recommendations for Squad

1. **Re-run investigation with Playwright MCP:** Navigate to `https://www.instagram.com/pirelli_br/`, ensure a logged-in session if a wall appears, then collect up to **10** posts with **carousel priority** per Architect instructions.

2. **Install video stack if Reels matter:** Add `yt-dlp`, `ffmpeg`, and `whisper` so Reel transcriptions can be attached; otherwise standardize on caption-only lines in `raw-content.md`.

3. **Use full screenshot paths only:** `squads/rico-pneus-carousel/_investigations/pirelli_br/screenshots/{name}.png` when documenting UI state or grid layout.

4. **After successful extraction:** Replace this file’s N/A sections using the single-profile template in `sherlock.prompt.md` (from “Pattern Analysis File” onward) with real counts, hooks, CTAs, and engagement table rows.

5. **Optional brand context (non-Instagram):** For background only, Pirelli pt-BR editorial on off-road/social partnership (Triton 4x4 Club, Scorpion lines) may inform *tone* hypotheses—validate against actual @pirelli_br captions once scraped.
