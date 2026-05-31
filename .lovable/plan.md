## 1. Reverter paleta para a oficial (Inteli Exec)

Manter o redesign recente (cantos retos `--radius: 0`, elementos largos, tipografia grande, Platypi/Manrope, blocos roxos), mas restaurar as cores oficiais:

Em `src/styles.css`:
- Remover `--c-amarelo` e o accent amarelo introduzido na última iteração.
- Adicionar tokens ausentes: `--c-lilas: #90a5e5`, `--c-verde: #89cea5`. Corrigir `--c-cinza-esc` para `#b2b6bf` (estava `#6b6f78`).
- `--accent: #ff4545` (coral) — acento institucional.
- Adicionar `--segment: #066d73` + `--segment-foreground: #ffffff` como token novo para o acento do segmento Exec & Pós/MBA.
- `--border` e `--input` voltam para `#caced6` (cinza médio) — o roxo como borda foi exagero da iteração anterior.
- `--ring: #066d73`.
- `--muted-foreground: #6b6f78` (texto auxiliar — mais legível que o cinza claro do DS).

Em `@theme inline` adicionar `--color-segment` e `--color-segment-foreground`.

## 2. Ajustar usos de cor nas páginas

Trocar onde estava amarelo (`bg-accent`/`text-accent` no papel de "botão de ação grande") para o padrão correto:
- Botões de ação primária ficam em `bg-primary text-primary-foreground` (roxo).
- Acento coral (`bg-accent`) usado com parcimônia: ícone do logo (no header), badge de contagem, hover de foco.
- Cabeçalhos de card em `bg-segment` (verde escuro) onde fizer sentido, conforme DS Exec.

Páginas afetadas: `src/routes/index.tsx`, `login.tsx`, `admin.tsx`, `admin.modulos.novo.tsx`, `admin.materiais.tsx`. Manter estrutura/tamanhos/retidão dos cantos.

## 3. Salvar o design system como referência oficial

- Copiar `user-uploads://inteli-exec-design-system.md` para `docs/design-system.md` no projeto (referência viva).
- Criar memória em `mem://design/inteli-exec` com resumo das regras (paleta oficial, tipografia, regra 60-30-10, sem amarelo) e registrar em `mem://index.md` em Core: "Paleta oficial Inteli Exec (roxo/coral/verde-escuro). Nunca usar amarelo. Cantos retos. Fontes Platypi+Manrope. Doc: docs/design-system.md".

## 4. Menu de navegação Início / Sobre

- Criar componente `src/components/site-header.tsx` com:
  - Bloco roxo à esquerda contendo ícone `BookOpen` + título "Plataforma de Cursos".
  - Nav à direita com `<Link to="/">Início</Link>` e `<Link to="/sobre">Sobre</Link>`, usando `activeProps` para destacar a rota ativa (sublinhado coral / texto roxo bold).
  - Estética coerente com o redesign: cantos retos, items grandes, uppercase Manrope 700.
- Renderizar `<SiteHeader />` no `__root.tsx` acima do `<Outlet />`.
- Remover o header inline duplicado de cada página (`index.tsx`, `login.tsx`, `admin.tsx`, `admin.modulos.novo.tsx`, `admin.materiais.tsx`) — o header global passa a ser único. Mantenho um subtítulo/h1 contextual por página.
- Criar rota nova `src/routes/sobre.tsx` com:
  - `head()` próprio (title, description, og).
  - Layout placeholder grande indicando "Sobre o autor" com mensagem "Conteúdo em breve — informações enviadas pelo autor serão exibidas aqui." Sem dados inventados (o usuário enviará depois).

## Fora de escopo

- Sem mudança de conteúdo dos módulos/materiais.
- Sem leitura/integração do PDF do Guia do Programa (não solicitado para incorporação agora).
