# My Tasks

Aplicação de lista de tarefas construída em React + Vite, seguindo fielmente o layout do [Figma](https://www.figma.com/design/VRogWbFHkzSYTpIjjx3h56/Simple-To-Do-List--Community-?node-id=0-1&p=f).

O app funciona 100% offline como PWA (Progressive Web App) e persiste os dados no localStorage do navegador.

## Funcionalidades

- Adicionar tarefas
- Editar tarefas (clique no ícone de lápis)
- Remover tarefas
- Marcar como concluída
- Filtro por status (All / Active / Completed)
- Tema claro e escuro com persistência
- Sidebar com navegação e perfil do usuário
- Responsivo (mobile e desktop)
- Instalável como PWA (funciona offline)

## Tecnologias

- **React 18** com Vite 5
- **TailwindCSS v3** com CSS custom properties para temas
- **Lucide React** para ícones
- **vite-plugin-pwa** para service worker e manifest

## Estrutura do projeto

```
src/
├── App.jsx                  # Componente raiz (estado global e layout)
├── main.jsx                 # Entry point
├── index.css                # Tailwind + CSS variables de tema
├── assets/                  # Imagens (avatar e empty state)
├── components/
│   ├── TaskInput.jsx        # Input de nova tarefa
│   ├── TaskCard.jsx         # Card individual (edição inline)
│   ├── TaskList.jsx         # Lista de cards
│   ├── FilterBar.jsx        # Filtros All / Active / Completed
│   ├── EmptyState.jsx       # Tela quando não há tarefas
│   ├── Footer.jsx           # Rodapé
│   └── Sidebar/
│       ├── Sidebar.jsx      # Container da sidebar
│       ├── ProfileSection.jsx
│       └── SidebarMenuItem.jsx
├── hooks/
│   ├── useLocalStorage.js   # Persistência em localStorage
│   └── useTheme.js          # Lógica de tema (dark/light)
└── context/
    └── ThemeContext.jsx      # Context API para tema global
```

## Como rodar

Pré-requisitos: **Node.js 18+** e **npm**.

```bash
# Clone o repositório
git clone <url-do-repositorio>
cd Lista-Todo-Figma

# Instale as dependências
npm install

# Rode em modo desenvolvimento
npm run dev
```

O app vai abrir em `http://localhost:5173`.

## Build para produção

```bash
npm run build
npm run preview
```

Os arquivos otimizados ficam na pasta `dist/`.

## Decisões técnicas

**Estado centralizado no App.jsx** com `useState` e `useLocalStorage` (hook customizado que sincroniza automaticamente com o localStorage). Todos os callbacks usam `useCallback` e valores derivados usam `useMemo` para evitar renders desnecessários.

**Sistema de temas via CSS custom properties** ao invés do prefixo `dark:` do Tailwind em cada classe. As variáveis são definidas no `:root` (light) e na classe `.dark` (dark), e o Tailwind referencia essas variáveis no config. Isso mantém o código DRY porque cada componente usa uma única classe (como `bg-surface` ou `text-text-primary`) que muda de cor automaticamente.

**Componentização** seguindo separação de responsabilidade: cada componente cuida de uma parte da interface e recebe dados/callbacks via props. O estado de negócio fica no App (single source of truth) e os componentes são apresentacionais.

**PWA com service worker** configurado via `vite-plugin-pwa` com auto-update silencioso. A fonte Lato (Google Fonts) é cacheada com estratégia CacheFirst para funcionar offline após a primeira visita.

**Responsividade mobile-first** com breakpoints do Tailwind (`sm:` para 640px+, `md:` para 768px+). No mobile a sidebar vira um drawer com overlay, os tamanhos de fonte e espaçamentos são reduzidos, e o empty state empilha verticalmente.
