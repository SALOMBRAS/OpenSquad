# Padrão de design — carrosséis Instagram Rico Pneus (decisão do cliente)

**Autoridade:** este documento consolida **escolhas editoriais aprovadas pelo cliente** para carrosséis da Rico Pneus. Agentes de design, fundo, capa e revisão visual devem **alinhar entregas** a ele **e** aos guias técnicos citados no fim (em caso de conflito textual antigo, **este doc + memória do squad** prevalecem para o que estiver explicitamente como decisão do cliente).

**Última atualização:** 2026-03-24

---

## 0. Composição raster opcional (novo pipeline)

- Entre **Patricia** (raw) e o **HTML**, **Eduardo Compositor** pode tratar a imagem (fumaça, blur local, ícones da `pipeline/data/asset-library/`, balões vazios). **Helena Homologação-Fundo** aprova ou reprova antes do fundo final ir para `backgrounds/bg-*`.  
- Especificação: [`background-compositing-spec.md`](background-compositing-spec.md). **Não** misturar copy final no raster — texto continua no HTML (Diana).

## 1. Imagem de fundo — variedade e conteúdo

- **Produto:** o carrossel vende **pneu**; priorizar **pneu de automóvel** (sulcos em close, pilha, estante, loja com fileiras, unidade no chão).  
- **Evitar:** **carro** como herói da cena, **mecânico** ou pessoa em oficina, paisagem de estrada **sem** borracha/pneu visível, **moto** (regra de negócio paralela).  
- **Variedade:** **uma imagem distinta por slide** (ou painéis coerentes com o fluxo do run); não repetir o mesmo enquadramento genérico em todos os cards.  
- **Stock:** apenas **Unsplash** e **Pexels**, com registro em `background-manifest.md`.  
- **Render estável:** para HTML local + Playwright, preferir **`v7/assets/bg-01.jpg` …** (arquivos no disco) em vez de URL remota só em `background-image` — URLs antigas podem retornar **404** em `file://` e o export sai **sem foto**. Ver notas em entregas `design-notes-v*.md` e `background-manifest.md`.

---

## 2. Tratamento de fundo e legibilidade

- **Degradê / scrim:** usar **faixas parciais** (`linear-gradient` de tom escuro → **transparente**): `.scrim-bottom`, `.scrim-left` ou `.scrim-right` conforme o alinhamento do texto — **não** “véu” uniforme em tela cheia que apague a foto.  
- **Exceções:** slides com texto **centralizado** no miolo podem usar **sombra no tipo** + **caixas opacas** (ex.: `.highlight-box`) em vez de scrim global.  
- **Fundo muito claro:** seguir **`carousel-layout-rules.md`** secção **Legibilidade — fundo claro vs texto**: texto escuro, **ou** painel/cxa atrás do bloco, **ou** sombra/fumaça/scrim local — prioridade absoluta é **leitura nítida no JPEG**.

---

## 3. Bolinhas de navegação (`.nav-dots`)

- **Incluir em todos os slides** do carrossel.  
- **Slide ativo:** preenchimento **vermelho Rico** (`#C62828`), borda/highlight coerente com acentos (ex.: `#FF8A80` / `#FFAB91`).  
- **Demais:** círculos semitransparentes (`rgba(255,255,255,.32–.38)`), borda suave clara.  
- Posição: **rodapé central** (~32px da base), `z-index` acima do conteúdo que possa sobrepor.  
- **Nota:** o template genérico em `carousel-layout-rules.md` ainda descreve carrossel **sem** bolinhas (Instagram já indica posição); para **Rico Pneus**, a **decisão do cliente** é **com** bolinhas — ver também `squads/rico-pneus-carousel/_memory/memories.md`.

---

## 4. Hierarquia e diagramação dinâmica

