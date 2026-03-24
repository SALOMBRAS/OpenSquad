# Raw Content: @rico_pneus (Instagram)

Investigated: 2026-03-24  
Total contents analyzed: 10  
Content types: single image, reel (carousel count unknown — multi-slide posts not confirmed without grid access)

## Investigation method & blockers

- **Playwright MCP:** Not available in this Cursor subagent session (no `browser_navigate` / `browser_snapshot` tools exposed). Full profile grid extraction per `_opensquad/core/prompts/sherlock.prompt.md` was **not** executed end-to-end.
- **Profile URL:** https://www.instagram.com/rico_pneus/ — unauthenticated access shows a **login wall** (“Log into Instagram”). Post count in header and grid icons (carousel vs reel) were **not** read live.
- **Permalink HTML fetch:** Captions and metrics were recovered for several `/p/` URLs; others **timed out**. Where captions are missing, **on-image / accessibility descriptions** from Instagram HTML are preserved.
- **Reels:** **Caption-only** (plus cover alt text where present). **Transcription unavailable — caption only** (no `yt-dlp` / Whisper in this run).
- **Carousel priority:** Could not reorder grid by carousel icon. The three **2026-02-23** educational URLs are listed **first** as high-signal sequential educational creative (re-verify as one carousel vs three posts when logged in).

---

## Content 1: [Single Image | Educational warning]

**Date:** 2026-02-23  
**Metrics:** *Not retrieved (fetch timeout on permalink)*  
**URL:** https://www.instagram.com/rico_pneus/p/DVG_yEAFyME/

### Caption

*Caption not retrieved in this run — re-fetch with authenticated Playwright.*

### Slide 1

[Visual — accessibility / on-image text]  
NEM TODO PNEU É IGUAL. E ESCOLHER ERRADO PODE CUSTAR CARO. — DISTRIBUIDORA Rico Pneus.

---

## Content 2: [Single Image | Educational — terrain types]

**Date:** 2026-02-23  
**Metrics:** *Not retrieved*  
**URL:** https://www.instagram.com/rico_pneus/p/DVG_TFmIB38/

### Caption

*Caption not retrieved in this run.*

### Slide 1

[Visual — accessibility / on-image text]  
O PNEU IDEAL PARA CADA TERRENO — Highway Terrain (HT) / asphalt vs All Terrain (AT) / “qualquer terreno” (layout mix of PT/EN labels in creative).

---

## Content 3: [Single Image | CTA / specialists]

**Date:** 2026-02-23  
**Metrics:** *Not retrieved*  
**URL:** https://www.instagram.com/rico_pneus/p/DVG-4Btmszc/

### Caption

*Caption not retrieved in this run.*

### Slide 1

[Visual — accessibility / on-image text]  
TEMOS O PNEU IDEAL PARA O SEU CARRO — Rico Pneus ajuda a escolher corretamente; fale com especialistas; **85 99429-9228**; @ricopneus; R. 15 de Novembro, 1074, Montese, Fortaleza — CE.

---

## Content 4: [Single Image | Product — Barum Bravuris 5HM]

**Date:** ~2026-03-17 (“7 days ago” relative to 2026-03-24)  
**Metrics:** 3 likes, 0 comments  
**URL:** https://www.instagram.com/rico_pneus/p/DV_IOvyjKvF/

### Caption

Se você busca economia sem abrir mão da segurança, o Bravuris 5HM é a escolha certa 🚗💨  
Com excelente durabilidade, rodagem confortável e desempenho confiável no dia a dia, esse pneu foi desenvolvido para quem quer dirigir com tranquilidade — seja na rotina da cidade ou em pequenas viagens.  
✔ Maior vida útil  
✔ Ótima aderência  
✔ Mais estabilidade ao dirigir  
Na estrada ou no trânsito, a escolha do pneu faz toda a diferença.  
👉 Garanta já o seu na Rico Pneus e rode com mais segurança!

### Slide 1

[Visual — product; OCR from accessibility description]  
Barum Bravuris 5HM, medida 175/70R13; marca distribuidora Rico Pneus.

---

## Content 5: [Single Image | Product — Barum durability]

**Date:** ~2026-03-17 (“7 days ago”)  
**Metrics:** 3 likes, 0 comments  
**URL:** https://www.instagram.com/rico_pneus/p/DV_H--ODJjL/

