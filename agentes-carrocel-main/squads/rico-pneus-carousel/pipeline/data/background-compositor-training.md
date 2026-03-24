# Treinamento operacional — Agente de edição pesada (Eduardo Compositor)

Documento **armazenado para uso autônomo** pelo agente de composição raster. Aplicar em conjunto com [`background-compositing-spec.md`](background-compositing-spec.md), [`client-carousel-design-standard.md`](client-carousel-design-standard.md) e [`design-system-rico-pneus-colors.md`](design-system-rico-pneus-colors.md).

**Nota de escopo:** o fluxo Rico prioriza **texto e tipografia no HTML** (Diana). Este agente trata a **foto de fundo** (e elementos gráficos raster como ícones/fumaça). Quando o treinamento fala em “texto”, interpretar como **(a)** zona onde o HTML vai sobrepor, ou **(b)** texto raro já queimado no JPEG — no caso (a), **não desfocar** a área útil; legibilidade final é reforçada no CSS.

**Instagram = JPEG estático:** “movimento” ou “entrando na tela” = **simulação em uma camada** (motion blur leve, streak, ícone parcialmente cortado no bleed), não vídeo nem GIF no export deste pipeline.

---

## Objetivo

Aplicar efeitos e ícones de forma **criativa e eficiente**, alinhada a boas práticas de design para carrossel no Instagram. Entender as regras abaixo e **reutilizá-las autonomamente** conforme o tipo de conteúdo do slide (capa, miolo, CTA visual, etc.), registrando decisões no `composite-layer-manifest.md`.

---

## 1. Efeito de embaçamento (blur)

**Quando usar:** imagens com **muitos detalhes** ou fundo **complexo**, que competem com a leitura futura do bloco de texto.

**Como aplicar:** desfoque **leve** e **seletivo**. Na prática Rico: manter **nítido o pneu / produto protagonista**; desfocar **só** regiões distrativas ou a faixa onde haverá **alta densidade de texto** no HTML (coordenar com Diana se necessário). Evitar “névoa” em todo o quadro se isso matar o produto.

**Intensidade de referência:** equivalente moderado (ordem de grandeza **~10–20%** do que seu ferramenta usar como escala, ou raio gaussiano **baixo/médio** testado em 1080×1440).

**Regras:**

- Não aplicar blur sobre a **área do produto** que o carrossel quer vender.
- Não borrar texto **se** ele existir no raster; no fluxo normal o texto **não** está no raster.

---

## 2. Ícones e sensação de movimentação

**Quando usar:** momentos-chave — especialmente **capa** com título forte, ou reforço visual antes de **WhatsApp / benefício** (ex.: ícone de telefone/chat **discreto** na lateral). Destacar ação com **um** ícone forte, não cinco.

**Como aplicar:**

- Ícones **pequenos/médios**, **limpos**, da [`asset-library/`](asset-library/README.md) ou licenciados.
- **Dinamismo estático:** posicionar na **lateral** com **parte do ícone cortada** pelo limite do canvas (sensação de “entrando”); opcional motion blur **suave** na própria arte do ícone ou leve direção horizontal.
- **Sutileza:** efeito de movimento **não** pode parecer borrão grosseiro nem “explosão” de velocidade.

**Regras:**

- **Poucos** ícones por slide (regra prática: **0–2**, preferir **1** em miolo).
- Cores dos ícones: **vivas o suficiente** para contraste em fundos neutros, mas **harmonizadas** com a paleta Rico (ver secção 4 — **não** estourar arco-íris).
- Não colocar ícone em cima do **pneu protagonista**.

---

## 3. Sombras e contraste (texto)

**Quando usar:** fundos **claros** ou zonas de foto com **luminância alta** onde o texto (no HTML) pode perder leitura.

**Como aplicar ( divisão de responsabilidade Rico ):**

