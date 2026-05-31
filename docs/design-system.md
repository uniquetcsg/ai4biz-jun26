# Design System — Inteli Exec
### Referência de branding para sites e objetos digitais de aprendizagem (ODA)

> **Escopo.** Este documento traduz as diretrizes do template institucional *Inteli — Modelo de Apresentações* para o contexto **digital interativo** (páginas web, componentes HTML/CSS, ODA, e‑learning). Não substitui o manual de marca completo do Inteli; consolida e operacionaliza o subconjunto necessário para produção de interfaces.
> **Segmento de aplicação:** Exec & Pós/MBA. O acento cromático deste segmento é o **Verde Escuro (`#066d73`)**, mantendo Roxo e Coral como base institucional.

---

## 1. Princípios de design (extraídos do template)

- **Canvas claro e respirável.** Fundo predominante em cinza-claro frio / branco, com áreas amplas de respiro. Conteúdo nunca preenche cada centímetro.
- **Dominância cromática, não igualdade.** Roxo, lilás, verde-claro e cinza-claro ocupam a maior proporção; coral e verde-escuro entram pontualmente como destaque.
- **Geometria angular como motif.** Blocos diagonais e painéis laterais sólidos (roxo) estruturam capas e seções.
- **Contorno coral como assinatura.** Retângulos de contorno fino em coral marcam rótulos, citações e elementos de foco — usados com parcimônia.
- **Hierarquia tipográfica explícita.** Cinco níveis bem definidos, do `CAPÍTULO` ao texto corrido, sem ambiguidade.
- **Sobriedade executiva.** Estética premium, contida e técnica — adequada ao público de educação executiva.

---

## 2. Logo — uso e proteção

A marca é composta pelo **símbolo (cluster de pontos)** + **logotipo "inteli"**.

| Regra | Detalhe |
|-------|---------|
| **Não deformar** | Sem distorção, esticamento ou rotação |
| **Não recolorir** | Usar apenas variações oficiais por fundo |
| **Versão por fundo** | Versão escura (roxo/preto) para fundos claros; versão clara (branca) para fundos escuros/roxo |
| **Versão descontinuada** | **Não usar** mais o logo com a assinatura institucional ("instituto de tecnologia e liderança") ao lado |
| **Área de proteção** | Reservar margem livre ≥ altura do símbolo ao redor do logo |
| **Posição padrão em layouts** | Canto superior direito |

**Web:** servir o logo em **SVG** (escalável, nítido em retina); manter `aria-label="Inteli"` e versão alternativa para tema escuro via `prefers-color-scheme` ou troca de classe.

---

## 3. Paleta de cores

### 3.1 Paleta completa

| Nome | HEX | Papel |
|------|-----|-------|
| Roxo | `#2e2640` | **Primária** — base de painéis, títulos, cards escuros |
| Coral | `#ff4545` | **Acento** — destaques, contornos, rótulos `DESTAQUE` |
| Lilás | `#90a5e5` | Segmento Escolas / cor de apoio |
| Verde | `#89cea5` | Segmento Graduação / cor de apoio |
| Verde Escuro | `#066d73` | **Acento do segmento Exec & Pós/MBA** — cabeçalhos de card |
| Cinza Escuro | `#b2b6bf` | Texto secundário, elementos neutros |
| Cinza Médio | `#caced6` | Divisórias, fundos sutis |
| Cinza Claro | `#e6eaeb` | **Canvas / superfície** predominante |
| Branco | `#ffffff` | Base, cards claros, texto sobre escuro |

### 3.2 Segmentação por unidade

A comunicação subdivide a paleta para identificar cada segmento. Os layouts seguem, sempre que possível, a proporção definida.

| Segmento | Composição cromática |
|----------|----------------------|
| Institucional | Branco + cinzas + Roxo + Coral (acento) |
| Graduação | Branco + cinzas + **Verde `#89cea5`** + Roxo |
| Escolas | Branco + cinzas + **Lilás `#90a5e5`** + Roxo |
| **Exec & Pós/MBA** | Branco + cinzas + **Verde Escuro `#066d73`** + Roxo + Coral |

### 3.3 Proporção cromática (regra 60‑30‑10 adaptada)

- **~60% — neutros:** Branco + Cinza Claro (canvas, superfícies)
- **~30% — primária:** Roxo (painéis, cards, títulos)
- **~10% — acento do segmento + coral:** Verde Escuro (Exec) e Coral (foco pontual)

> Coral e verde-escuro **complementam**; nunca dominam o layout.

---

## 4. Tipografia

