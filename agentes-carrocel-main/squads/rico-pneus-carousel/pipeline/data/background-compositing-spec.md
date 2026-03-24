# Composição de fundos (pré-texto) — Rico Pneus

Documento para **Eduardo Compositor** e **Helena Homologação-Fundo**. Objetivo: enriquecer a **imagem bruta** escolhida por Patricia (`backgrounds/raw/`) com efeitos estilo editor (desfoque local, fumaça, opacidade, máscaras, ícones/PNGs) **antes** do HTML/texto (Diana), sem violar licenças.

**Playbook de efeitos (treinamento do Eduardo):** [`background-compositor-training.md`](background-compositor-training.md).  
**Treinamento do avaliador (Helena):** [`background-composite-reviewer-training.md`](background-composite-reviewer-training.md).

## Fluxo de pastas (por `run_id`)

| Artefato | Caminho | Responsável |
|----------|---------|-------------|
| Bruto licenciado | `output/{run_id}/backgrounds/raw/bg-01…bg-0N.jpg` (ou `.png`) | Patricia |
| Tratado / camadas | `output/{run_id}/backgrounds/composited/bg-01…bg-0N.jpg` | Eduardo |
| **Final para o HTML** | `output/{run_id}/backgrounds/bg-01…bg-0N.jpg` | Helena (após **APPROVE**) copia de `composited/`; ou cópia de `raw/` se composição for pulada |
| Manifesto de camadas | `output/{run_id}/composite-layer-manifest.md` | Eduardo |
| QA | `output/{run_id}/background-composite-review.md` | Helena |

Após o step 17, o pipeline deve garantir **placeholder**: `raw/bg-NN` copiado para `backgrounds/bg-NN` até existir versão aprovada em `composited/`.

## Biblioteca de ativos gratuitos (cliente)

- Diretório reservado: **`squads/rico-pneus-carousel/pipeline/data/asset-library/`** (ver `README.md` na pasta).  
- O cliente pode adicionar **ícones, fumacentos, overlays PNG/SVG** com licença clara (ex.: CC0, Unlicense, licença do pack).  
- **Proibido:** embutir marca concorrente, watermarks não licenciados, ou PNG “pegos” de busca sem direito.

## Efeitos permitidos (não exaustivo)

- **Desfoque gaussiano** local ou em camada (Sharp, ImageMagick, GIMP, Photoshop).  
- **Opacidade / multiply / screen** em sobreposições.  
- **Vinheta, gradiente, “fumaça”** (PNG sem fundo ou gradiente SVG exportado para raster).  
- **Caixas / balões** vazios ou com silhueta (área reservada para texto depois no HTML — preferir não colocar copy final aqui para não duplicar com Diana).  
- **Ícones** da `asset-library/` (check, alerta, seta discreta — sem poluir).  
- **Leve motion blur** ou glow pontual se exportado como **raster estático** (o entregável continua sendo **JPEG/PNG único** por slide; vídeo é out of scope).

## Ferramentas (sugestão)

- **Node + `sharp`:** redimensionar 1080×1440, blur, composite, flatten.  
- **ImageMagick** / **Photoshop** / **Figma** export: válido se o resultado for arquivo raster com metadados no manifest.  
- O agente **Eduardo** pode entregar: (1) arquivos finais em `composited/`, **e** (2) `composite-layer-manifest.md` listando cada operação e paths de assets externos usados.

## Alinhamento à marca

- [`client-carousel-design-standard.md`](client-carousel-design-standard.md): continua valendo **pneu como produto**, sem carro herói/mecânico; efeitos **não** devem esconder o produto nem sujar a leitura futura do texto.  
- Sem **mascote** ilustrado novo — [`mascot-character-policy.md`](mascot-character-policy.md).

## Quando pular composição

- Checkpoint explícito ou arquivo `output/{run_id}/skip-background-composite.md` com `skip: true`: copiar `raw/` → `backgrounds/bg-*` e não acionar Eduardo/Helena para esse run.

---

## Regras condicionais: dá para automatizar?

Resposta curta: **parte sim, parte não** — o modelo mais sólido hoje é **híbrido**: regras escritas (ou YAML) + **heurísticas** onde métricas de imagem/contexto existem + **revisão humana ou agente** (Helena) para fechar consistência.

