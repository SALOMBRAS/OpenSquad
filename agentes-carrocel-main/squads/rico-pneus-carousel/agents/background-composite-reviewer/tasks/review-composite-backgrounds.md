---
task: "Homologar fundos compostos"
order: 1
input: |
  - output/{run_id}/backgrounds/raw/
  - output/{run_id}/backgrounds/composited/
  - output/{run_id}/composite-layer-manifest.md
  - pipeline/data/background-composite-reviewer-training.md
  - background-compositing-spec.md, background-compositor-training.md, client-carousel-design-standard.md
output: |
  - output/{run_id}/background-composite-review.md (APPROVE | REJECT)
---

# Homologar fundos compostos

## Processo

0. Ler **[`background-composite-reviewer-training.md`](../../../pipeline/data/background-composite-reviewer-training.md)** e aplicar princípios (equilíbrio, contraste, hierarquia, proximidade, alinhamento) ao julgar só o que mudou no raster.
1. Comparar **raw** vs **composited** para cada `bg-NN`: efeitos melhoram impacto sem **prejudicar** o produto nem a futura leitura do texto?
2. Conferir **`composite-layer-manifest.md`**: licenças e paths de assets da `asset-library/` estão declarados?
3. Verificar **1080×1440**, nitidez do pneu, ausência de artefatos de compressão grosseiros, coerência com paleta Rico (sem carnival de cores aleatórias).
4. Emitir **`background-composite-review.md`**:
   - `verdict: APPROVE` → instruir cópia `composited/bg-NN.*` → `backgrounds/bg-NN.*` (substituir placeholder).
   - `verdict: REJECT` → `slides_to_recomposite`, `correction_brief` objetivo para Eduardo.

## Critérios de REJECT

- Produto principal ilegível ou tapado por overlay.  
- Asset sem licença documentada.  
- Excesso de ruído visual (“photoshop de 2005”) que conflita com [`client-carousel-design-standard.md`](../../../pipeline/data/client-carousel-design-standard.md).
