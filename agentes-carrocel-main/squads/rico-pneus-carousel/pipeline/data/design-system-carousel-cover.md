# SISTEMA DE DESIGN — CAPA DO CARROSSEL (Slide 1)

> Documento exclusivo para o agente de capa. Use em conjunto com design-system-carousel-instagram.md (seção CAPA) e design-system-rico-pneus-colors.md.

---

## OBJETIVO DA CAPA

Criar uma capa **chamativa** que pare o scroll: hierarquia clara, texto legível e um único ponto de tensão visual. A capa usa **imagem de fundo** (preferir fotografia de **Unsplash ou Pexels** conforme [`stock-image-policy.md`](stock-image-policy.md)) **ou** gradiente sólido + **degradê** para legibilidade. **Personagem/mascote ilustrado:** ver [`mascot-character-policy.md`](mascot-character-policy.md) — **proibido** sem confirmação prévia do usuário.

---

## REGRAS OBRIGATÓRIAS DO SISTEMA GERAL (resumo)

- **4 níveis** de peso visual (decorativo → título → corpo → labels). Nunca dois no mesmo nível.
- **Camadas (z-index):** fundo → imagem (foto stock ou gradiente) → degradê overlay → título → micro-copy/badge → nav → dots.
- **Elementos da CAPA:** badge/pill top-left, ícone navegação top-right, micro-copy, título, badge secundário sobre o título, anotação manuscrita (opcional), imagem de fundo, dots bottom-center.
- **Paleta Rico Pneus:** ver [`design-system-rico-pneus-colors.md`](design-system-rico-pneus-colors.md). Badge com contraste máximo (vermelho automotivo ou preto; texto branco ou escuro conforme fundo).
- **Tipografia do carrossel (usar na capa):** A capa usa **a mesma** tipografia escolhida para o carrossel (ex.: Permanent Marker para impacto). Na capa, **alternar** título e subtítulo entre duas fontes:
  - **Fonte tipográfica do carrossel** (ex.: Permanent Marker) — para um dos blocos (título OU micro-copy/subtítulo).
  - **Fonte clara e sem serifa** (ex.: Inter) — para o outro bloco.
  - Regra: nunca os dois com a mesma fonte; sempre um em “marker”/impacto e o outro em sans-serif legível. Ex.: título = Permanent Marker, micro-copy = Inter; ou título = Inter, anotação manuscrita = Permanent Marker. Palavras-chave com underline e/ou círculo (border-radius pill).

---

## IMAGEM DE FUNDO DA CAPA (fotografia ou gradiente)

1. **Fonte:** Preferir **Unsplash** ou **Pexels** ([`stock-image-policy.md`](stock-image-policy.md)). Temas: estrada, veículo (carro/caminhão), oficina, detalhe de pneu, movimento seguro — **evitar** imagens de **moto** (a loja não vende pneu de moto).
2. **Personagem / mascote / ilustração:** Seguir [`mascot-character-policy.md`](mascot-character-policy.md). Se o brief não exigir personagem, **não** inventar um.
3. **Posicionamento da foto:**
   - A foto é a **camada acima** do fundo sólido. `object-fit: cover`; ponto focal à **direita** ou **inferior** quando possível para liberar zona de título à esquerda/centro.
   - Garantir que **texto crítico** não fique sobre área de baixo contraste (rosto de pessoa genérica de stock, reflexos).
4. **Degradê sobre a foto (obrigatório):**
   - Overlay em degradê para **WCAG AA** no texto. Ex.: `linear-gradient(to bottom, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.35) 50%, rgba(10,10,10,0.75) 100%)`.
5. **Ordem das camadas (z-index):**
   - Camada 1: fundo sólido #0a0a0a (fallback).
   - Camada 2: `background-image` da foto (URL local exportada para `output/{run_id}/cover-assets/` ou caminho relativo).
   - Camada 3: degradê.
   - Camadas 4–7: título, micro-copy, badge, nav, dots — ver [`carousel-branding-rico-pneus.md`](carousel-branding-rico-pneus.md).

---

## MEDIDAS EXATAS — CAPA (% da altura/largura do slide)

Viewport do card: **1080×1440** (3:4). Proporções em relação ao tamanho total (100% × 100%).

