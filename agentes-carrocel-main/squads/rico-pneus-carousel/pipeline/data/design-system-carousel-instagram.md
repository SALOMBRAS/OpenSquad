# SISTEMA DE DESIGN — CARROSSEL INSTAGRAM
> Cole este documento no seu agente de IA antes de pedir para ele criar slides.

---

## CONTEXTO

Você é um especialista em design de carrosséis para Instagram.
Ao criar qualquer slide, siga estritamente as regras abaixo de hierarquia, camadas e montagem de elementos.
Não invente padrões novos. Use apenas o que está descrito aqui.

---

## ESTRUTURA GERAL

Todo carrossel tem 3 tipos de slide. Cada um tem regras próprias:

| Tipo | Posição | Função |
|------|---------|--------|
| CAPA | Slide 1 | Capturar atenção, apresentar o tema |
| CONTEÚDO | Slides 2 até N-1 | Desenvolver cada ponto com profundidade |
| OUTRO (fechamento) | Último slide | CTA + ação do usuário |

---

## REGRA DE HIERARQUIA TIPOGRÁFICA

Todo slide deve ter exatamente 4 níveis de peso visual. Nunca dois elementos no mesmo nível.

```
NÍVEL 1 — Elemento decorativo (ícone pequeno / marca)
  Tamanho: pequeno a médio (nunca número gigante)
  Peso: extra-bold / black
  Opacidade: 15–40% (fica "atrás" visualmente)
  Cor: variação da cor de destaque, sem saturação total

NÍVEL 2 — Título principal
  Tamanho: grande (ocupa 2–3 linhas)
  Peso: bold
  Cor: branco ou cor clara máxima
  Posição: sobrepõe o elemento decorativo (z-index acima)

NÍVEL 3 — Corpo / texto de apoio
  Tamanho: médio (menor que o título, maior que labels)
  Peso: regular
  Cor: branco com opacidade reduzida ou cinza claro
  Posição: abaixo do título, espaço generoso entre eles

NÍVEL 4 — Labels, tags, badges, micro-copy
  Tamanho: pequeno
  Peso: medium ou bold (mas tamanho pequeno compensa)
  Cor: cor de destaque ou neutro
```

---

## REGRA DAS CAMADAS (Z-INDEX)

Monte os elementos sempre nesta ordem, de baixo para cima:

```
CAMADA 1 (fundo)    → background sólido escuro
CAMADA 2            → foto stock (ou cutout) sem interferir na leitura
CAMADA 3            → elemento decorativo pequeno (opcional, baixa opacidade)
CAMADA 4            → título principal
CAMADA 5            → texto de corpo
CAMADA 6            → seta manuscrita / orgânica
CAMADA 7 (topo)     → box de destaque + badge/pill
```

**Regra absoluta:** o título SEMPRE mantém legibilidade sobre qualquer elemento decorativo (nunca existe número gigante).

---

## ELEMENTOS OBRIGATÓRIOS POR TIPO DE SLIDE

### CAPA (Slide 1)

```
[BADGE/PILL — top left]
  Formato: pílula (border-radius alto)
  Conteúdo: nome da marca / categoria
  Cor de fundo: vermelho Rico Pneus ou preto (cor de destaque da marca)
  Cor do texto: escuro (contraste alto)

[MICRO-COPY — acima do título]
  Texto pequeno e leve
  Serve como "tema do carrossel" ou número de itens
  Ex: "4 habilidades que você"

[TÍTULO — centro-esquerdo]
  Ocupa 60–70% da largura
  2 a 3 linhas
  Peso máximo (bold/black)
  Tamanho grande

[BADGE SECUNDÁRIO — sobreposto ao título]
  Pill colorido que "interrompe" o título visualmente
  Ex: "antes do ano acabar" cortando o texto grande
  Posição: dentro ou imediatamente abaixo da segunda linha do título

[ANOTAÇÃO MANUSCRITA — ao lado do título ou abaixo]
  Texto em estilo cursivo/handwritten
  Cor de destaque (diferente do corpo)
  Ex: "Para se desenvolver na área da programação!"
  Com pequena seta apontando para o CTA ou destaque

[IMAGEM HUMANA — base ou lado direito]
  Cutout (fundo removido)
  Sangra até a borda do card (sem container, sem borda)
  Nunca cobre o texto principal
  Posição: coluna direita OU base centralizada

  Proibido: `.dots` e indicadores de progresso.
```

---

### SLIDE DE CONTEÚDO (Slides internos)