### 4.1 Famílias institucionais

| Fonte | Uso | Disponibilidade web |
|-------|-----|---------------------|
| **Azurio** | Display / títulos institucionais | Proprietária (não disponível para web) |
| **Platypi** | **Substituta oficial da Azurio** quando esta não está disponível (ex.: Docs) | Google Fonts (aberta) |
| **Manrope** | **Corpo de texto** e uso geral | Google Fonts (aberta) |
| **Space Mono** | Destaques pontuais (mono), rótulos técnicos | Google Fonts (aberta) — **uso restrito** |

**Recomendação para web/ODA:** como a Azurio é proprietária, adotar **Platypi** para títulos e **Manrope** para corpo. Reservar **Space Mono** apenas a marcações pontuais (códigos, etiquetas, números) — o uso excessivo prejudica a leitura.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Platypi:ital,wght@0,300..800;1,300..800&family=Manrope:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
```

### 4.2 Hierarquia (espelho do template)

| Nível | Exemplo no template | Tratamento web |
|-------|---------------------|----------------|
| Capítulo | `CAPÍTULO` (coral, caixa-alta, grande) | `.t-chapter` — Platypi, coral, uppercase |
| Título de página | `Títulos páginas` (roxo, bold) | `.t-title` — Platypi, roxo, 700 |
| Subtítulo | `Subtítulos` (roxo, regular) | `.t-subtitle` — Platypi, roxo, 500 |
| Destaque | `DESTAQUE` (coral, small caps, bold) | `.t-eyebrow` — Manrope, coral, uppercase, 700 |
| Texto corrido | parágrafos | `body` — Manrope, roxo/cinza-escuro, 400 |

### 4.3 Escala tipográfica sugerida (web, base 16px)

| Token | rem | px | Peso | Família |
|-------|-----|----|----|---------|
| `--fs-display` | 3.5 | 56 | 700 | Platypi |
| `--fs-h1` | 2.5 | 40 | 700 | Platypi |
| `--fs-h2` | 1.875 | 30 | 600 | Platypi |
| `--fs-h3` | 1.375 | 22 | 600 | Platypi |
| `--fs-eyebrow` | 0.875 | 14 | 700 | Manrope (uppercase, +letter-spacing) |
| `--fs-body` | 1 | 16 | 400 | Manrope |
| `--fs-small` | 0.8125 | 13 | 400 | Manrope |
| `--fs-mono` | 0.875 | 14 | 400 | Space Mono |

> Altura de linha: títulos `1.1–1.2`; corpo `1.5–1.6`.

---

## 5. Iconografia

- Biblioteca oficial: **Google Material Symbols / Icons** — <https://fonts.google.com/icons>
- Manter **estilo único** em todo o ODA (recomendado: *Outlined*, peso e *grade* consistentes).
- Cor padrão do ícone: Roxo (`#2e2640`); sobre fundo escuro, Branco; acento em Coral/Verde Escuro apenas para foco.

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet">
<span class="material-symbols-outlined">school</span>
```

---

## 6. Tokens de espaçamento, raio e elevação

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-1` | 4px | micro |
| `--space-2` | 8px | interno compacto |
| `--space-3` | 16px | padrão entre elementos |
| `--space-4` | 24px | entre blocos |
| `--space-5` | 40px | entre seções |
| `--space-6` | 64px | respiro de seção |
| `--radius-sm` | 6px | rótulos, botões |
| `--radius-md` | 12px | cards |
| `--radius-lg` | 20px | cards de citação/destaque |
| `--radius-pill` | 999px | barras de progresso, tags |
| `--shadow-card` | `0 8px 24px rgba(46,38,64,.10)` | elevação de cards claros |

> Margens de borda generosas (≥ 40px no desktop). Espaçamento entre blocos consistente — escolher 16px ou 24px e manter.

---

## 7. Componentes (receitas web)

### 7.1 Folha de tokens consolidada (`:root`)

