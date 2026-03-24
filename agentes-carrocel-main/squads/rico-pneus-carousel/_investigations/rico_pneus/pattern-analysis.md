# Pattern Analysis: @rico_pneus (Instagram)

Analyzed: 2026-03-24  
Sample size: 10 contents (partial extraction — see caveats)  
Period covered: 2025-01-27 to ~2026-03-17 (best available from retrieved metadata)

## Executive summary

Rico Pneus (@rico_pneus) operates as a **Fortaleza-based B2C tire distributor**, leaning hard on **Continental / Barum** credentials, **consultative sales** (“consultores”), and **local trust** (address, WhatsApp-style phone, “link na Bio”). The feed mixes **product-led Barum explainer posts** (benefits bullets, emojis), **institutional location creatives**, and **short promo Reels**. English/Portuguese **bilingual sticker copy** appears on some creatives (terrain education), which suggests **Instagram-first design** aimed at clarity in the feed. 

**Caveats:** The **profile grid was not opened** (login wall + no Playwright in this session). Carousel vs single vs reel counts in the grid could not be verified. Recorded engagement is **very low in the captured sample** (often single-digit likes), so “high engagement” conclusions below are **weak** — patterns describe messaging and format choices, not proven viral performance.

---

## Structural patterns

### Content mix (as classified from permalinks)

| Type        | Count | Percentage | Avg. engagement (known) |
|------------|-------|------------|-------------------------|
| Single image / static post | 8 | 80% | ~3–4 likes where shown |
| Reel       | 2 | 20% | Not retrieved |
| Confirmed carousel (multi-slide single post) | 0 | 0% | *Unconfirmed — needs logged-in grid* |

### Format structures

- **Static posts:** Short **sales letter** captions — hook + benefit bullets (✔ / 💡) + **emoji punch** + **👉 / 📍 CTA** to Rico Pneus or orçamento.
- **Educational / awareness (23 Feb 2026 set):** Bold **headline on art** (“nem todo pneu é igual”), then **terrain taxonomy** (HT vs AT), then **human CTA** with phone and store address — classic **problem → education → trust → contact** sequence (either one carousel or three scheduled singles).
- **Reels:** One **service-trust** narrative (long caption in cover text), one **promo burst** (“Corre e aproveite”).
- **Captions:** **2–6 short lines** plus grouped hashtags in older posts (#pneusfortaleza family).

### Posting cadence

- Not computable from this sample alone. Three posts share the **same calendar date** in accessibility metadata (2026-02-23), implying **burst / campaign-style** publishing is used at least occasionally.

---

## Language patterns

### Tone profile

**Brazilian Portuguese, conversational-commercial:** mixes “você” with concrete specs (medida 175/70R13), reassurance (“tranquilidade”, “confiança”), and **light urgency** on promos. Continental authority is **stated, not argued** (“revendedores autorizados Continental”).

### Hook patterns (from visible copy / on-image headlines)

1. “**Se você busca economia sem abrir mão da segurança**…” — Pattern: **benefit tension** (price vs safety).
2. “**Atendimento que faz a diferença na hora de escolher seus pneus** 🤝” — Pattern: **service differentiation**.
3. “**NEM TODO PNEU É IGUAL. E ESCOLHER ERRADO PODE CUSTAR CARO.**” — Pattern: **fear + problem awareness** (insurance-style).
4. “**Pneus para todas as ocasiões aqui na Rico Pneus.**” — Pattern: **breadth / one-stop** claim.
5. “**Está a procura do pneu ideal para seu veículo?**” — Pattern: **direct question** to the buyer.

### Call-to-action patterns

1. **Immediate quote:** “Solicite seu orçamento agora mesmo.” — institutional posts.
2. **Visit / equipe:** “Garanta já o seu na Rico Pneus”, “Vem pra Rico Pneus e equipe seu carro com qualidade!”
3. **Human channel:** “Fale com a gente pelo **link na Bio**” + phone on art.
4. **Promo urgency:** “Corre e aproveite!!!!”

### Vocabulary signature

- “**distribuidora**”, “**revendedores autorizados Continental**”, “**consultores**”, “**orçamento**”
- “**rodar / rodagem / km**”, “**custo por quilômetro**” (fleet-conscious phrasing)
- **Fortaleza / Montese / CE** — geo anchors every few posts
- Brand:** Barum Bravuris 5HM**, **Continental**

### Style notes

- **Bullets** with ✔ and 💡 in product posts.
- **Emoji density:** moderate (🚗💨, 🛞, 🚗✨, 👉, 📍).
- **Hashtags:** end-loaded blocks; mix of **local** (#pneufortaleza) and **brand** (#pneuscontinental).

---

## Engagement patterns

### Highest performing content (within incomplete data)

| Rank | Hook / label | Type | Key metric | What might make it work |
|------|----------------|------|------------|-------------------------|
| 1 | Continental + orçamento CTA | Static | 4 likes (only spread seen) | Clear **who we are** + **one action** |
| 2 | Barum economia vs segurança | Static | 3 likes | **Relatable tradeoff** + bullets |
| 3 | “Pneu ideal” + consultores | Static | 3 likes | **Consultation** reduces purchase anxiety |

*Views, saves, shares, and reel metrics were not captured.*

### Engagement drivers (hypotheses)

- **Concrete specs + emotional benefit** in the same caption.
- **Educational scare + solution** on-sheet creative (wrong tire = cost).
- **Repeated phone / address** builds **local legitimacy** for Fortaleza buyers.

### Underperforming signals (hypothesis only)

- Very similar **Barum back-to-back** posts might **fatigue** a small follower base if not varied with proof (client photo, before/after, video install).
- **Hashtag-only discovery** may underperform if tags are generic; local + model-specific tags might help (not observed).

---

## Recommendations for squad

1. **Confirm carousel behavior on-device:** When Playwright + login work, **open grid items with stacked icon first** and extract **all slides**; the Feb 23 trilogy may be one carousel — structure templates differ if unified.
2. **Preserve the “tension → proof → CTA” caption skeleton** for carousel copy: line 1 tension or question; 2–4 bullets; one strong CTA (orçamento / WhatsApp / loja).
3. **Reuse bilingual on-slide taxonomy** sparingly for educational carousels (HT/AT)** — keep Portuguese lead, English as sub-label to match their creative.
4. **Balance product posts with one “consultive myth-bust”** per week using the “nem todo pneu é igual” angle — it’s their clearest **non-price hook**.
5. **Reels:** Transcribe audio when tools exist; for now, treat **cover text + first 3s** as the written hook; add **on-screen captions** in squad brief mirroring the service reel’s full paragraph tone.

---

## Method note (for Architect)

**Source:** Investigation — @rico_pneus  
**Limitation:** No Playwright MCP in session; profile grid blocked without login; **re-run Sherlock with `@playwright/mcp`** and persistent `_opensquad/_browser_profile` for authoritative carousel counts, metrics, and screenshots in `screenshots/*.png`.