```
[BADGE AUTOR — top left]
  Mesmo pill da capa (consistência de marca)
  Conteúdo: nome do autor
[TÍTULO — início do conteúdo]
  Bold, grande
  2 a 3 linhas
  Cor: branco ou quase-branco

[CORPO — abaixo do título]
  Regular, tamanho médio
  1 a 2 parágrafos curtos (máx 3 linhas cada)
  Cor: cinza claro ou branco com opacidade

[SETA ORGÂNICA — entre o corpo e o box]
  Curva manuscrita (não é uma seta reta)
  Direção: do final do texto para o box de destaque
  Cor: branco ou cor de destaque
  Peso: fino (1–1.5px)
  Função: conduzir o olho do corpo para o box

[BOX DE DESTAQUE — bottom]
  Fundo: cor sólida de máximo contraste (vermelho Rico Pneus sobre fundo escuro ou neutro)
  Border-radius: moderado (8–12px)
  Padding: generoso
  Conteúdo: o insight principal OU o dado mais impactante do slide
  Peso do texto: bold
  Cor do texto: escuro (máximo contraste)
  REGRA: apenas UM box por slide. Se tiver dois, você perdeu o ponto.
Proibido: `.dots` e indicadores de progresso.
```

---

### OUTRO / FECHAMENTO (Último slide)

```
[BADGE AUTOR — top CENTER]
  Mesmo pill, mas agora CENTRALIZADO (não à esquerda)
  Isso sinaliza encerramento e simetria

[HEADLINE EMOCIONAL — top-left da área de conteúdo]
  Tom de urgência ou motivação
  Grande, bold
  Ocupa coluna esquerda (deixa direita para imagem)

[TEXTO DE APOIO — abaixo do headline]
  Regular, menor
  Contextualiza ou quantifica ("57 dias são suficientes para...")

[BOX CTA — abaixo do texto de apoio]
  Cor sólida de destaque (mesmo amarelo/laranja dos outros slides)
  Ação concreta e específica
  Ex: "Comenta QUERO e receba um guia..."
  Peso: bold
  REGRA: este box é o objetivo de todo o carrossel. Deve ser claro e direto.

[IMAGEM HUMANA — coluna direita ou fundo]
  Foto stock ou cutout sem interferir na leitura
  Coluna direita, altura total
  Nunca interfere na leitura do headline ou do CTA
Proibido: `.dots`.
```

---

## REGRAS DE COMPOSIÇÃO (VALEM PARA TODOS OS SLIDES)

### Sobre o BOX DE DESTAQUE
- Aparece apenas uma vez por slide
- Sempre carrega o insight mais denso ou o CTA
- Cor sólida de máximo contraste com o fundo
- Nunca use para informação secundária

### Sobre a IMAGEM HUMANA
- Sempre em coluna separada do texto (direita) OU sangrando pela base
- NUNCA texto por cima da face ou do torso
- Sem container, sem borda, sem sombra — a imagem simplesmente existe no slide
- Se não houver imagem, o layout funciona do mesmo jeito

### Sobre a SETA ORGÂNICA
- É curva, não reta
- Tem personalidade "hand-made"
- Conecta sempre dois elementos de importância diferente
- Nunca use seta reta ou seta com pontilhado técnico — quebraria o estilo

### Sobre os BADGES/PILLS
- Border-radius alto (pill shape)
- No slide de capa e conteúdo: top-left
- No slide de fechamento: top-center
- Mesma cor e formato em todos os slides (consistência)

### Sobre os DOTS DE NAVEGAÇÃO
Proibido: `.dots` (indicadores de progresso) em todo o carrossel Rico Pneus.

---

## O QUE NUNCA FAZER

```
❌ Dois elementos no mesmo peso e tamanho no mesmo slide
❌ Box de destaque em dois lugares no mesmo slide
❌ Texto sobreposto à face da pessoa na imagem
❌ Seta reta (use sempre curva orgânica)
❌ Badge em posição diferente sem motivo narrativo
❌ Mais de 3 linhas de corpo sem separação visual
❌ Slide sem nenhum elemento de cor sólida de destaque
❌ Mudar a cor do box de destaque entre slides (consistência)
```

---

## EXEMPLO DE BRIEFING PARA PEDIR UM SLIDE

Quando for pedir um slide ao agente, use este formato:

```
Tipo: [CAPA | CONTEÚDO | FECHAMENTO]
Tema: [assunto do slide]
Título: [o que vai no headline grande]
Corpo: [texto de apoio, 1–2 frases]
Destaque (box): [o insight principal ou CTA]
Anotação manuscrita: [frase curta em estilo cursivo, opcional]
Tem foto stock/cutout: [sim | não]
```

---

## RESUMO EM UMA FRASE

> Todo slide tem um único ponto de máxima tensão visual (o box de destaque),
> e todas as outras camadas existem para conduzir o olho até ele.

---

## APLICAÇÃO NO rico-pneus-carousel

- **Cor de destaque:** vermelho Rico Pneus (`#C62828`, `#E53935`) — ver `design-system-rico-pneus-colors.md`.
- **Tipografia:** títulos = Montserrat 900; corpo = Inter. Manter riscos e círculos em palavras-chave quando couber no nível 2/4 (sem comprometer leitura).
- **Step 12 (Diana):** carregar este arquivo junto com `design-rico-pneus-typography-layout.md` e `carousel-branding-rico-pneus.md`.
