# Rico Pneus — memoria do squad

- **Criado em:** 2026-03-24
- **Origem:** fluxo Arquiteto Opensquad; base tecnica copiada de `carousel-pro` e adaptada para a marca.
- **2026-03-24 (agentes):** prompts de design alinhados ao padrao **insta-mvp** (Patricia/Carlos/Diana/Vicente), com identidade **Rico Pneus**, stock **Unsplash + Pexels**. **Mascote:** padrao **sempre SEM mascote** ate **segunda ordem** explicita do cliente (`mascot-character-policy.md`).
- **2026-03-24 (revisao design/conteudo):** guia `design-rico-pneus-typography-layout.md` (espacamento, hierarquia, tipografia, luz/contrast); links relativos nos `.agent.md` corrigidos para `../pipeline/data/`; foco em **vendas de pneus** e CTAs em `brand-rico-pneus.md`; agentes instruidos a **perguntar antes** em duvidas de design/copy.
- **2026-03-24 (composicao de fundo):** agentes **Eduardo Compositor** (`background-compositor`) e **Helena Homologacao-Fundo** (`background-composite-reviewer`) — pos-processamento raster de `backgrounds/raw/` para `composited/`, QA em `background-composite-review.md`, promocao para `backgrounds/bg-*`. **Treinamento Eduardo:** `pipeline/data/background-compositor-training.md`. **Treinamento Helena (avaliadora):** `pipeline/data/background-composite-reviewer-training.md` (principios de design, Parte 1+ conforme anexado). Ver tambem `background-compositing-spec.md`, steps `17a` e `17b`; asset-library em `pipeline/data/asset-library/`.
- **2026-03-24 (padrao Instagram — decisao do cliente):** documento **`pipeline/data/client-carousel-design-standard.md`** — padrao unico para proximos carrosseis: **variedade de fotos de pneu** (sem carro heroi, sem mecanico), **bolinhas `.nav-dots`** em todos os slides, **hierarquia de tipo** (Montserrat 900 + Inter), **cores Rico**, **diagramacao dinamica** (scrim parcial, alternancia de alinhamentos), **um CTA forte so no ultimo slide**, **fundos locais** quando necessario para render, **legibilidade em fundo claro** (texto escuro ou painel/sombra). **Todos os agentes de design/capa/fundo/revisao** devem carregar esse arquivo em conjunto com `carousel-layout-rules.md`.
- **Investigacao Sherlock:** parcial — priorizar re-run com Playwright + perfil `_opensquad/_browser_profile` para Pirelli, Continental e grid completo das marcas.
- **Regras duras:** nunca conteudo de pneus de moto; um CTA principal no ultimo slide; claims verificaveis.

## Proximas melhorias sugeridas

1. Substituir logos/assets neutros por identidade visual oficial Rico Pneus nos steps de design (quando arquivos estiverem disponiveis).
2. Apos investigacao completa, atualizar `research-brief.md` e ganchos em `output-examples.md` com dados reais dos perfis de referencia.
