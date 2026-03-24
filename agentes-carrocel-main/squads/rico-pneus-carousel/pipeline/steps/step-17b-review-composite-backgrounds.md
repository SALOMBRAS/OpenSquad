---
execution: inline
agent: background-composite-reviewer
inputFile: squads/rico-pneus-carousel/output/{run_id}/backgrounds/composited/
outputFile: squads/rico-pneus-carousel/output/{run_id}/background-composite-review.md
format: instagram-feed
on_reject: step-17a-composite-backgrounds
---

# Step 17b: Homologar fundos compostos

Helena revisa raw vs composited e o manifesto. Em **APPROVE**, promover `composited/bg-NN.*` → `backgrounds/bg-NN.*` (substituir placeholders usados pelo HTML). Em **REJECT**, devolver briefing para Eduardo (step 17a).

**Próximo step:** `step-18-create-cover` (ou fluxo paralelo da capa conforme run).