- **Um foco por slide;** ordem lógica: contexto → informação → (dados/gráfico quando houver) → **fechamento com CTA** no último slide.  
- **Capa (slide 1):** conteúdo principal na **parte inferior** (`justify-content: flex-end` no bloco interno), com respiro para badge/título/sub/marca.  
- **Miolo:** alternar **centro / esquerda / direita** quando fizer sentido (ex.: texto à esquerda com `.scrim-left` + foto respirando à direita; ou espelhado) — **diagramação dinâmica**, sem todos os slides iguais.  
- **Gráficos:** nos slides **2, 4 e 6** (quando **N ≥ 6**), manter **SVG de barras horizontais** como herói visual de apoio, com legendas legíveis (regras em `carousel-layout-rules.md` §10 — gutter à direita, rótulos fora da barra).  
- **Badge** opcional no topo: pill “**Qualidade · Pneus**”, borda clara semitransparente, tipografia Montserrat em caixa alta.  
- **Rodapé de marca:** ex. `Rico Pneus · Fortaleza · CE` (peso ~600, tamanho menor que o corpo).

---

## 5. Cores e destaques no texto

- **Paleta:** `design-system-rico-pneus-colors.md` — vermelho automotivo (**`#C62828`**, **`#E53935`**, **`#B71C1C`**), texto claro sobre escuro, **sem azul** como identidade principal.  
- **Acentos típicos no HTML:**  
  - `.accent` — coral/salmão (**`#FF8A80`**) para palavra-chave no título.  
  - `.gold` — amarelo destaque (**`#FDE047`**) para segunda ênfase.  
  - `.hl` no corpo — âmbar (**`#F9A825`**) pontual.  
- **Traço superior:** `.top-accent` **`#C62828`**, altura ~6px, largura total.  
- **CTA box (último slide):** fundo **`#C62828`**, texto branco, sombra de profundidade moderada.

---

## 6. Tipografia (famílias, pesos, tamanhos de referência — canvas 1080×1440)

- **Google Fonts (link típico):** `Inter` (400, 600, 700) + `Montserrat` (800, 900).  
- **Títulos:** **Montserrat 900** (ou 800), **~44–50px**, line-height apertado (~1.06–1.14), `text-shadow` quando sobre foto.  
- **Corpo:** **Inter 400–600**, **~24px**, line-height ~1.45–1.5.  
- **Badge:** **Montserrat 800**, **~13px**, uppercase, letter-spacing ~0.06em.  
- **Rodapé / marca:** **Inter 600**, **~16px**, cor secundária clara.  
- **CTA:** **Montserrat 800** ~**26px** no bloco principal; linha secundária **Inter 600** ~**21px**.  
- Ajustar dentro dos mínimos de `design-system-instagram-regras-gerais.md` e `design-rico-pneus-typography-layout.md` sem reduzir legibilidade em celular.

---

## 7. Chamadas para ação (CTA)

- **Um único CTA forte** no **último slide** (não espalhar pedidos iguais de conversão nos slides intermediários).  
- Formato típico: manchete curta + **caixa sólida** (`.cta-box`) com canal (**WhatsApp** + número) + linha de reforço (bio, @, bairro/cidade).  
- Manter coerência com `brand-rico-pneus.md` e escolhas registradas em `selected-cta.md` / checkpoint do run.

---

## 8. O que não usar (alinhado ao squad)

- Setas decorativas tipo “swipe”, `.footer-swipe`, `.nav-pill`, ilustrações de seta entre blocos.  
- **Mascote / personagem** ilustrado — exceto **segunda ordem** explícita (`mascot-character-policy.md`).  
- Marca ou tom de **outros squads** (TheCrowDev, Insta MVP genérico, etc.).

---

## 9. Documentos técnicos complementares (ordem de leitura sugerida)

1. `carousel-layout-rules.md`  
2. `design-system-rico-pneus-colors.md`  
3. `design-rico-pneus-typography-layout.md`  
4. `carousel-branding-rico-pneus.md`  
5. `carousel-visual-reference.md`  
6. `stock-image-policy.md`  
7. `render-spec.md`  
8. `squads/rico-pneus-carousel/_memory/memories.md`  

---

*Este arquivo é a referência explícita “decisão do cliente” para padronizar próximos carrosséis Rico Pneus no Instagram.*
