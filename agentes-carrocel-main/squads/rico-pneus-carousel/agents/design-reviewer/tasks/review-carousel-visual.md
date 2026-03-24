---
task: "Revisar carrossel visual"
order: 1
input: |
  - images/01.jpg .. 0N.jpg
  - client-carousel-design-standard.md, carousel-layout-rules, branding Rico Pneus
output: |
  - design-review.md (APPROVE | REJECT, slides_to_redo, correction_brief)
---

# Revisar carrossel visual

## Processo

1. Abrir cada JPEG; checar **nitidez**, **contraste** texto/fundo (incl. fundos claros), **`.nav-dots`** em todos os slides, marca Rico Pneus no rodapé, badge superior se aplicável — critérios em [`client-carousel-design-standard.md`](../../../pipeline/data/client-carousel-design-standard.md).
2. Verificar **hierarquia e espaçamento** (nada amontoado ilegível) conforme [`design-rico-pneus-typography-layout.md`](../../../pipeline/data/design-rico-pneus-typography-layout.md).
3. Se N ≥ 6, inspecionar imagens 02, 04, 06 para **gráfico de barras horizontais** legível.
4. **REJECT** se houver **mascote/personagem ilustrado** (cartoon, boneco) sem “segunda ordem” documentada — foto real de stock é OK.
5. Falhar se aparecer **Insta MVP**, **TheCrowDev**, **LuanPDD** ou identidade errada.
6. Escrever `design-review.md` em `squads/rico-pneus-carousel/output/{run_id}/`.

## Quality Criteria

- [ ] Todas as imagens avaliadas.
- [ ] `correction_brief` acionável se REJECT.