```
ELEMENTO              TOPO %    LATERAL %       LARGURA %   OBSERVAÇÃO
──────────────────────────────────────────────────────────────────────────
Logo / brand          3–5%      esq 5–6%        ~30%        Menor texto do slide
Nav arrow             3–5%      dir 4–6%        ~8%         Círculo outline
Micro-copy            17–20%    centralizado    livre       Peso regular, não bold
Headline (bloco)      22–23%    centralizado    80–90%      Maior elemento
Badge pill            40–44%    centralizado    auto        Logo abaixo headline
Anotação manuscrita   49–55%    dir 3–5%        35–40%      Coluna direita
Imagem de fundo / foto (topo) 47–50%    centralizado    70–90%      Começa aqui, sangra baixo
Dots navegação        bottom 2–3%  centralizado  auto       Sempre no fundo
```

---

## TAMANHOS TIPOGRÁFICOS (px, card 1080×1440)

Escala proporcional para 1080×1440. **Alternar fontes:** headline OU micro-copy em fonte do carrossel (Permanent Marker); o outro em sans-serif (Inter).

```
ELEMENTO              TAMANHO     PESO      FONTE                    COR
──────────────────────────────────────────────────────────────────────────────
Logo / brand          22–26px    700       sans-serif (Inter)       branco
Micro-copy            28–32px    400       1.2  Inter OU Marker*     branco 85% opacidade
Headline              72–88px    800–900   1.05–1.15  Marker OU Inter*  branco puro
Badge text            24–28px    700       sans-serif               escuro (contraste máximo)
Anotação manuscrita   26–30px    400       1.4  Marker ou Inter*     cor de destaque (vermelho Rico / âmbar)
```
* Um dos dois (headline vs micro-copy) = fonte do carrossel (Permanent Marker); o outro = Inter. Anotação pode seguir a fonte de impacto ou a sans-serif para contraste.

---

## REGRAS DE PROPORÇÃO ENTRE ELEMENTOS

- Micro-copy = 30–35% do tamanho do headline.
- Espaço entre micro-copy e headline: 4–8px apenas (bloco unido).
- Badge: máx 16px abaixo da última linha do headline (não flutua).
- O **foco visual da foto** (rosto de pessoa ou objeto forte) NUNCA compete com o headline no terço superior sem degradê forte.
- Headline: padding lateral de 5–8% de cada lado (quase borda a borda).
- Anotação manuscrita: coluna oposta ao foco principal da foto (se foto à direita, anotação à esquerda ou centralizada abaixo do título).

---

## BADGE PILL (comportamento)

- Funciona como "ponto final visual" do título; interrompe o fluxo do headline.
- Border-radius: 999px (pill perfeito).
- Padding horizontal: 16–20px, vertical: 6–8px.
- Cor de fundo: contraste máximo com o slide (Rico Pneus: vermelho #C62828 ou preto #0a0a0a; texto branco).
- Centralizado horizontalmente em relação ao bloco do headline; alinhado logo abaixo da última linha do headline.

---

## ANOTAÇÃO MANUSCRITA

- Fonte cursiva ou italic + handwriting (ex.: Caveat, Permanent Marker em tamanho menor).
- Cor de destaque (vermelho / âmbar Rico Pneus — ver cores).
- Acompanha uma **seta orgânica** (curva, 1–1.5px, mesma cor), apontando para o elemento visual OU para o badge — nunca para o headline.
- Posição: coluna direita ou abaixo do headline, sem sobrepor o título.

---

## O QUE NUNCA FAZER NA CAPA

- Texto sobre a foto sem degradê suficiente (legibilidade).
- Mascote cortado de forma que perca a expressão (corte no meio do rosto).
- Mascote ocupando toda a área de título (impossibilitando leitura).
- Dois elementos no mesmo peso (ex.: dois headlines do mesmo tamanho).
- Badge ou anotação em posição que quebre a hierarquia (headline sempre o maior bloco de texto).

---

## RESUMO EM UMA FRASE

> A capa tem um único ponto de máxima tensão (o título + badge); a foto em fundo + degradê sustenta a atmosfera sem atrapalhar a leitura.
