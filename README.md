
## Estrutura de pastas:

* /doc - Arquivos de documentação e planejamento
* /sql - Scripts e informações pertinentes ao banco de dados
* /src - Códigos-fonte
	* /api_admin - Back-end do módulo administrativo
	* /api_client - Back-end do módulo de operações/serviço
	* /fe_app - Front-end do aplicativo móvel
	* /fe_web - Front-end do site web

## Scripts:

  * Roda servidor: `yarn dev`
  * Roda modo debug: `yarn dev:debug`

## Extensões VSCode

* Dracula Official > Dracula
* Material Icon Theme
* Color Highlight
* Rocketseat ReactJS
* Rocketseat Reactive Native
* ESLint
* Prettier

## Dependencias

* yarn add sequelize
* yarn add sequelize-cli -D
* yarn add pg
* yarn add pg-hstore

## Resumo de modificacoes

* branch 'feature-criando-loader-de-models'
> 1. Criar arquivo 'database/index.js' que realize conexao com banco de dados postgres definido em config/database;
> 1. Carregar todos os models da aplicacao neste arquivo;

* branch 'feature-cadastro-de-usuarios'
> 1. Cria UserController (classe que exporta User)
> 1. Retorna erro caso e-mail ja exista na base de dados
> 1. Altera routes para usar UserController na rota /users

* branch 'feature-gerando-hash-da-senha'
> 1. Objetivo: gerar o hash da senha do usuario
> 1. Atual: ao cadastrar, enviamos o 'password_hash' diretamente
> 1. Objetivo especifico: usuario enviar apenas password e aplicacao gerar o hash
>> Dependencias:
>> `yarn add bcryptjs`

* branch 'feature/middleware-de-autenticacao.mp4'
> Objetivo: bloquear usuario a acessar algum tipo de rota caso ainda não esteja logado

* branch 'feature/update-do-usuario'
> Objetivo: permitir que usuario altere alguns campos de dados cadastrais

* branch 'amaralc/feature/validando-dados-de-entrada'
> Objetivo: validar dados de entrada no backend (definir informacoes obrigatorias e avaliar se dados sao coerentes)

