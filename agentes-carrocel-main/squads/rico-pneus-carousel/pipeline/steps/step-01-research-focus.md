---
type: checkpoint
outputFile: squads/rico-pneus-carousel/pipeline/data/research-focus.md
---

# Step 01: Definir foco de pesquisa

## Contexto

- **Empresa:** Rico Pneus — distribuidora de pneus em Fortaleza/CE (ver `pipeline/data/brand-rico-pneus.md`).
- **Proibido:** conteudo sobre pneus de moto.
- **Publico-alvo:** misto (particular, frota, frota leve/carga, oficinas, veiculos grandes) na regiao de Fortaleza.

## Perguntas ao usuario (checkpoint)

1. **Foco de pesquisa** — Qual o tema ou pergunta que o carrossel deve responder?
   Ex.: "sinais de alinhamento desregulado", "como ler o lado do pneu", "custo por km na frota".

2. **Segmento de publico** (opcional nesta rodada) — Qual peso hoje: particular, frota, oficina ou carga?

3. **Janela temporal** (escolha um numero):
   1. Ultimas 24 horas
   2. Ultimos 7 dias
   3. Ultimo mes
   4. Sem restricao (evergreen)

O runner grava as respostas em `pipeline/data/research-focus.md` antes do step 02.
