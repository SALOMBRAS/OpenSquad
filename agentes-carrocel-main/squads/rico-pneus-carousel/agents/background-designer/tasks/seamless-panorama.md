---
task: "Painéis de fundo contínuos (Unsplash / Pexels)"
order: 1
input: |
  - carousel-draft.md (tema, N slides)
  - stock-image-policy.md
output: |
  - backgrounds/bg-01 … bg-0N
  - background-manifest.md (URLs, licença, continuidade)
---

# Painéis de fundo contínuos

## Objetivo

Cada slide é um recorte **1080×1440** de uma **mesma narrativa visual**; borda direita do slide *i* combina com borda esquerda do *i+1*. Imagens obtidas **somente** de **Unsplash** ou **Pexels**, em alta resolução.

## Processo

1. Ler tema e N em `carousel-draft.md`. Escolher **uma direção de luz** (ex.: esquerda → direita).
2. Para cada painel 1…N, buscar em Unsplash/Pexels termos alinhados (ex.: "tire shop", "highway night", "truck fleet", "car maintenance" — **evitar** "motorcycle tire").
3. Baixar/crop para manter **continuidade**; se necessário, usar a **mesma** foto com `background-position` deslocada entre slides (documentar no manifest).
4. Salvar em `squads/rico-pneus-carousel/output/{run_id}/backgrounds/bg-NN.png` ou `.jpg`.
5. Escrever `background-manifest.md` com: lista de URLs de origem, fotógrafo, e `continuity_note`.

## Output Format

```yaml
sources:
  - panel: 1
    url: "https://unsplash.com/photos/..."
    photographer: "..."
continuity_note: "Uma frase sobre luz/textura ao longo dos painéis."
```

## Quality Criteria

- [ ] N arquivos nomeados corretamente.
- [ ] Nenhum texto ou logo na imagem de fundo.
- [ ] Apenas Unsplash/Pexels documentados.

## Veto Conditions

Rejeitar se: (1) imagem sem URL de origem; (2) uso de banco não permitido; (3) tema de moto quando o conteúdo é automotivo leve/pesado Rico Pneus; (4) ilustração de **mascote/personagem** como fundo — padrão é **só foto real** Unsplash/Pexels ([`mascot-character-policy.md`](../../../pipeline/data/mascot-character-policy.md)).