### Caption

O Bravuris 5HM entrega exatamente isso: performance equilibrada, economia e resistência para enfrentar o dia a dia com muito mais confiança.  
Ideal para quem roda bastante e não quer se preocupar com trocas frequentes, ele oferece um excelente custo por quilômetro rodado.  
💡 Menos desgaste  
💡 Mais controle  
💡 Mais eficiência  
Invista em quem entende de estrada.  
📍 Vem pra Rico Pneus e equipe seu carro com qualidade!

### Slide 1

[Visual — accessibility / on-image text]  
Barum — conforto e durabilidade que acompanha você.

---

## Content 6: [Single Image | Store / institutional]

**Date:** *Not retrieved (permalink fetch timed out)*  
**Metrics:** *Not retrieved*  
**URL:** https://www.instagram.com/rico_pneus/p/DV_HzMZDEXn/

### Caption

*Caption not retrieved — re-fetch with authenticated Playwright.*

### Slide 1

[Visual — OCR from preview description]  
DISTRIBUIDORA pneus — “Seu caminho começa com a gente”; www.ricopneus.com.br; @rico_pneus; R. 15 de Novembro 1074, Montese, Fortaleza; (85) 99429-9228; cartões aceitos (per creative).

---

## Content 7: [Single Image | Continental authorized distributor]

**Date:** 2025-01-27  
**Metrics:** 4 likes, 0 comments  
**URL:** https://www.instagram.com/rico_pneus/p/DFVOAyzRNFX/

### Caption

Pneus para todas as ocasiões aqui na Rico Pneus.  
Somos uma distribuidora de Pneus em Fortaleza e revendedores autorizados Continental.  
Solicite seu orçamento agora mesmo.  
#pneus #pneuscontinental #distribuidoradepneus #pneufortaleza

### Slide 1

[Visual only — no caption overlay text in accessibility string beyond location “Rico Pneus.”]

---

## Content 8: [Single Image | Consultative CTA + bio link]

**Date:** 2025-01-27  
**Metrics:** 3 likes, 0 comments  
**URL:** https://www.instagram.com/rico_pneus/p/DFVNezeRMSe/

### Caption

Está a procura do pneu ideal para seu veículo?  
Temos os melhores consultores capacitados para tirar todas as suas dúvidas referente ao qual pneu escolher!  
Fale com a gente pelo link na Bio, e garanta os melhores pneus com os melhores preços.  
#pneu #continental #pneuscontinental #pneusfortaleza

### Slide 1

[Visual only — location Fortaleza / Ceará / Brasil in accessibility string]

---

## Content 9: [Reel | Service / trust]

**Date:** *Not confirmed (reel page fetch timed out)*  
**Metrics:** *Not retrieved*  
**URL:** https://www.instagram.com/rico_pneus/reel/DWOmXLQgGSQ/

### Caption

[From reel cover alt text surfaced on sibling post pages]

Atendimento que faz a diferença na hora de escolher seus pneus 🤝  
Na Rico Pneus, você encontra muito mais do que variedade: aqui, cada cliente recebe atenção de verdade. Nossa equipe está pronta para te orientar na escolha ideal, com transparência, conhecimento e foco no que realmente faz sentido para o seu veículo.  
Sem complicação, sem enrolação, só um atendimento direto, confiável e pensado para você sair seguro na sua compra.  
Rico Pneus. Confiança do primeiro atendimento até a escolha final 🚗✨

### Transcription

Transcription unavailable — caption only.

---

## Content 10: [Reel | Promo urgency]

**Date:** *Not confirmed*  
**Metrics:** *Not retrieved*  
**URL:** https://www.instagram.com/rico_pneus/reel/DVOIiTLAB5u/

### Caption

[From cover preview]

Promo RICO PNEUS🛞  
Corre e aproveite!!!!

### Transcription

Transcription unavailable — caption only.

---

## Appendix: Feed rail item (non-owned account)

Preview for **https://www.instagram.com/jhonfortal/reel/DVJhIi2DsTy/** appeared under “More posts from rico_pneus” with copy mentioning @rico_pneus (parcelamento 6x, ofertas). Treat as **collab / UGC** until verified; **excluded** from the 10-post Rico Pneus count above.