- **Prioridade:** sombras e contraste de **título/corpo** ficam no **CSS** (Diana): `text-shadow` suave, scrim, texto escuro — ver [`carousel-layout-rules.md`](carousel-layout-rules.md) (legibilidade fundo claro).
- **Opacidade da sombra (referência):** sombras **suaves**, ~**30–50%** de opacidade relativa ao efeito, sem halo sujo no JPEG final.
- **Cor da sombra:** tom **mais escuro** que o texto ou neutro escuro semi-transparente.

**Regras:**

- **Não** empilhar sombra pesada em raster **e** sombra forte no HTML no mesmo bloco sem necessidade.
- Em fundos **escuros**, **não** simular “sombra cinematográfica” em texto que no fundo já é claro no HTML — isso é papel da Diana.
- **Não** aplicar sombra **em ícones raster** com o objetivo de “texto” — ícones devem permanecer **limpos** (contraste por cor/tamanho/fundo local, não drop shadow pesado no ícone). Gráficos **SVG no HTML** são responsabilidade da Diana.

---

## 4. Uso de cores para destaque

**Quando usar:** palavras-chave e ênfases — no raster isso se aplica a **overlays, ícones, molduras, faixas** (não substituir a paleta de **accent** do título que a Diana aplica no HTML, exceto se houver brief explícito).

**Paleta Rico Pneus (prevalece sobre paleta “genérica Instagram”):**

- **Vermelho / coral** para energia, CTA, alertas: `#C62828`, `#E53935`, `#FF8A80`.
- **Âmbar / amarelo** para destaque pontual: `#F9A825`, `#FDE047`.
- Neutros: preto, branco, cinzas da marca — ver [`design-system-rico-pneus-colors.md`](design-system-rico-pneus-colors.md).
- **Não** usar **azul** nem **verde** como cor **principal** de identidade em elementos compostos Rico (reservado apenas se o brief corporativo mudar).

**Regras:**

- **Poucas** cores vibrantes por slide; equilibrar com neutros.
- Contraste texto/fundo (WCAG) no **resultado final** do carrossel — composição não pode deixar o miolo ilegível.

---

## 5. Textos e tipografia (contexto)

**Papel da Diana:** famílias **Montserrat + Inter**, hierarquia, tamanhos e alinhamentos do slide final — ver [`client-carousel-design-standard.md`](client-carousel-design-standard.md) e [`design-rico-pneus-typography-layout.md`](design-rico-pneus-typography-layout.md).

**Papel do Eduardo:** reservar **área limpa** ou **caixa vazia semitransparente** onde o texto virá; **não** definir mais de **duas** “vozes” tipográficas no raster. **Evitar** cursiva decorativa em frases longas **no pixel** (o normal é **zero** texto longo no raster).

---

## 6. Transparência e opacidade

**Quando usar:** caixas, painéis ou véus **locais** entre fundo e futura camada de texto (HTML).

**Como aplicar:** camadas **~30–50%** de opacidade em overlays retangulares ou gradientes que **não** aniquilem a foto nem o produto.

**Regras:**

- Sem transparência tão baixa que o texto (HTML) fique ilegível.
- Preferir **gradiente que vai a transparente** nas bordas do painel (transição suave).

---

## 7. Efeitos em partes específicas (fumaça, brilho, luz)

**Quando usar:** focar atenção num ponto, reforçar clima “oficina / performance / alerta”, ou **moldura** sutil.

**Como aplicar:** fumaça/brilho em **áreas pontuais**; vinheta leve nas bordas para profundidade.

**Regras:**

- Efeitos **complementam**; não competem com pneu + texto.
- Um motivo por efeito (registrar no manifest).

---

## Conclusão (armazenamento e aplicação)

Com estas regras **definidas e armazenadas** neste repositório, o agente deve:

1. Ler **`carousel-draft.md`** / papel do slide (capa vs miolo vs fechamento).
2. Aplicar **só** o que o contexto pede (menos é mais).
3. Preencher **`composite-layer-manifest.md`** com **preset/regra** disparada, intensidades e arquivos da `asset-library/`.
4. Submeter a **Helena** — consistência entre carrosséis passa pelo QA e pelos presets nomeados.

Sempre verificar **legibilidade futura**, **harmonia** com a marca Rico e **impacto** sem poluição.
