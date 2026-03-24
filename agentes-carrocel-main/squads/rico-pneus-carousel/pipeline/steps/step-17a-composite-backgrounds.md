---
execution: inline
agent: background-compositor
inputFile: squads/rico-pneus-carousel/output/{run_id}/backgrounds/raw/
outputFile: squads/rico-pneus-carousel/output/{run_id}/backgrounds/composited/
format: instagram-feed
---

# Step 17a: Compor fundos (efeitos pré-texto)

Aplicar composição raster (desfoque, fumaça, opacidade, ícones da asset-library, balões vazios, etc.) sobre `backgrounds/raw/bg-*`, gerando `backgrounds/composited/bg-*` + `composite-layer-manifest.md`.

**Pré-requisito:** step 17 concluído com arquivos em `raw/`. Se existir `skip-background-composite.md` com skip, **pular** este step.

**Próximo step:** `step-17b-review-composite-backgrounds`.