### 1. “Embaçar quando a imagem for muito detalhada”

| Abordagem | O que significa |
|-----------|------------------|
| **Automática (técnica)** | É possível estimar “busy-ness” com métricas em script (ex.: **variância do Laplaciano**, densidade de bordas, entropia local) e, se passar de um limiar, aplicar **blur só numa região** (faixa do futuro texto) ou vignette. Limiares precisam **calibragem** por tipo de foto (macro de sulco vs. pilha). |
| **Semi-automática** | O modelo/agente classifica a raw (“alta textura / baixa área homogênea”) com **visão** e escolhe um **preset** (`detail_high` → blur 8–15px localizado). Eduardo documenta no `composite-layer-manifest.md` qual regra disparou. |
| **Manual** | Designer ajusta olho a olho — válido para primeiras entregas. |

**Consistência:** definir **presets nomeados** no manifest (ex.: `preset: reduce_clutter_below_title`) em vez de valores soltos, para Helena comparar entre slides.

### 2. “Ícones e sensação de movimento quando o texto for mais chamativo (ex. capa), laterais cortadas”

| Abordagem | O que significa |
|-----------|------------------|
| **Contexto do slide** | “Texto chamativo” vem do **papel do slide** + copy (`carousel-draft.md`, slide 1 = capa). Isso é mais **semântico** que “métrica de pixel”; combina bem com **regra declarativa**: *se `slide_index == 1` ou `role: cover` → permitir ícone lateral + leve motion blur / streak; posicionar em `x < 12%` ou `x > 88%` com **crop intencional***. |
| **Automática total** | Só se existir um **motor de regras** (YAML/JSON) consumido por um script ou pelo agente com checklist fixo; caso contrário, cada escolha fica arbitrária. |
| **Padrão visual** | Regra de ouro no compositor: **ícone parcialmente fora do canvas** (clip no bleed) para dinamismo — documentar no manifest (`icon_clip: true`, `anchor: left|right`). |

### 3. “Sombra no texto quando o fundo for muito claro”

| Onde aplicar | Observação |
|--------------|------------|
| **HTML / CSS (Diana)** | **Preferido** para legibilidade de **título e corpo**: `text-shadow`, scrim local, ou texto escuro — já alinhado a [`carousel-layout-rules.md`](carousel-layout-rules.md) (legibilidade fundo claro) e ao padrão do cliente. Ajusta-se **sem** reexportar o raster. |
| **Raster (Eduardo)** | Sombra **dentro da imagem** só faz sentido se o texto estiver “queimado” no JPEG (não é o fluxo atual Rico). |

**Conclusão:** brilho/claridade do fundo → decidir **contraste no layer de texto** (Diana); Eduardo foca em **foto** (blur, fumaça, ícone).

---

## Como garantir consistência entre carrosséis

1. **Documento único de política** — este arquivo + [`client-carousel-design-standard.md`](client-carousel-design-standard.md).  
2. **Manifesto obrigatório** — cada efeito em `composite-layer-manifest.md` com **nome da regra** ou preset (não só “blur 12px”).  
3. **Helena (gate)** — reprova se o mesmo tipo de slide (ex. capa) tiver tratamento totalmente diferente sem motivo no brief.  
4. **Arquivo opcional futuro** — `output/{run_id}/compositing-rules.yaml` (ou em `pipeline/data/compositing-presets.yaml`) com limiares e presets; um script `apply-composite.cjs` pode aplicar a parte automática; o restante fica Eduardo + QA.

### Resumo prático

| Tipo de regra | Automático 100% | Híbrido (recomendado) |
|---------------|-----------------|------------------------|
| Blur por “muitos detalhes” | Possível com script + limiares calibrados | Classificação + preset + QA |
| Ícones / crop dinâmico na capa | Só com regras por `slide_index` / papel | Regra declarativa + ajuste fino |
| Sombra / contraste de texto | Melhor em **CSS** (Diana), não no raster | Detecção de luminância pode **sugerir** classe CSS no brief para Diana |

Assim o processo **não** precisa ser “manual em cada pixel” para sempre, mas **automação plena** exige um pequeno **contrato de regras** (YAML) e, se quiser, **métricas de imagem** em Node — encaixa no próximo passo de implementação técnica do repositório.
