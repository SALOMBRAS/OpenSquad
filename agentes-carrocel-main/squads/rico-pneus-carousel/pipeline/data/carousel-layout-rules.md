# Regras de layout do carrossel Instagram (rico-pneus-carousel)

Documento para **Diana Design**, **Patricia Panorama** e qualquer agente que gere HTML/CSS de slides. Preferências do produto Rico Pneus — **seguir literalmente** ao criar ou editar carrosséis.

## Chrome e moldura

1. **Traço de acento superior (`.top-accent`)** — cor vermelha Rico (`#C62828` ou similar, ver `design-system-rico-pneus-colors.md`)  
   - Deve ir **de borda a borda** no topo do slide, **sem** “encaixe” arredondado nas pontas.  
   - **Implementação:** no `.card`, usar **`border-radius: 0 0 16px 16px`** (cantos arredondados **só embaixo**). O topo do cartão fica reto; o traço de acento preenche a largura inteira.  
   - **Não usar** `border-radius: 16px` no `.card` inteiro com `overflow: hidden` — isso recorta o traço e deixa aparência de borda arredondada nas extremidades.

2. **Sem setas decorativas excessivas**  
   - **Não incluir** `.nav-pill` (círculo no canto superior).  
   - **Não incluir** SVG de seta curva estilo ilustração (`.arrow-svg` / traço de acento entre blocos) — polui e repete o gesto de swipe.  
   - **Não incluir** `.footer-swipe` nem seta no rodapé decorativa; o Instagram já indica o carrossel.  
   - **Rodapé:** sempre **marca** (ex.: `Rico Pneus · Fortaleza · CE`).  
   - **Bolinhas (`.nav-dots`):** no **template genérico**, não usar `.dots` extras. Para o **cliente Rico Pneus — padrão aprovado**, **incluir** bolinhas de navegação em **todos** os slides conforme [`client-carousel-design-standard.md`](client-carousel-design-standard.md) (ativo em vermelho Rico, demais discretas).  
   - Evitar o caractere **→** no copy quando não for estritamente necessário (usar **·** ou **—**).

3. **Conteúdo vertical (slides 2…N)**  
   - **Capa (slide 1):** manter hierarquia de capa (ex.: conteúdo na parte inferior com `justify-content: flex-end` se for o padrão aprovado).  
   - **Demais slides:** área `.content` com **`justify-content: center`** (e `align-items: stretch`) para o bloco não ficar colado no topo nem no rodapé; caixas de destaque (`.highlight-box`, `.cta-box`) com **`margin-top` fixo** (ex.: 10–14px), **não** `margin-top: auto` que empurra tudo para baixo.

## Fundo e continuidade

4. **Fundo contínuo entre slides (panorama)**  
   - Preferir **uma imagem stock grande** (Unsplash/Pexels) fatiada em `bg-01.png` … `bg-0N.png` com `stock-panorama-backgrounds.cjs`, ou painéis gerados com continuidade horizontal. Ver `carousel-infinite-background.md`.  
   - Registrar URL e licença em `background-manifest.md`.  
   - **CSS obrigatório no `.bg-mascot`:** `left: 0; right: 0` (sem expansão horizontal); `background-position: center center` (mesmo em todos os slides); **sem** `transform: scale()`. Buffer vertical permitido: `top: -1%; bottom: -1%`. Ver detalhes em [`carousel-infinite-background.md`](carousel-infinite-background.md) secção "CSS obrigatório".  
   - **Nunca** usar `inset: -14%` ou qualquer `inset` negativo que expanda horizontalmente — corta as bordas do panorama e elimina a continuidade no swipe.

5. **Sem número gigante atrás do título**  
   - **Não usar** `.deco-num` / `#1`, `#2`… por trás do headline — prejudica leitura.

6. **Legibilidade — fundo claro vs texto**  
   - **Regra fixa:** se o fundo de imagem for **muito claro** (áreas grandes claras atrás do bloco de leitura), o texto **não** pode depender só de branco/claro — a leitura deve ficar **nítida e visível**. Escolher **uma** das abordagens (ou combinar com moderação):  
     - **Texto escuro** no trecho que sobrepõe a área clara (`#0a0a0a`, `#18181B`, etc.), mantendo acentos de marca onde o contraste permitir; **ou**  
     - **Caixa / painel** semitransparente atrás do bloco de texto (ex.: `rgba(15,15,18,0.72–0.88)` + borda suave), para **continuar com texto claro** sobre o painel; **ou**  
     - **“Fumaça” / sombra de legibilidade** — `text-shadow` forte em camadas, `filter: drop-shadow` no container do título, ou faixa escura **local** só atrás das linhas (scrims parciais), sem “tampar” a foto inteira sem necessidade.  
   - **Critério de aceite:** contraste confortável em celular (fundo real do export, não só no Figma mental). Preferir solução que preserve a foto e ainda deixe título/corpo/CTA **óbvios** num relance.  
   - Para fundos escuros, manter overlay/scrim coerente com `render.cjs` / gradientes existentes; **ajustar** scrim, cor do corpo e sombras quando testar com foto clara.

