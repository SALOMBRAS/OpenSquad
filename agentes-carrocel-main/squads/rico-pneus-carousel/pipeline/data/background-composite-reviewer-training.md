# Treinamento — Agente avaliador de composição raster (Helena Homologação-Fundo)

Documento **armazenado para uso autônomo** na revisão de fundos tratados por **Eduardo Compositor** (`composited/` vs `raw/`). Complementa [`background-compositing-spec.md`](background-compositing-spec.md), [`background-compositor-training.md`](background-compositor-training.md) e [`client-carousel-design-standard.md`](client-carousel-design-standard.md).

**Escopo do papel de Helena:** validar se a **arte raster pré-texto** cumpre regras de design, marca Rico e legibilidade **futura** — não substitui **Vicente Visual**, que julga o **JPEG final com HTML/texto**.

*Partes 2 e 3 deste treinamento estão abaixo; a Parte 3 será acrescentada quando o cliente enviar.*

---

## Parte 1 — Introdução ao design e princípios básicos

### Teoria do design para o agente avaliador

O papel do agente avaliador é garantir que a arte criada esteja em **conformidade** com as regras e princípios do design gráfico, ajudando a melhorar a estética e a eficácia da comunicação visual. O trabalho vai além da simples observação: deve ser capaz de **identificar pontos fracos**, **sugerir melhorias** e aplicar **critérios de avaliação** (ex.: escala **0–10** por dimensão ou um veredito qualitativo claro).

Para fazer isso corretamente, é necessário dominar os **princípios fundamentais** do design abaixo — aplicados ao que **Eduardo** alterou no pixel (blur, ícones, overlays, transparência, fumaça), e à **composição geral** da lâmina antes do texto HTML.

### Princípios básicos

#### Equilíbrio

O equilíbrio é a **distribuição visual** dos elementos, gerando sensação de **estabilidade**.

**Tipos:**

- **Simétrico:** ambos os lados da composição com peso semelhante de forma espelhada ou equivalente.
- **Assimétrico:** lados diferentes, mas **equilibrados em peso visual**; **espaço negativo** (áreas vazias) é fundamental.

**Como avaliar:** a imagem está “pesada” demais em um canto **sem intenção**? Lado esquerdo/direito ou alto/baixo competem de forma caótica? Para Rico, o **pneu / produto** costuma ser o peso principal — verificar se ícones ou efeitos não derrubam o equilíbrio só para “preencher”.

#### Contraste

Contraste é a **diferença** entre elementos (cor, forma, textura, tamanho). Essencial para **legibilidade** e destaque.

**Como avaliar:** onde houver **texto no raster** (exceção), contraste texto/fundo deve ser forte; no fluxo típico, antecipar se o **tratamento do fundo** (claridade, manchas, ícones vibrantes) **prejudicará** o contraste que **Diana** fará no HTML sobre a mesma área.

**Dicas de julgamento:**

- Fundo claro → favorecer leitura com **área limpa** ou baixa complexidade sob a zona de título (brief mental adequado à Diana).
- Evitar no raster **manchas** com cor **muito próxima** da cor prevista do tipo (quando conhecida).

#### Hierarquia visual

É a **ordem** em que o olho percorre a informação: do mais importante ao secundário.

**Como avaliar:** em camadas raster, o **foco principal** ainda é o **produto / tema da foto**; ícones e efeitos são **secundários**. Se um ícone ou fumaça **grita mais** que o pneu sem motivo editorial → hierarquia quebrada.

**Dicas:**

- Efeitos de apoio **não** devem competir com o objeto de venda.
- Capa pode ter **mais** dinamismo lateral (conforme treinamento do Eduardo), ainda assim com hierarquia clara.

#### Proximidade

Elementos **próximos** são lidos como **relacionados**; **distantes** como desconexos.

**Como avaliar:** ícone colocado em relação ao **espaço** onde o copy falará de WhatsApp/benefício — faz sentido **espacial** ou ficou “solto”? Overlays e máscaras devem **agrupar** visualmente a região de leitura, não espalhar ruído.

**Dicas:**

- Evitar elementos gráficos que **não conversem** entre si.
- Penalizar composição com **encosto de ícones** sem relação temática com o slide.

#### Alinhamento

Posicionamento **intencional** de bordas imaginárias — texto, ícones e blocos seguem uma **lógica** (grade, centro, margem).

**Como avaliar:** ícone “meio torto” ou cortado **sem** intenção de dynamism (corte estético documentado no manifest)? Elementos **flutuando** sem alinhamento à estrutura do 1080×1440?

**Dicas:**

- Inconsistência de alinhamento entre slides do **mesmo run** sem motivo no brief → inconsistência de marca.
- Corte lateral **intencional** do ícone deve estar **explícito** no manifesto do Eduardo (senão pode parecer erro).

---

## Parte 2 — Regras avançadas de design e avaliação visual

Com os princípios básicos cobertos na Parte 1, esta parte aprofunda **composição**, **tipografia**, **cores** e **espaço negativo** — úteis para julgar edições de Eduardo com mais **nuance**. Cada elemento deve ser observado de forma **crítica**; notas **0–10** e feedbacks devem referenciar estes critérios quando aplicável.

### Composição avançada