```css
:root {
  /* Cores institucionais */
  --c-roxo:        #2e2640;
  --c-coral:       #ff4545;
  --c-lilas:       #90a5e5;
  --c-verde:       #89cea5;
  --c-verde-esc:   #066d73; /* acento Exec */
  --c-cinza-esc:   #b2b6bf;
  --c-cinza-med:   #caced6;
  --c-cinza-claro: #e6eaeb;
  --c-branco:      #ffffff;

  /* Papéis semânticos */
  --bg:            var(--c-cinza-claro);
  --surface:       var(--c-branco);
  --surface-dark:  var(--c-roxo);
  --text:          var(--c-roxo);
  --text-muted:    var(--c-cinza-esc);
  --text-invert:   var(--c-branco);
  --accent:        var(--c-coral);
  --accent-seg:    var(--c-verde-esc); /* segmento Exec */
  --border:        var(--c-cinza-med);

  /* Tipografia */
  --font-title: "Platypi", Georgia, serif;
  --font-body:  "Manrope", system-ui, sans-serif;
  --font-mono:  "Space Mono", monospace;

  /* Espaço e forma */
  --radius-sm: 6px; --radius-md: 12px; --radius-lg: 20px; --radius-pill: 999px;
  --shadow-card: 0 8px 24px rgba(46,38,64,.10);
}

body { background: var(--bg); color: var(--text); font-family: var(--font-body); line-height: 1.6; }
h1,h2,h3 { font-family: var(--font-title); color: var(--text); line-height: 1.2; }
```

### 7.2 Rótulo de seção (caixa com contorno coral)

Motif recorrente do template (`Tipografia`, `Cores`, `Logos`).

```css
.section-label {
  display: inline-block;
  font-family: var(--font-title); font-weight: 700;
  color: var(--text);
  border: 2px solid var(--accent);
  border-radius: var(--radius-sm);
  padding: 8px 20px;
}
```

### 7.3 Eyebrow `DESTAQUE` + título

```css
.eyebrow {
  font-family: var(--font-body); font-weight: 700;
  font-size: .875rem; letter-spacing: .08em; text-transform: uppercase;
  color: var(--accent);
  border-bottom: 2px solid var(--text); /* régua sob o destaque, como no template */
  padding-bottom: 6px; display: inline-block;
}
```

### 7.4 Card claro (grade 2×2 de destaques)

```css
.card {
  background: var(--surface);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
  padding: 24px;
}
```

### 7.5 Card escuro com cabeçalho de segmento (padrão Exec)

Card roxo com **faixa de cabeçalho em Verde Escuro** e texto branco.

```css
.card-dark { background: var(--surface-dark); color: var(--text-invert); border-radius: var(--radius-md); overflow: hidden; }
.card-dark__header { background: var(--accent-seg); color: var(--text-invert); font-family: var(--font-title); font-weight: 700; text-align: center; padding: 12px 16px; }
.card-dark__body { padding: 20px 24px; }
```

### 7.6 Botões

```css
.btn { font-family: var(--font-body); font-weight: 700; border-radius: var(--radius-sm); padding: 12px 24px; cursor: pointer; border: 0; }
.btn--primary { background: var(--c-roxo); color: #fff; }
.btn--accent  { background: var(--accent-seg); color: #fff; }            /* ação do segmento Exec */
.btn--ghost   { background: transparent; color: var(--c-roxo); border: 2px solid var(--c-roxo); }
.btn:focus-visible { outline: 3px solid var(--accent); outline-offset: 2px; }
```

### 7.7 Barra de progresso / dado quantitativo

Trilho cinza-claro, preenchimento roxo, pontas arredondadas; rótulo + percentual.

```css
.bar { background: var(--c-cinza-claro); border-radius: var(--radius-pill); height: 14px; }
.bar__fill { background: var(--c-roxo); height: 100%; border-radius: var(--radius-pill); }
```

### 7.8 Citação (card claro + contorno coral deslocado sobre painel roxo)

Componha um card claro arredondado com um retângulo de contorno coral deslocado e um painel roxo ao fundo. Nome da fonte em coral.

```css
.quote { background: var(--surface); border-radius: var(--radius-lg); padding: 40px; box-shadow: var(--shadow-card); }
.quote__text { font-family: var(--font-title); font-size: 1.5rem; }
.quote__author { color: var(--accent); margin-top: 16px; }
```

### 7.9 Capa / divisória de seção

- **Painel lateral sólido em roxo** + **bloco diagonal** em cinza-médio sobre canvas claro.
- Título em Platypi, roxo, caixa-alta, alinhado à direita ou à esquerda.
- Logo (versão escura) no canto superior direito.

```css
.cover { position: relative; background: var(--bg); min-height: 100vh; }
.cover__panel { position: absolute; inset: 0 auto 0 0; width: 18%; background: var(--c-roxo); clip-path: polygon(0 0, 100% 0, 60% 100%, 0 100%); }
```

---

## 8. Grelha e layout

