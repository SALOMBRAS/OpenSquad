---
task: "Criar capa (slide 1)"
order: 1
input: |
  - selected-headline.md, carousel-draft.md
  - stock-image-policy, design-system-carousel-cover, branding Rico Pneus
output: |
  - slide-01.html em output/{run_id}/slides/
---

# Criar capa

## Processo

1. Confirmar manchete e micro-copy do checkpoint. Escolher **uma** imagem Unsplash/Pexels coerente com o tema; registrar URL e crédito.
2. **Nunca** incluir mascote, boneco ou personagem ilustrado — padrão fixo até o cliente dar **segunda ordem** ([`mascot-character-policy.md`](../../../pipeline/data/mascot-character-policy.md)). Se o copy pedir personagem, **não** desenhar; devolver ao checkpoint para confirmação humana.
3. Montar HTML: viewport 1080×1440, camadas fundo → degradê → conteúdo; **espaçamentos** e tipografia conforme [`design-rico-pneus-typography-layout.md`](../../../pipeline/data/design-rico-pneus-typography-layout.md); badge/rodapé conforme [`carousel-branding-rico-pneus.md`](../../../pipeline/data/carousel-branding-rico-pneus.md).
4. Salvar em `squads/rico-pneus-carousel/output/{run_id}/slides/slide-01.html`.

## Quality Criteria

- [ ] Legibilidade e contraste.
- [ ] Foto apenas de fontes permitidas.
- [ ] Nenhuma referência a marcas concorrentes ou projetos alheios.

## Veto Conditions

Capa sem degradê sobre foto; uso de imagem sem licença clara; inclusão de mascote/personagem ilustrado (proibido no padrão atual).