## Tipografia e marca

7. **Tipografia:** Montserrat 900 em títulos, Inter no corpo — ver `design-system-rico-pneus-colors.md`.

8. **Paleta:** apenas cores da marca Rico Pneus (vermelho/preto/branco/cinza — ver `design-system-rico-pneus-colors.md`).

9. **Texto alinhado (sem “torto”)**  
   - **Não** aplicar `transform: rotate(...)` em frases de leitura (título, corpo, fechamento, CTA). Inclinação leve em texto longo parece erro de layout.  
   - Ícones ou elementos puramente decorativos podem usar rotação; **copy legível** deve permanecer **horizontal** (0°).

10. **Gráfico de barras nos slides “pares” de conteúdo (2, 4 e 6)**  
   - Nos slides **2, 4 e 6**, incluir **sempre** um **gráfico ilustrativo em SVG** alinhado ao tema — **barras horizontais** (da esquerda para a direita), como na referência PNG: rótulo à esquerda, barra preenchendo à direita, cantos arredondados à direita (`rx` no `rect`), opcional rótulo curto à direita (1º/2º, “alto/médio”, etc.). **Não** usar gráfico só com colunas verticais empilhadas.  
   - Bloco `.chart-block` + `.chart-caption` + `<svg class="bar-chart">`; cores da marca (`#8b5cf6`, `#7c3aed`, `#6d28d9`…).  
   - **Pouco texto** no miolo nesses slides — o gráfico deve ser o **herói visual**.  
   - **Hierarquia:** ver **[`carousel-visual-reference.md`](carousel-visual-reference.md)** — tema escuro Rico Pneus, não copiar laranja/branco da referência.  
   - **Legibilidade das legendas de valor:** **nunca** colocar texto de valor **sobre** o `rect` da barra — contraste insuficiente. Reservar **coluna fixa à direita** no SVG (valores em zona separada, ex. `x ≥ 288` em viewBox largo ~360–380).
   - **Coluna de rótulos vs barras (obrigatório):** rótulos à esquerda (`text-anchor: start`); o `rect` **nunca** cobre o texto. O **início do `rect`** fica **logo após** o rótulo mais longo daquele gráfico, com **gap pequeno** (≈6–12px) — **sem** vão largo artificial entre título e barra. **Não** usar um único `x` fixo grande quando os rótulos são curtos. Se o rótulo for longo, aumentar `viewBox` ou encurtar o texto — **não** sobrepor barra no texto.

11. **Alinhamento horizontal do copy (slides internos)**  
   - **Capa (slide 1):** manter o layout de capa aprovado (ex.: bloco na base); **não** aplicar a regra de centro deste item.  
   - **Slides 2…N (incl. último / CTA):** `.title` / `.headline` e `.body` com **`text-align: center`** (e `width: 100%` onde fizer falta).  
   - **Exceção:** texto dentro de **caixas** — `.highlight-box`, `.cta-box`, `.source` e blocos de citação com fundo/borda — permanece **`text-align: left`** para leitura confortável.

12. **Referência visual fixa**  
   - Imagem de referência (composição): `pipeline/data/references/carousel-visual-reference-creators-platforms.png`.  
   - Leitura obrigatória do guia: [`carousel-visual-reference.md`](carousel-visual-reference.md).

## Checklist rápido antes de entregar HTML

- [ ] `.card` com `border-radius: 0 0 16px 16px` (não `16px` nos quatro cantos).  
- [ ] Nenhum `.nav-pill` no markup nem CSS.  
- [ ] Rodapé só marca; **sem** `.dots`, **sem** `.footer-swipe`, **sem** `.arrow-svg`.  
- [ ] Slides 2…N: conteúdo centralizado na vertical; título e corpo centralizados na horizontal (exceto texto em `.highlight-box` / `.cta-box` / `.source`).  
- [ ] Slides 2, 4, 6: legendas de valor do gráfico **fora** da área preenchida pela barra (gutter à direita no SVG); **rótulos à esquerda** sem sobreposição com `rect`; **barras próximas** aos rótulos (sem faixa vazia desnecessária entre texto e `rect`).  
- [ ] Capa com tratamento de capa.  
- [ ] `.top-accent` em largura total no topo.  
- [ ] Fundos nomeados `bg-NN.png` com continuidade quando aplicável.  
- [ ] `.bg-mascot` com `left: 0; right: 0` (sem expansão horizontal), `background-position: center center` uniforme, **sem** `transform: scale()`.  
- [ ] Sem `.deco-num`.  
- [ ] Nenhuma rotação em texto de leitura (`transform: rotate` em headlines/body/fechamento).  
- [ ] Slides **2, 4 e 6**: gráfico de barras ilustrativo (SVG) ligado ao tema + hierarquia “título → gráfico → legenda” ([`carousel-visual-reference.md`](carousel-visual-reference.md)).
