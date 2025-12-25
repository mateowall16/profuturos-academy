<!-- Projeto: ProFuturos Academy -->
# ProFuturos Academy

README em português com instruções rápidas para desenvolvimento, execução e organização do projeto.

## Descrição

Frontend em React + TypeScript (Vite) para a landing e área do aluno da ProFuturos Academy. Inclui um design system leve (`components/ui`), páginas públicas e privadas, integração com Supabase para autenticação e algumas features de UI (toasts, modais, etc.).

## Tecnologias principais

- Vite + TypeScript
- React 18
- Tailwind CSS
- Radix UI primitives
- Supabase (integração via `@supabase/supabase-js`)
- Sonner / Toasts

## Pré-requisitos

- Node.js 18+ ou gerenciador compatível (`npm`, `pnpm`, `yarn` ou `bun`).
- Recomendo usar um gerenciador de versões como `nvm` ou `volta` para garantir a versão do Node.

## Instalação (modo rápido)

1. Clone o repositório

```bash
git clone <SEU_REPO_GIT>
cd profuturos-academy
```

2. Instale dependências

```bash
# com npm
npm install

# ou com bun
bun install

# ou com pnpm
pnpm install
```

3. Rodar em desenvolvimento

```bash
npm run dev
# ou
bun run dev
# abre o servidor Vite em modo dev (hot-reload)
```

## Scripts disponíveis

- `npm run dev` — inicia servidor de desenvolvimento (Vite)
- `npm run build` — gera build de produção
- `npm run build:dev` — build em modo development
- `npm run preview` — preview do build local (`vite preview`)
- `npm run lint` — executa ESLint no projeto

## Estrutura do projeto (resumo)

- `src/` — código-fonte principal
	- `main.tsx` — entrada do app
	- `App.tsx` — roteamento e providers globais
	- `pages/` — páginas (Index, Login, Dashboard, Mentoria, FAQ, Checkout, ThankYou, NotFound)
	- `components/` — componentes reutilizáveis e específicos (e.g. `Header`, `Footer`, `ProBot`)
		- `components/mentoria/` — seções da página de mentoria
		- `components/ui/` — primitives / design system (botões, inputs, dialogs, toasts, etc.)
	- `hooks/` — hooks customizados (`useAuth`, `use-mobile`, `use-toast`)
	- `integrations/supabase/` — cliente e tipos do Supabase
	- `lib/` — utilitários (ex.: `utils.ts`)
	- `Imagens/` e `public/` — assets estáticos

## Variáveis de ambiente

Este projeto usa Supabase. Configure um arquivo `.env` (não comitar) com as variáveis necessárias, por exemplo:

```
VITE_SUPABASE_URL=https://xyz.supabase.co
VITE_SUPABASE_ANON_KEY=pk_xxx
```

As chaves no `src/integrations/supabase/client.ts` são lidas via `import.meta.env`.

## Linter / TypeScript

- Verificações TypeScript (sem emitir):

```bash
npx tsc --noEmit
```

- Rodar ESLint:

```bash
npm run lint
```

Se quiser remover imports não usados automaticamente, configure e execute regras do ESLint/TypeScript apropriadas (posso ajudar a ajustar as regras se desejar).

## Deploy

O build é estático gerado por Vite (`npm run build`). Plataformas compatíveis: Vercel, Netlify, Cloudflare Pages, etc. Configure as variáveis de ambiente no painel da plataforma e faça deploy do diretório `dist/` gerado.

## Arquivos de configuração importantes

- `tsconfig.json` — aliases e opções do TypeScript (`@/` apontando para `src/`)
- `vite.config.ts` — configuração do Vite
- `tailwind.config.ts` — configuração do Tailwind
- `bun.lockb` — lockfile do Bun (se estiver usando Bun)

## Boas práticas recomendadas

- Não commitar `node_modules`.
- Use arquivos `src/archive/` ou uma branch para guardar componentes experimentais ou removidos antes de excluir de vez.
- Rode `npm run lint` e `npx tsc --noEmit` antes de abrir PRs.

## Como contribuir

1. Crie uma branch a partir de `main`.
2. Faça as modificações e rode `npm run dev` para testar.
3. Rode `npm run lint` e `npx tsc --noEmit`.
4. Abra um Pull Request descrevendo a mudança.

## Contato

Se quiser que eu ajude a:
- gerar um relatório de imports não usados e dead code (ESLint/tsc),
- mover arquivos não referenciados para `src/archive/`,
- criar barrels (`index.ts`) em `components/` e `components/ui/`,
então me diga qual opção prefere que eu execute.

---

Arquivo gerado automaticamente pelo assistente — sinta-se à vontade para editar e personalizar com links, instruções de deploy específicas e informações do time.

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