- **Grelha de 12 colunas**, *gutter* 24px, contêiner máx. ~1200px.
- Padrões herdados do template: **duas colunas** (texto + visual), **grade 2×2 de cards**, **split** (conteúdo claro à esquerda + painel roxo à direita).
- **Não centralizar** parágrafos e listas — alinhar à esquerda; centralizar apenas títulos quando fizer sentido.
- Manter respiro: evitar densidade visual; preferir uma ideia por bloco.

---

## 9. Acessibilidade (WCAG 2.1 — crítico para ODA)

| Combinação | Contraste aprox. | Veredito |
|------------|------------------|----------|
| Roxo `#2e2640` sobre Branco | ~13:1 | ✅ AAA |
| Branco sobre Roxo | ~13:1 | ✅ AAA |
| Branco sobre Verde Escuro `#066d73` | ~5:1 | ✅ AA (texto normal) |
| Verde Escuro sobre Branco | ~5:1 | ✅ AA |
| **Coral `#ff4545` sobre Branco** | **~3.4:1** | ⚠️ **Falha AA p/ texto normal**; aprovado p/ texto grande (≥24px ou ≥18.66px bold) e componentes de UI |
| Cinza Escuro `#b2b6bf` sobre Branco | ~2:1 | ⚠️ Apenas elementos decorativos, **não** texto |

**Diretrizes:**
- Usar **coral só em texto grande/bold** (rótulos, números, títulos curtos) — nunca em parágrafo.
- Texto de corpo: sempre Roxo sobre claro ou Branco sobre Roxo/Verde Escuro.
- Foco visível em todos os interativos (`:focus-visible` com contorno coral).
- Ícones funcionais com `aria-label`; nunca transmitir informação só por cor.

---

## 10. Aplicação em objetos digitais de aprendizagem

- **Estados de progresso do aluno:** barras roxas (concluído) sobre trilho cinza-claro; marco atual em verde-escuro.
- **Feedback:** acerto → verde-escuro; atenção/erro → coral (com ícone + texto, não só cor).
- **Cartões de conteúdo/lição:** card claro (`.card`) para leitura; card escuro (`.card-dark`) para destaque/síntese de módulo.
- **Citações de especialistas / depoimentos:** componente `.quote`.
- **Perfis (autor/facilitador):** foto circular sobre painel roxo + selo de rede + QR/contato com contorno coral.
- **Responsividade:** colapsar split e grade 2×2 para coluna única em < 768px; manter respiro proporcional.
- **Tema escuro opcional:** inverter `--surface`/`--text` mantendo roxo e verde-escuro como âncoras.

---

## 11. Principais insights

- O sistema é **mono-primária (roxo) com acento por segmento** — para Exec, o diferencial é o **Verde Escuro `#066d73`**, não o coral (que permanece institucional e pontual).
- A identidade web é **reconstruível com fontes abertas** (Platypi + Manrope + Space Mono), sem depender da Azurio proprietária.
- A consistência vem mais dos **motifs** (geometria angular, painel roxo, contorno coral, hierarquia tipográfica) do que de qualquer cor isolada.

---

## 12. Próximos passos

1. **Validar** os tokens com o time de marca do Inteli (sobretudo a substituição Azurio → Platypi para web).
2. **Implementar** o `:root` da seção 7.1 como camada base de qualquer site/ODA e versioná-lo (ex.: arquivo `tokens.css`).
3. **Obter** os arquivos oficiais de logo em **SVG** (versões clara e escura) e licença das fontes proprietárias para casos de display.
4. **Construir** uma biblioteca de componentes (Storybook ou página de referência) com os recipes da seção 7.
5. **Testar** contraste e navegação por teclado/leitor de tela antes de publicar qualquer ODA.

---

## 13. Riscos e ressalvas

- **Coral em texto:** principal risco de acessibilidade — restringir a texto grande/bold e elementos de UI; nunca em parágrafo.
- **Azurio proprietária:** Platypi e Manrope são aproximações; pode haver leve divergência visual com peças impressas/institucionais. Validar com marca.
- **Reconstrução por inspeção:** valores de fundo do canvas (cinza-claro) e raios/sombras foram inferidos do template visual; o manual de marca oficial prevalece em caso de conflito.
- **Sombras/elevação:** não constam explicitamente no template (estética predominantemente plana). Use sombras com sutileza para não destoar do sistema institucional.
- **Excesso de Space Mono:** o próprio manual alerta — restringir a destaques pontuais.

---

**Fonte:** `Inteli_Exec___Modelo_Apresentações__Uso_Professores.pptx` (template institucional Inteli — uso restrito/confidencial). Tokens, recipes e parâmetros de acessibilidade derivados por análise visual e textual do arquivo.
