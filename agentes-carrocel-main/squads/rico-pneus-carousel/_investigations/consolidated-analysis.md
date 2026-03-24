# Consolidated investigation — Rico Pneus carousel squad

**Date:** 2026-03-24  
**Squad:** `rico-pneus-carousel`  
**Profiles analyzed:** 4 requested (@pirelli_br, @michelinbrasil, @continentalpneus, @rico_pneus)

## Data quality note

| Profile | Sample | Notes |
|---------|--------|-------|
| @rico_pneus | Partial (10 items, grid not fully opened) | Strong signal on **local B2C voice**, CTAs, Continental/Barum positioning. [Source: Investigation — @rico_pneus] |
| @pirelli_br | 0 posts (placeholder) | Playwright/login limits; re-run Sherlock. [Source: Investigation — placeholder] |
| @michelinbrasil | Snippet only (header + post URLs) | Mix of reels + `/p/` posts; brand tone “inovando desde 1889”, highlights (WEC, Dicas Michelin, 4 Rodas). [Source: partial scrape + profile text] |
| @continentalpneus | 0 posts in JSON | Extraction empty; re-run. [Source: Investigation — failed extract] |

**Priority rule:** Where investigation conflicts with web research, **@rico_pneus** patterns override generic tire-brand assumptions for **voice and CTA**. Pirelli/Michelin/Continental conclusions below lean on **industry norms** until grids are re-scraped.

---

## Universal patterns (actionable for the squad)

### Structural

- **Cover slide:** 2–3 s to stop scroll; **8–10 words** max on cover promise; question, stat, myth/fact, or tension (“economia vs segurança”) work across automotive education. [Source: Web research — carousel strategy]
- **Body:** Clear arc — problema → educação → prova/autoridade → **um** CTA. Rico already uses **tension → bullets → CTA** in static posts; **replicate across slides**. [Source: Investigation — @rico_pneus]
- **Saves-focused:** listas, checklists, “sinais de que…”, profundidade de sulco, calibragem — good for **mixed audience** (particular + frota). [Source: Web research + Pneu Seguro / segurança viária education models]
- **Slide count:** 7–12 slides for guides; avoid padding. [Source: Web research]

### Language

- **PT-BR conversacional-comercial:** “você”, benefício concreto + spec quando útil (medidas, km). [Source: @rico_pneus]
- **Geo trust:** Fortaleza, Montese, telefone/WhatsApp on final slides when aligned with checkpoint. [Source: @rico_pneus + discovery brief]
- **Authority without hype:** “revendedor autorizado”, “consultores” — **no** “melhor pneu do mundo” sem teste citável. [Source: FTC/ASA comparative rules + squad compliance]

### Engagement drivers (hypotheses)

- **Educational fear + solution** (“nem todo pneu é igual”) + **one clear action** (orçamento / WhatsApp / loja). [Source: @rico_pneus]
- **Myth vs fact** and **checklist** formats for saves (sulcos, pressão, rodízio). [Source: Web research + segurança viária content]
- **Local + fleet hooks** alternating across weeks (custo por km, frota, oficina parceira) to match **40/30/15/10/5** mix from discovery. [Source: User discovery]

---

## Profile differentiators

### @rico_pneus

- **Distribuidora** framing, Continental/Barum, **orçamento** and **link na bio** CTAs, bullets ✔/💡, **bilingual labels** on some educational art (HT/AT). **Do not** claim high engagement from data — sample metrics were weak. [Source: Investigation]

### @michelinbrasil (partial)

- Large **brand** account: motorsport, lifestyle adjacency, **“Dicas Michelin”** — useful for **educational carousel** ideas (tips series), not for copying corporate scale. [Source: profile snippet]

### @pirelli_br / @continentalpneus

- **Re-run required** for first-party hooks/CTAs; until then use **generic premium-brand** patterns: produto + uso (off-road, performance) sem comparativo nomeado contra concorrente. [Source: placeholder]

---

## Recommended framework (for `domain-framework.md` / agents)

### Structure template

1. **Hook (slide 1):** pergunta direta, tensão benefício vs segurança, ou “mito vs fato” — alinhado à manchete aprovada no checkpoint.
2. **Slides 2–N-1:** 1 ideia por slide; listas curtas; dados só com fonte no rodapé ou legenda (“fonte: Inmetro / fabricante” quando aplicável).
3. **Slide final:** **um** CTA (comentar / WhatsApp / orçamento / loja) + reforço local opcional se aprovado.
4. **Legenda:** 2–6 linhas + hashtags locais (#pneusfortaleza, #fortaleza) — espelhar tom do checkpoint.

### Voice

- **Tom:** direto, consultivo, confiável; urgência só em campanhas explícitas.
- **Adopt:** “orçamento”, “consultores”, “distribuidora”, “rodagem”, “calibragem”, “sulcos”.
- **Avoid:** menção a **pneus de moto** (proibido), comparativos **não verificáveis** entre marcas, promessas absolutas de economia sem contexto.

### Hook templates (from @rico_pneus + web)

1. **Tensão:** “Se você busca economia sem abrir mão da segurança…”
2. **Problema:** “Nem todo pneu é igual — escolher errado pode custar caro.”
3. **Consultivo:** “Está à procura do pneu ideal para seu veículo?”
4. **Checklist:** “3 sinais de que seus pneus pedem atenção.”
5. **Frota:** “Custo por km começa na calibragem certa.”

### CTA templates

1. **Orçamento:** “Solicite seu orçamento agora mesmo.”
2. **WhatsApp / bio:** “Fale com a gente pelo link na bio” + número se aprovado.
3. **Loja:** “Rua Quinze de Novembro 1074 — Montese, Fortaleza.”

### Anti-patterns

- Conteúdo de **moto** (proibido).
- Comparar marca A vs B sem metodologia citável.
- **CTA múltipla** no mesmo slide final (salvar + comentar + DM + site tudo junto).
- Jargão técnico denso sem tradução para leigo (quebra retenção).

---

## Next step for data quality

Re-executar Sherlock com Playwright MCP + `_opensquad/_browser_profile` logado para preencher @pirelli_br, @continentalpneus e completar @michelinbrasil com carrosséis reais.
