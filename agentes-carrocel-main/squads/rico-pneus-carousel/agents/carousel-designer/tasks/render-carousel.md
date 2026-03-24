---
task: "Renderizar carrossel em HTML + JPEG"
order: 1
input: |
  - carousel-draft.md, backgrounds/, slide-01 opcional
  - design-system e layout rules Rico Pneus
output: |
  - slides/slide-01..N.html
  - images/01.jpg .. 0N.jpg (1080×1440, alta qualidade)
---

# Renderizar carrossel

## Processo

1. Se `design-review.md` tiver `REJECT`, refazer apenas slides listados em `slides_to_redo`.
2. **Capa:** usar `slide-01.html` do Carlos Capa se existir; senão gerar capa com foto Unsplash/Pexels + degradê.
3. **Fundos:** se existir `backgrounds/bg-NN`, referenciar no HTML como camada inferior (ver [`carousel-infinite-background.md`](../../../pipeline/data/carousel-infinite-background.md)).
4. Aplicar [`carousel-branding-rico-pneus.md`](../../../pipeline/data/carousel-branding-rico-pneus.md) em **todos** os slides. Respeitar espaçamentos e hierarquia em [`design-rico-pneus-typography-layout.md`](../../../pipeline/data/design-rico-pneus-typography-layout.md).
5. **N ≥ 6 slides:** slides 2, 4 e 6 com gráfico SVG barras horizontais (§10).
6. **Sem mascote/personagem ilustrado** em nenhum slide — padrão até segunda ordem ([`mascot-character-policy.md`](../../../pipeline/data/mascot-character-policy.md)).

7. **Render JPEG:** viewport **1080×1440** full-bleed; salvar `squads/rico-pneus-carousel/output/{run_id}/images/01.jpg` … `0N.jpg` com **qualidade alta** (evitar artefatos em tipografia).

## Quality Criteria

- [ ] Dimensões exatas; JPEG legível.
- [ ] Contagem de imagens = número de slides.

## Veto Conditions

Dimensões erradas; texto cortado; compressão excessiva; watermark de stock.
