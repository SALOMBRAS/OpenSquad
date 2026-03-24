# Referência visual — slide “título + gráfico + legenda” (rico-pneus-carousel)

Documento para **Diana Design** e revisores de carrossel. Descreve o **padrão de hierarquia** que o produto quer em slides **mais visuais e menos textuais**, em especial nos slides **2, 4 e 6** (onde entra o gráfico de barras).

## Arquivo de referência (PNG)

- **Caminho:** [`references/carousel-visual-reference-creators-platforms.png`](references/carousel-visual-reference-creators-platforms.png)  
- **Uso:** inspiração de **composição** (o que é grande, o que é pequeno, onde fica a legenda). **Não** copiar cores laranja/amarelo nem fundo branco — a identidade do Rico Pneus continua **escura com acento vermelho automotivo** ([`design-system-rico-pneus-colors.md`](design-system-rico-pneus-colors.md)).

## O que a referência ensina (estrutura)

1. **Título no topo** — Uma pergunta ou frase forte, **centralizada** (ou alinhada de forma estável), com **1 destaque** em cor de acento (na referência: laranja; no Rico Pneus: vermelho `#C62828` / `#E53935`).  
2. **Gráfico como herói** — **Barras horizontais** (esquerda → direita): **coluna só para rótulos** (texto), depois as barras **coladas ao fim do rótulo** (gap 6–12px) — **nunca** o `rect` sobre o texto, **nem** um vão enorme entre rótulo e barra. **Valores à direita** numa **coluna reservada** — ver `carousel-layout-rules.md` §10.  
3. **Pouco texto no miolo** — Evitar parágrafo longo; se precisar de contexto, **1–2 linhas** curtas ou só o gráfico + título.  
4. **Takeaway opcional** — Uma linha curta abaixo do gráfico (na referência: segunda frase com destaque). Pode ser `.highlight-box` ou linha única, sem competir com o gráfico.  
5. **Legenda / rodapé informativo** — Na referência: “Fonte: …” à esquerda e autor à direita. No Rico Pneus:  
   - legenda do gráfico já em `.chart-caption` (ex.: “ilustrativo”, “conceitual”);  
   - **fonte real** do dado (se houver) em texto pequeno no rodapé ou sob o gráfico;  
   - manter **Rico Pneus · Fortaleza** no rodapé, **sem** seta decorativa — conforme [`carousel-layout-rules.md`](carousel-layout-rules.md).

## Tradução para o tema Rico Pneus (escuro)

| Referência (claro) | Rico Pneus (escuro) |
|--------------------|-------------------|
| Fundo branco | Fundo foto + overlay + `.card` escuro |
| Laranja nos destaques | Vermelho / âmbar da marca Rico Pneus |
| Barras horizontais laranja | Barras em SVG (vermelho `#c62828`, cinza neutro para trilhos) |
| Botão “Arraste para conferir” | Opcional: hint curto na capa (“Deslize”); **sem** seta no rodapé |

## Princípio único

> **Slides “de dados” (2, 4, 6):** o olhar deve ir primeiro para o **título**, depois para o **gráfico**; texto corrido é mínimo; **legenda** (fonte / “ilustrativo”) fecha a leitura.

## Checklist para o agente (slides 2, 4, 6)

- [ ] Título curto e com **um** destaque de cor da marca.  
- [ ] Gráfico ocupa **área visível relevante** (não miniaturizado demais).  
- [ ] Corpo de texto **≤ ~3 linhas** no slide “visual” ou substituído por takeaway único.  
- [ ] Legenda explícita se o gráfico for **ilustrativo** (não é dado auditado).  
- [ ] Hierarquia alinhada a este documento + [`carousel-layout-rules.md`](carousel-layout-rules.md).  
- [ ] Rótulos do gráfico **legíveis**: barras **não** sobrepõem os textos à esquerda (coluna de rótulos + início da barra separados).  
- [ ] Título e corpo dos slides internos **centralizados** (exceto texto em caixas — ver §11 em [`carousel-layout-rules.md`](carousel-layout-rules.md)).
