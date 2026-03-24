# Design Contracts

Required run outputs for design stage:

- `typography-selection.md`: approved family, weights and usage.
- `logo-selection.md`: approved logo path and placement rule.
- `image-source-selection.md`: approved stock/image source policy.
- `backgrounds/raw/bg-01..0N.*`: **brutos** licenciados (Patricia, step 17).
- `backgrounds/composited/bg-01..0N.*` + `composite-layer-manifest.md`: versão **composta** (Eduardo, step 17a), se composição estiver ativa.
- `background-composite-review.md`: **APPROVE / REJECT** (Helena, step 17b); após APPROVE, `composited/` **promovido** para `backgrounds/bg-01..0N.*` consumidos pelo HTML.
- `backgrounds/bg-01..0N.jpg`: **fundos finais** por slide para `background-image` / assets (placeholder = cópia de `raw/` até aprovar composição).
- `slides/slide-01..N.html`: render-ready HTML slides.
- `design-review.md`: visual QA verdict and corrective brief (JPEG final com texto).
