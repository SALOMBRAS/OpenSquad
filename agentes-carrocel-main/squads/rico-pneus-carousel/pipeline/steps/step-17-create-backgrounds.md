---
execution: inline
agent: background-designer
inputFile: squads/rico-pneus-carousel/output/{run_id}/image-source-selection.md
outputFile: squads/rico-pneus-carousel/output/{run_id}/backgrounds/raw/
format: instagram-feed
---

# Step 17: Criar fundos (brutos)

Gerar **imagens brutas licenciadas** por slide em **`output/{run_id}/backgrounds/raw/bg-01…bg-0N`** (1080×1440 ou maior, recorte depois). Documentar em `background-manifest.md`.

**Placeholder para o HTML:** ao finalizar, **copiar** `raw/bg-NN` → **`backgrounds/bg-NN`** (mesmo nome) até que o step **17b** aprove a versão **composta** — aí `composited/` substitui `backgrounds/bg-*`.

**Próximo:** `step-17a-composite-backgrounds` (ou pular composição com `skip-background-composite.md`).
