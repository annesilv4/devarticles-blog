# DevArticles

Blog de artigos e tutoriais para desenvolvedores, construído com Next.js 16 e TypeScript.

## Sobre o projeto

O **DevArticles** é uma aplicação estática que exibe uma listagem de artigos sobre desenvolvimento web. Cada artigo possui uma página de detalhes com título, autor, data de publicação, imagem de capa e conteúdo completo.

## Funcionalidades

- Listagem de artigos em destaque na página inicial
- Página de detalhes por artigo com rota dinâmica (`/artigos/[slug]`)
- Geração estática de todas as páginas com `generateStaticParams`
- Metadados dinâmicos com Open Graph por artigo
- Layout com Header e Footer globais

## Tecnologias

- [Next.js 16](https://nextjs.org/) — framework React com App Router
- [React 19](https://react.dev/) — biblioteca de interfaces
- [TypeScript](https://www.typescriptlang.org/) — tipagem estática
- [CSS Modules](https://github.com/css-modules/css-modules) — estilos com escopo por componente
- [React Compiler](https://react.dev/learn/react-compiler) — otimização automática de re-renderizações

## Estrutura do projeto

```
src/
├── app/
│   ├── layout.tsx               # Layout global (Header + Footer)
│   ├── page.tsx                 # Página inicial com listagem de artigos
│   └── artigos/
│       └── [slug]/
│           └── page.tsx         # Página de detalhes do artigo
├── components/
│   ├── Card/                    # Card de artigo para a listagem
│   ├── Footer/                  # Rodapé
│   ├── Grid/                    # Grade de artigos
│   ├── Header/                  # Cabeçalho
│   └── Title/                   # Título de seção
├── lib/
│   └── artigos.js               # Dados estáticos dos artigos
├── styles/
│   └── globals.css              # Estilos globais e variáveis CSS
└── types/
    └── types.ts                 # Interfaces TypeScript
```

## Como rodar

**Pré-requisitos:** Node.js 18+

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts disponíveis

| Comando         | Descrição                                 |
| --------------- | ----------------------------------------- |
| `npm run dev`   | Inicia o servidor de desenvolvimento      |
| `npm run build` | Gera o build de produção                  |
| `npm run start` | Inicia o servidor com o build de produção |

## Autor

Desenvolvido por Anne Carolayne - Aluno de Desenvolvimento Full Stack em Python
