export const Artigos = [
    {
        id: 1,
        title: "Introdução ao React: construindo interfaces modernas",
        slug: "introducao-ao-react",
        author: "Ana Silva",
        date: "2026-01-10",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
        content:
            "React é uma biblioteca JavaScript criada pelo Facebook para construir interfaces de usuário de forma declarativa e baseada em componentes. Neste artigo, exploramos os conceitos fundamentais como JSX, props, state e o ciclo de vida dos componentes, além de mostrar como criar sua primeira aplicação React do zero.",
        description: `React surgiu em 2013 como uma solução interna do Facebook para lidar com interfaces de usuário complexas e de alto desempenho. Desde então, tornou-se uma das bibliotecas JavaScript mais populares do mundo, utilizada por empresas como Airbnb, Netflix, Twitter e Instagram.
O conceito central do React é o componente. Um componente é uma função ou classe que recebe dados (props) e retorna uma descrição do que deve ser exibido na tela. Essa abordagem modular permite dividir a interface em peças reutilizáveis e independentes, facilitando a manutenção e os testes.
O JSX é uma extensão de sintaxe que permite escrever estruturas semelhantes ao HTML dentro do JavaScript. Embora pareça incomum à primeira vista, o JSX é transformado em chamadas de função JavaScript pelo compilador, tornando o código mais legível e expressivo do que a alternativa sem JSX.
O estado (state) é o mecanismo que o React oferece para que os componentes armazenem dados que mudam ao longo do tempo. Quando o estado é atualizado com a função setState ou com o hook useState, o React re-renderiza automaticamente o componente e seus filhos, mantendo a interface sempre sincronizada com os dados.
As props permitem que componentes pai passem informações para componentes filhos. Elas são somente leitura, o que garante um fluxo de dados unidirecional — uma das razões pelas quais as aplicações React são mais fáceis de debugar e entender em comparação com arquiteturas bidirecionais.
Os hooks, introduzidos no React 16.8, revolucionaram a forma de escrever componentes. Com useEffect, useState, useContext e outros hooks nativos, é possível adicionar estado, efeitos colaterais e acessar contextos sem precisar escrever classes. A comunidade também criou centenas de hooks personalizados para casos de uso específicos.
O Virtual DOM é um dos diferenciais de performance do React. Em vez de atualizar o DOM real a cada mudança, o React mantém uma representação em memória da interface e calcula a diferença mínima necessária antes de aplicar as alterações no navegador, tornando as atualizações muito mais eficientes.
Para começar, basta criar um projeto com o comando npx create-react-app meu-app ou utilizar o Vite com o template React. A partir daí, você terá um ambiente de desenvolvimento completo com hot reload, suporte a TypeScript e todas as ferramentas necessárias para construir aplicações modernas e escaláveis.`,
    },
    {
        id: 2,
        title: "Next.js 15: o guia completo de App Router",
        slug: "nextjs-15-app-router",
        author: "Carlos Mendes",
        date: "2026-01-18",
        image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=800&auto=format&fit=crop",
        content:
            "O App Router do Next.js 15 representa uma mudança de paradigma no desenvolvimento de aplicações React. Com suporte nativo a Server Components, layouts aninhados e streaming, este guia abrange desde a estrutura de pastas até estratégias avançadas de cache e revalidação de dados.",
        description: `O Next.js é um framework React criado pela Vercel que adiciona funcionalidades essenciais como roteamento, renderização no servidor, geração estática e otimização de imagens diretamente ao ecossistema React. Desde sua criação, tem evoluído rapidamente e a versão 15 traz mudanças fundamentais na forma de construir aplicações.
O App Router, introduzido no Next.js 13 e consolidado na versão 15, substitui o antigo Pages Router com uma abordagem baseada na estrutura de pastas dentro do diretório app/. Cada pasta representa um segmento de rota, e arquivos especiais como page.tsx, layout.tsx, loading.tsx e error.tsx definem o comportamento de cada segmento.
Os React Server Components (RSC) são a grande novidade do App Router. Por padrão, todos os componentes dentro do diretório app/ são Server Components, ou seja, são renderizados exclusivamente no servidor e não enviam JavaScript ao cliente. Isso resulta em pacotes menores e carregamento mais rápido para o usuário final.
Os layouts aninhados permitem criar shells persistentes de UI que envolvem múltiplas páginas. Um layout definido em um nível superior é preservado durante a navegação entre páginas filhas, evitando re-renderizações desnecessárias e melhorando a experiência do usuário com transições suaves.
O streaming, baseado na API de Suspense do React, permite que o servidor envie partes da página conforme ficam prontas, em vez de esperar que todos os dados sejam carregados antes de responder. Combinado com o arquivo loading.tsx, é possível exibir estados de carregamento granulares para cada seção da página.
A busca de dados no App Router é feita diretamente nos Server Components usando async/await. O Next.js 15 refinou o sistema de cache, tornando o comportamento mais previsível: por padrão, as requisições não são mais cacheadas automaticamente, e o desenvolvedor opta explicitamente por cache com as opções force-cache ou next: { revalidate }.
As Server Actions permitem executar funções no servidor diretamente a partir de formulários e eventos do cliente, sem a necessidade de criar endpoints de API manualmente. Elas simplificam operações como salvar dados em banco, enviar e-mails e processar uploads, mantendo a lógica sensível fora do navegador.
Para migrar do Pages Router para o App Router, a Vercel oferece um guia de coexistência que permite adotar o novo sistema incrementalmente. Ambos os roteadores podem coexistir no mesmo projeto, permitindo que equipes migrem rotas gradualmente sem precisar reescrever tudo de uma vez.`,
    },
    {
        id: 3,
        title: "TypeScript para iniciantes: tipagem estática no front-end",
        slug: "typescript-para-iniciantes",
        author: "Fernanda Costa",
        date: "2026-02-03",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop",
        content:
            "TypeScript adiciona tipagem estática opcional ao JavaScript, tornando o código mais seguro e fácil de manter. Este artigo apresenta os tipos básicos, interfaces, generics e como configurar o TypeScript em projetos React e Node.js, com exemplos práticos do dia a dia.",
        description: `TypeScript é um superset do JavaScript desenvolvido pela Microsoft que adiciona tipagem estática opcional à linguagem. Isso significa que todo código JavaScript válido é também TypeScript válido, tornando a adoção incremental e acessível a desenvolvedores com qualquer nível de experiência.
A principal vantagem da tipagem estática é a detecção de erros em tempo de desenvolvimento, antes mesmo de o código ser executado. O compilador do TypeScript analisa o código e aponta inconsistências de tipo, propriedades inexistentes e possíveis valores nulos, eliminando uma categoria inteira de bugs que só seriam percebidos em produção.
Os tipos primitivos do TypeScript incluem string, number, boolean, null, undefined, bigint e symbol. Além deles, existem tipos compostos como arrays (number[]), tuplas ([string, number]), objetos e unions (string | number). O tipo any desabilita a checagem e deve ser evitado, enquanto unknown é a alternativa segura para valores de origem desconhecida.
As interfaces definem contratos para a forma de objetos. Elas descrevem quais propriedades e métodos um objeto deve ter, e podem ser estendidas ou implementadas por classes. As interfaces são apagadas durante a compilação e não geram nenhum código JavaScript, servindo apenas como documentação para o compilador.
Os tipos genéricos (generics) são uma das funcionalidades mais poderosas do TypeScript. Eles permitem criar funções, classes e interfaces que funcionam com qualquer tipo, mantendo a segurança de tipos. Por exemplo, uma função genérica identity<T>(arg: T): T funciona com strings, números e objetos sem perder informação de tipo.
Para usar TypeScript em projetos React, basta instalar typescript e @types/react. Os arquivos passam a ter extensão .tsx para componentes e .ts para utilitários. As props dos componentes são tipadas com interfaces, e os hooks como useState aceitam um tipo genérico: useState<string>('') garante que o estado sempre será uma string.
O arquivo tsconfig.json controla o comportamento do compilador. As opções mais importantes incluem strict (habilita todas as verificações rigorosas), target (versão do JavaScript gerado), moduleResolution (algoritmo de resolução de módulos) e paths (mapeamento de caminhos para imports absolutos).
Com a adoção massiva do TypeScript pela comunidade, praticamente todos os pacotes populares do npm incluem definições de tipo, seja embutidas no pacote ou via @types/nome-do-pacote. Editores como VS Code oferecem autocomplete, refatoração segura e navegação de código extremamente precisos quando o projeto usa TypeScript.`,
    },
    {
        id: 4,
        title: "CSS Grid vs Flexbox: quando usar cada um",
        slug: "css-grid-vs-flexbox",
        author: "Bruno Oliveira",
        date: "2026-02-14",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&auto=format&fit=crop",
        content:
            "Flexbox e CSS Grid são as duas principais ferramentas de layout moderno do CSS. Enquanto o Flexbox é ideal para layouts unidimensionais, o Grid brilha em layouts bidimensionais. Neste artigo comparamos os dois com exemplos visuais e casos de uso reais para ajudar você a escolher a abordagem certa.",
        description: `Antes do Flexbox e do CSS Grid, criar layouts complexos exigia hacks com float, tabelas e posicionamento absoluto. Hoje, essas duas especificações modernas do CSS resolvem a maioria dos problemas de layout de forma limpa, semântica e com suporte amplo em todos os navegadores modernos.
O Flexbox (Flexible Box Layout) foi projetado para distribuir elementos em uma única dimensão — seja em linha (row) ou em coluna (column). O elemento pai se torna um flex container com display: flex, e os filhos diretos tornam-se flex items que podem crescer, encolher e se alinhar de forma flexível dentro do container.
As propriedades principais do Flexbox são justify-content (alinhamento no eixo principal), align-items (alinhamento no eixo cruzado), flex-wrap (quebra de linha), gap (espaçamento entre items) e as propriedades dos filhos: flex-grow, flex-shrink e flex-basis. Com apenas essas propriedades é possível criar navbars, listas horizontais e centralizações perfeitas.
O CSS Grid foi projetado para layouts bidimensionais, controlando linhas e colunas simultaneamente. Com display: grid, o desenvolvedor define a estrutura da grade com grid-template-columns e grid-template-rows, e posiciona os elementos filhos em células específicas usando grid-column e grid-row ou áreas nomeadas com grid-template-areas.
A função repeat() combinada com auto-fill e auto-fit torna o Grid extremamente poderoso para layouts responsivos sem media queries. A unidade fr (fraction) distribui o espaço disponível proporcionalmente entre colunas ou linhas, enquanto minmax() garante que as colunas tenham um tamanho mínimo e máximo definidos.
Na prática, a escolha entre Flexbox e Grid depende do problema: use Flexbox para alinhar itens em uma direção (barra de navegação, grupos de botões, listas), e use Grid para estruturar a página inteira ou seções com linhas e colunas interdependentes (galeria de imagens, dashboard, layout de página com sidebar).
Os dois sistemas não são concorrentes — eles se complementam. É comum usar Grid para o layout macro da página e Flexbox dentro de cada célula do grid para organizar o conteúdo. Essa combinação oferece o melhor dos dois mundos: estrutura rígida no nível macro e flexibilidade no nível micro.
Para dominar ambos, a prática é fundamental. Ferramentas como o Firefox DevTools têm suporte visual para inspecionar grids e flex containers. Sites como CSS-Tricks Flexbox Guide, Grid by Example e o jogo Flexbox Froggy são recursos excelentes para fixar o conhecimento de forma interativa.`,
    },
    {
        id: 5,
        title: "Node.js e Express: criando APIs REST do zero",
        slug: "nodejs-express-api-rest",
        author: "Juliana Ramos",
        date: "2026-02-27",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop",
        content:
            "Node.js permite executar JavaScript no servidor, e o Express é o framework mais popular para criar APIs. Neste tutorial construímos uma API REST completa com rotas, middlewares, validação de dados e conexão com banco de dados MongoDB, seguindo boas práticas de organização de código.",
        description: `Node.js é um ambiente de execução JavaScript criado sobre o motor V8 do Chrome, que permite rodar JavaScript fora do navegador. Sua arquitetura baseada em eventos e I/O não bloqueante o torna extremamente eficiente para aplicações que precisam lidar com muitas conexões simultâneas, como APIs e serviços de tempo real.
O Express.js é um framework minimalista para Node.js que fornece um conjunto de funcionalidades para criar aplicações web e APIs. Ele não impõe uma estrutura rígida, deixando o desenvolvedor livre para organizar o projeto da forma que preferir. Essa flexibilidade, aliada à sua simplicidade, fez do Express o framework Node.js mais adotado pela comunidade.
Uma API REST segue um conjunto de princípios arquiteturais que definem como recursos são identificados por URLs, como as operações são mapeadas para verbos HTTP (GET, POST, PUT, PATCH, DELETE) e como o servidor comunica o resultado através de status codes HTTP. Seguir esses princípios garante uma API previsível e fácil de consumir.
Os middlewares são funções que têm acesso ao objeto de requisição (req), ao objeto de resposta (res) e à próxima função na cadeia (next). Eles são usados para executar código transversal como autenticação, logging, parsing de JSON, tratamento de erros e CORS, mantendo as rotas limpas e focadas na lógica de negócio.
A validação de dados é crucial para a segurança de qualquer API. Bibliotecas como Zod, Joi ou Yup permitem definir schemas de validação declarativos que verificam o corpo das requisições antes de processá-las. Nunca confie em dados enviados pelo cliente sem validação — dados inválidos ou maliciosos podem causar erros inesperados ou vulnerabilidades.
A conexão com MongoDB é feita através do Mongoose, uma ODM (Object Document Mapper) que fornece uma camada de abstração com schemas tipados, validação embutida e métodos de consulta expressivos. Com o Mongoose, definimos models que representam as coleções do banco e realizam operações de CRUD de forma clara e orientada a objetos.
A organização do código é essencial para projetos que crescem. Uma estrutura comum separa o projeto em camadas: routes (definição das rotas), controllers (lógica de cada endpoint), services (regras de negócio), models (definições do banco de dados) e middlewares. Essa separação facilita testes, manutenção e a colaboração em equipe.
Para finalizar, é importante considerar segurança desde o início: use variáveis de ambiente para credenciais, implemente autenticação com JWT, adicione rate limiting para prevenir abusos, utilize helmet.js para configurar headers HTTP seguros e nunca exponha stack traces de erros em ambiente de produção.`,
    },
    {
        id: 6,
        title: "Git e GitHub: fluxo de trabalho profissional",
        slug: "git-github-fluxo-profissional",
        author: "Rafael Torres",
        date: "2026-03-08",
        image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&auto=format&fit=crop",
        content:
            "Dominar Git é essencial para qualquer desenvolvedor. Neste artigo exploramos o fluxo Gitflow, estratégias de branching, como escrever commits semânticos, resolver conflitos de merge, e aproveitar recursos do GitHub como Pull Requests, Actions e proteção de branches.",
        description: `Git é um sistema de controle de versão distribuído criado por Linus Torvalds em 2005. Ao contrário de sistemas centralizados, cada desenvolvedor possui uma cópia completa do repositório, incluindo todo o histórico. Isso permite trabalhar offline, criar branches instantaneamente e colaborar sem um ponto único de falha.
Os três estados fundamentais do Git são: working directory (onde você edita os arquivos), staging area (onde você prepara as mudanças para o próximo commit) e repository (onde os commits são armazenados permanentemente). Entender esse ciclo é fundamental para usar o Git com confiança e criar um histórico limpo e significativo.
O Gitflow é uma estratégia de branching que organiza o desenvolvimento em branches com propósitos definidos: main (código em produção), develop (integração de features), feature/* (novas funcionalidades), release/* (preparação de versões) e hotfix/* (correções urgentes em produção). Essa estrutura é especialmente útil em equipes que trabalham com releases planejadas.
Os commits semânticos seguem uma convenção de mensagem que descreve o tipo e o contexto da mudança: feat: adiciona login com Google, fix: corrige validação de email, docs: atualiza README. Além de tornar o histórico mais legível, commits semânticos são a base para ferramentas de geração automática de changelogs e versionamento semântico.
Os conflitos de merge ocorrem quando duas branches modificam a mesma parte de um arquivo de formas diferentes. O Git sinaliza os conflitos com marcadores no arquivo e cabe ao desenvolvedor resolver manualmente, escolhendo qual versão manter ou combinando as duas. Ferramentas visuais como VS Code e GitKraken facilitam esse processo.
No GitHub, os Pull Requests (PRs) são o mecanismo central de colaboração. Um PR propõe a fusão de uma branch em outra e abre espaço para revisão de código, discussão e aprovação antes que as mudanças sejam integradas. PRs bem escritos incluem uma descrição clara do que foi feito, por quê, e como testar as mudanças.
O GitHub Actions permite automatizar fluxos de trabalho diretamente no repositório. Com arquivos YAML na pasta .github/workflows/, é possível configurar pipelines de CI/CD que rodam testes automaticamente a cada push, fazem build da aplicação, verificam a qualidade do código com linters e realizam deploy para ambientes de homologação e produção.
A proteção de branches é uma funcionalidade do GitHub que impede pushes diretos para branches críticas como main. Com ela, é possível exigir que todo código passe por um PR, tenha um número mínimo de aprovações, e que todos os checks de CI estejam passando antes de ser mesclado — garantindo a qualidade e a estabilidade do código em produção.`,
    },
    {
        id: 7,
        title: "Testes no front-end com Vitest e React Testing Library",
        slug: "testes-frontend-vitest-rtl",
        author: "Patrícia Lima",
        date: "2026-03-19",
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop",
        content:
            "Escrever testes automatizados aumenta a confiabilidade do código e facilita refatorações. Aprenda a configurar Vitest em projetos Vite e Next.js, escrever testes unitários e de integração com React Testing Library, mockar dependências e atingir uma boa cobertura de código.",
        description: `Testes automatizados são uma das práticas mais importantes de engenharia de software. Eles permitem que o desenvolvedor refatore código com confiança, detecte regressões automaticamente e documente o comportamento esperado da aplicação de forma executável. Em projetos front-end, os testes garantem que a interface funciona corretamente do ponto de vista do usuário.
O Vitest é um framework de testes moderno criado pelo time do Vite. Ele é extremamente rápido graças ao uso do mesmo pipeline de transformação do Vite, oferece uma API compatível com Jest (facilitando a migração) e tem suporte nativo a TypeScript, ESM e importações de componentes React sem configuração adicional.
A pirâmide de testes sugere uma proporção ideal: muitos testes unitários (rápidos e isolados), alguns testes de integração (testam a colaboração entre módulos) e poucos testes end-to-end (testam o fluxo completo pelo navegador). Para front-end com React, a React Testing Library se encaixa na categoria de testes de integração, pois renderiza componentes reais.
A filosofia da React Testing Library é testar o comportamento, não a implementação. Em vez de verificar o estado interno de um componente ou chamar métodos diretamente, você interage com a interface como um usuário faria: busca elementos por texto, role ou label, clica em botões e verifica o resultado visível na tela. Isso torna os testes mais robustos a refatorações.
As queries da React Testing Library seguem uma hierarquia de preferência: getByRole (acessibilidade), getByLabelText (formulários), getByText (conteúdo visível) e data-testid como último recurso. Usar queries semânticas força o desenvolvedor a criar interfaces mais acessíveis como efeito colateral da escrita de bons testes.
O mock de dependências externas é essencial para isolar o componente sendo testado. O Vitest oferece vi.mock() para substituir módulos inteiros, vi.fn() para criar funções espias e vi.spyOn() para monitorar chamadas de métodos existentes. Para requisições HTTP, bibliotecas como MSW (Mock Service Worker) interceptam as chamadas na camada de rede, simulando respostas reais sem atingir APIs externas.
A cobertura de código é uma métrica que indica quais linhas, funções e branches do código foram exercitadas pelos testes. O Vitest gera relatórios de cobertura com o provider @vitest/coverage-v8 ou istanbul. Embora 100% de cobertura não garanta ausência de bugs, testes com cobertura alta reduzem significativamente o risco de regressões.
Para projetos Next.js, a configuração envolve algumas particularidades: é necessário configurar o ambiente de testes como jsdom, mockar módulos específicos do Next.js como next/navigation e next/image, e usar um setup file para configurar o jest-dom, que adiciona matchers como toBeInTheDocument() e toHaveTextContent() ao Vitest.`,
    },
    {
        id: 8,
        title: "Tailwind CSS: produtividade com utility-first CSS",
        slug: "tailwind-css-utility-first",
        author: "Diego Ferreira",
        date: "2026-03-30",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
        content:
            "Tailwind CSS é um framework CSS utility-first que permite estilizar componentes diretamente no HTML sem sair do arquivo. Neste artigo abordamos configuração, customização do tema, uso de variantes responsivas e modo dark, além de dicas para manter o código organizado em projetos grandes.",
        description: `Tailwind CSS é um framework CSS de baixo nível que fornece classes utilitárias de propósito único para construir qualquer design diretamente no markup. Em vez de componentes prontos como botões e modais, o Tailwind oferece classes como flex, pt-4, text-center e rotate-90, dando ao desenvolvedor controle total sobre o visual sem escrever CSS customizado.
A abordagem utility-first pode parecer estranha à primeira vista, pois o HTML fica cheio de classes. No entanto, ela elimina o problema clássico de nomear classes CSS, evita o crescimento descontrolado de folhas de estilo e garante que o estilo de um componente fique visível exatamente onde ele é usado — sem precisar alternar entre arquivos.
A configuração do Tailwind é feita no arquivo tailwind.config.js. Nele é possível customizar a paleta de cores, a escala tipográfica, os breakpoints, os espaçamentos e qualquer outro token de design. O Tailwind usa o sistema de design como fonte da verdade, garantindo consistência visual em todo o projeto sem esforço adicional.
O sistema de variantes responsivas usa prefixos como sm:, md:, lg: e xl: para aplicar estilos em breakpoints específicos. A abordagem é mobile-first: estilos sem prefixo se aplicam a todos os tamanhos, e os prefixos sobrescrevem em telas maiores. Isso torna o desenvolvimento responsivo muito mais direto e legível do que media queries tradicionais.
O modo dark é implementado com a variante dark:. Com a configuração mode: 'class' no tailwind.config.js, adicionar a classe dark ao elemento html habilita todos os estilos dark: definidos nos componentes. Isso facilita a implementação de um seletor de tema com JavaScript, armazenando a preferência no localStorage.
Para evitar classes repetidas em componentes reutilizáveis, o Tailwind recomenda extrair componentes no nível do framework (React, Vue, etc.) em vez de criar classes CSS compostas. Quando isso não é possível, a diretiva @apply no CSS permite criar classes semânticas que encapsulam várias utilities, mantendo a consistência com o sistema de design.
O Tailwind usa PurgeCSS (integrado como Content configuration) para remover classes não utilizadas do bundle de produção. Basta configurar os caminhos dos arquivos no campo content do tailwind.config.js, e o Tailwind analisa o código estaticamente para incluir apenas as classes que aparecem no projeto, resultando em arquivos CSS extremamente pequenos em produção.
Para equipes e projetos grandes, o plugin Prettier para Tailwind CSS organiza automaticamente as classes em uma ordem consistente, eliminando discussões sobre ordenação em code reviews. Plugins oficiais como @tailwindcss/forms, @tailwindcss/typography e @tailwindcss/aspect-ratio adicionam utilities especializadas para casos de uso comuns.`,
    },
    {
        id: 9,
        title: "Performance web: otimizando Core Web Vitals",
        slug: "performance-web-core-web-vitals",
        author: "Mariana Souza",
        date: "2026-04-10",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
        content:
            "Core Web Vitals (LCP, INP e CLS) são métricas usadas pelo Google para avaliar a experiência do usuário. Este artigo explica o que cada métrica representa, como medi-las com Lighthouse e PageSpeed Insights, e técnicas práticas de otimização como lazy loading, code splitting e otimização de imagens.",
        description: `Os Core Web Vitals são um conjunto de métricas definidas pelo Google que medem aspectos objetivos da experiência do usuário: velocidade de carregamento, responsividade à interação e estabilidade visual. Desde 2021, elas fazem parte dos sinais de ranking do Google, tornando a performance uma preocupação tanto de UX quanto de SEO.
O Largest Contentful Paint (LCP) mede o tempo até que o maior elemento de conteúdo visível na viewport seja renderizado. Idealmente deve ser inferior a 2,5 segundos. Os principais culpados por um LCP alto são imagens sem otimização, CSS e JavaScript bloqueantes de renderização, e servidores lentos com TTFB (Time to First Byte) elevado.
O Interaction to Next Paint (INP) substituiu o FID em 2024 e mede a latência de todas as interações do usuário durante a sessão, reportando o pior caso. Valores abaixo de 200ms são considerados bons. Tarefas longas no thread principal (long tasks) são a principal causa de INP alto, e podem ser detectadas com o Profiler do Chrome DevTools.
O Cumulative Layout Shift (CLS) quantifica a instabilidade visual da página — quanto o conteúdo se move inesperadamente enquanto carrega. Um CLS abaixo de 0,1 é considerado bom. As causas mais comuns são imagens e anúncios sem dimensões definidas, conteúdo injetado dinamicamente acima do conteúdo existente e fontes web que causam FOUT (Flash of Unstyled Text).
A otimização de imagens é uma das alavancas com maior impacto em performance. Formatos modernos como WebP e AVIF oferecem compressão superior ao JPEG e PNG. O atributo loading="lazy" adia o carregamento de imagens fora da viewport, e o atributo sizes combinado com srcset garante que o navegador baixe a versão adequada para cada resolução de tela.
O code splitting divide o bundle JavaScript em pedaços menores que são carregados sob demanda. No React, o React.lazy() combinado com Suspense permite importar componentes de forma assíncrona. No Next.js, o code splitting automático por página já está configurado, e o dynamic() oferece controle adicional para componentes pesados que não precisam estar no bundle inicial.
As fontes web podem causar impacto significativo no LCP e no CLS. Para mitigar, use font-display: swap para exibir texto imediatamente com a fonte de fallback, pré-carregue fontes críticas com link rel="preload", e utilize fontes variáveis quando possível para reduzir o número de arquivos. O Next.js oferece o módulo next/font que otimiza fontes automaticamente.
Para medir e monitorar a performance, o Lighthouse (disponível no Chrome DevTools e como CLI) fornece uma auditoria completa com pontuação e sugestões. O PageSpeed Insights usa dados reais de campo do Chrome User Experience Report (CrUX). Para monitoramento contínuo em produção, a biblioteca web-vitals permite coletar métricas reais dos usuários e enviá-las para ferramentas de analytics.`,
    },
    {
        id: 10,
        title: "Docker para desenvolvedores front-end",
        slug: "docker-para-desenvolvedores-frontend",
        author: "Lucas Barbosa",
        date: "2026-04-22",
        image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&auto=format&fit=crop",
        content:
            "Docker permite empacotar aplicações e suas dependências em contêineres portáteis. Neste guia mostramos como criar Dockerfiles para aplicações Next.js, usar docker-compose para orquestrar serviços, configurar ambientes de desenvolvimento e produção, e integrar Docker em pipelines de CI/CD.",
        description: `Docker é uma plataforma de containerização que permite empacotar uma aplicação junto com todas as suas dependências — runtime, bibliotecas e configurações — em uma unidade portátil chamada contêiner. Contêineres são isolados entre si e do sistema host, mas compartilham o kernel do sistema operacional, tornando-os muito mais leves que máquinas virtuais tradicionais.
O problema clássico de "funciona na minha máquina" é eliminado com Docker. Ao definir o ambiente de execução no Dockerfile, qualquer desenvolvedor ou servidor que execute a imagem terá exatamente o mesmo comportamento. Isso reduz drasticamente o tempo gasto em problemas de ambiente e facilita a integração de novos membros na equipe.
O Dockerfile é um arquivo de texto com instruções para construir uma imagem Docker. Para uma aplicação Next.js, um Dockerfile típico usa multi-stage builds: o primeiro estágio instala dependências e faz o build da aplicação, e o segundo estágio copia apenas os artefatos necessários para uma imagem base mínima, resultando em imagens de produção muito menores e mais seguras.
O .dockerignore funciona como o .gitignore para o Docker. Adicionar node_modules, .next, .git e outros arquivos desnecessários garante que o contexto de build enviado ao daemon do Docker seja pequeno, acelerando cada build significativamente. Ignorar node_modules é especialmente importante pois eles serão reinstalados dentro do contêiner.
O Docker Compose permite definir e orquestrar múltiplos serviços em um único arquivo YAML. Para um projeto front-end com backend e banco de dados, o docker-compose.yml descreve cada serviço, suas imagens, variáveis de ambiente, volumes e dependências. Com um único comando docker compose up, todo o ambiente de desenvolvimento é iniciado.
Os volumes são mecanismos para persistir dados além do ciclo de vida de um contêiner e para compartilhar arquivos entre o host e o contêiner. Em desenvolvimento, montar o código-fonte como volume (bind mount) permite hot reload: alterações no código são refletidas imediatamente dentro do contêiner sem precisar reconstruir a imagem.
As variáveis de ambiente são a forma padrão de configurar contêineres de acordo com o ambiente (desenvolvimento, staging, produção). No Docker Compose, elas podem ser definidas inline ou referenciadas de um arquivo .env. Nunca inclua segredos diretamente no Dockerfile ou imagem — use Docker Secrets ou serviços de gerenciamento de segredos em produção.
A integração com pipelines de CI/CD é um dos maiores benefícios do Docker. Em pipelines do GitHub Actions, GitLab CI ou Jenkins, a aplicação é construída como uma imagem Docker, testada no contêiner e depois publicada em um registro como Docker Hub ou Amazon ECR. O deployment em produção consiste em puxar a nova imagem e reiniciar o serviço, garantindo deploys reproduzíveis e reversíveis.`,
    },
];