#### 1. Regra dos terços

Técnica clássica: dividir o quadro em **três faixas horizontais** e **três verticais**; os **pontos de interseção** costumam ser fortes ancoragens para o assunto principal.

**Como avaliar:** o **produto**, o **ícone-chave** ou a **zona de maior interesse** aproximam-se de interseções ou linhas da grade? Isso tende a gerar equilíbrio e fluidez.

**Dicas:**

- Centro geométrico exato do assunto pode ser **válido** se for **intencional** (impacto simétrico); caso contrário, pode parecer estático demais.
- Verificar se nada de importante ficou **espremido** ou **cortado** nas bordas sem intenção.

#### 2. Espaço negativo (aprofundamento)

O “vazio” ao redor dos objetos **estrutura** a leitura tanto quanto o preenchimento.

**Como avaliar:** há **respiro** ao redor do pneu e dos overlays? O olhar consegue **circular** sem sensação de sufocamento?

**Dicas:**

- Penalizar **loteamento** de ícones e fumaça sem área de descanso.
- Espaço negativo também **antecipa** onde o HTML vai respirar — fundo muito “cheio” de ruído raster prejudica a Diana.

#### 3. Padrões e repetição

Repetição de motivos (textura suave, forma de ícone, tratamento de canto) cria **ritmo** e **unidade** entre slides do carrossel.

**Como avaliar:** ao percorrer `bg-01…bg-0N` **compostos**, há **linguagem visual** repetida de forma **coerente** (ex.: sempre o mesmo tipo de vinheta leve), sem cair em **monotonia** (tudo idêntico) ou **caos** (cada slide parece de outro brand)?

**Dicas:**

- Padrões devem ser **sutis**; repetição excessiva mata variedade.
- Inconsistência brusca entre slides **sem** mudança de papel (capa vs miolo) merece nota menor ou REJECT com brief.

### Tipografia avançada (no contexto raster + HTML)

A **tipografia final** do slide é da **Diana** (Montserrat + Inter). Helena avalia: (a) **texto queimado** raro no JPEG; (b) se o **tratamento do fundo** ajuda ou atrapalha a hierarquia tipográfica **futura**.

#### 1. Contraste tipográfico

Uso de **pesos** e **tamanhos** distintos para hierarquia.

**Como avaliar:** se houver tipo no raster, título deve **dominar**; corpo secundário, legível. No fundo “limpo” para HTML, verificar se **faixas de overlay** não “gritam” na mesma escala visual que o título virá a ocupar.

**Dicas:**

- Muitos estilos diferentes no mesmo bloco raster → caos.
- Fontes decorativas em texto longo no pixel → penalizar.

#### 2. Tracking (espaçamento entre letras)

Afeta legibilidade e “cor” da linha.

**Como avaliar:** em texto raster, tracking apertado demais ou solto demais → difícil leitura em mobile.

**Dicas:**

- Títulos podem ser um pouco mais **fechados** se ainda legíveis.
- Corpo precisa de respiro **confortável**.

#### 3. Alinhamento tipográfico

Esquerda, direita, centro ou justificado — deve ser **consistente** com a função (título central vs lista à esquerda).

**Como avaliar:** alinhamento **confuso** no raster; ou caixas/overlays que **forçam** um alinhamento que vai **brigar** com o grid do HTML.

**Dicas:**

- Evitar misturar alinhamentos no **mesmo bloco** sem intenção clara.

### Cores e psicologia (com filtro Rico Pneus)

#### 1. Emoção e tom

Cores influenciam percepção (ex.: **vermelho** → urgência, energia; tons **quentes** → destaque).

**Como avaliar:** overlays e ícones escolhidos por Eduardo **combinam** com o tom do `carousel-draft.md` (educativo, consultivo, CTA)?

**Ajuste de marca Rico:** priorizar leitura em [`design-system-rico-pneus-colors.md`](design-system-rico-pneus-colors.md) — **vermelho / coral / âmbar / amarelo de destaque**, neutros. **Não** usar **azul** ou **verde** como **cor principal** de identidade nos elementos compostos, salvo **brief** explícito em contrário. (Psicologia genérica “azul = confiança” **não** substitui a paleta aprovada do cliente.)

**Dicas:**

- Vibrante para **pontos de atenção**; neutros para **transições** e fundos de apoio.

#### 2. Harmonia de cores

Paleta **equilibrada**; evitar conflitos entre camadas.

**Como avaliar:** conjunto **funciona** no slide e **entre slides** do run? Há “guerra” de saturacões ou cores que sujam o produto?

**Dicas:**

- Ordem de grandeza: **3–5 cores** dominantes no tratamento + neutros; consistência ao longo do carrossel.
- Contraste futuro **texto (HTML) / fundo** deve permanecer **viável** após o compositing.

### Conclusão da Parte 2

Com **composição avançada**, **tipografia** (no escopo acima) e **cores**, a avaliação ganha precisão. Ao pontuar e dar feedback, cruzar sempre com a **Parte 1** (equilíbrio, contraste, hierarquia, proximidade, alinhamento) e com **`client-carousel-design-standard.md`**.

---

*Parte 3 (processo de avaliação, feedback e fechamento): a acrescentar quando o cliente enviar o Texto 3.*
