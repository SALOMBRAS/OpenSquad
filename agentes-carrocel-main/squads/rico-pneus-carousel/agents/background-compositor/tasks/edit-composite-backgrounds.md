---
task: "Compor fundos brutos (efeitos pré-texto)"
order: 1
input: |
  - output/{run_id}/backgrounds/raw/bg-01..0N.*
  - pipeline/data/background-compositor-training.md
  - pipeline/data/background-compositing-spec.md
  - pipeline/data/asset-library/ (opcional)
  - carousel-draft.md / client-carousel-design-standard.md (tom e foco)
output: |
  - output/{run_id}/backgrounds/composited/bg-01..0N.jpg (ou png)
  - output/{run_id}/composite-layer-manifest.md
---

# Compor fundos brutos

## Processo

1. Ler **`background-compositor-training.md`** (efeitos e ícones) e **`background-compositing-spec.md`**; verificar `skip-background-composite.md` — se sim, **não** compor; encerrar com nota.
2. Para cada `raw/bg-NN`, planejar **efeitos** coerentes com o tema do slide (fumaça leve, desfoque num canto, ícone pontual, balão vazio, vinheta). **Não** cobrir o pneu protagonista; respeitar [`client-carousel-design-standard.md`](../../../pipeline/data/client-carousel-design-standard.md).
3. Usar apenas assets **licenciados** — prioridade: `pipeline/data/asset-library/`, Unsplash/Pexels overlays próprios, ou formas geradas (gradientes). Registrar no manifest.
4. Exportar raster **1080×1440** (ou crop central final nessa proporção) para `backgrounds/composited/bg-NN.jpg`.
5. Preencher **`composite-layer-manifest.md`**: por slide, lista de operações (blur 12px em canto inf. esq., overlay `asset-library/smoke-01.png` opacidade 35%, etc.).

## Anti-patterns

- Texto final do carrossel no raster (isso é papel do HTML/Diana).  
- Stock sem licença; logos de terceiros.  
- Efeitos que destroem nitidez do produto ou viram “lama” no JPEG.
