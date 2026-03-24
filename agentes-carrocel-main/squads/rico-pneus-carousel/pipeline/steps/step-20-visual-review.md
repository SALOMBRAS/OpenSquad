---
execution: inline
agent: design-reviewer
inputFile: squads/rico-pneus-carousel/output/{run_id}/images/
outputFile: squads/rico-pneus-carousel/output/{run_id}/design-review.md
on_reject: step-19-render-html-jpg
---

# Step 20: Revisao visual

Validar legibilidade, hierarquia e consistencia. Em `REJECT`, retornar ao step 19.
