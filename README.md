# NLW Valoriza (Next Level week - 6ª edição) 🚀
[![nodejs-badge][nodejs-img]][nodejs]

[nodejs-img]: https://img.shields.io/badge/Node.js-v14.17-green
[nodejs]: js.org/en/

## Status do projeto:
🚧 Em andamento... 🚧

## Descrição 📌
Sistema para fazer elogio a outros usuários por meio de tags. 

--- 

## Tecnologias 💻
* [Node.js](https://nodejs.org/en/) - Baixe a versão recomendada LTS.
* [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) - Gerenciador de pacotes, similar ao npm do Node.js.
* [Express](https://expressjs.com/pt-br/) - Framework para desenvolver back-end com Node.js.
* [TypeScript](https://www.typescriptlang.org/) - É JavaScript com tipagem de dados e recursos adicionais, voltado ao lado servidor.
* [Beekeeper](https://www.beekeeperstudio.io/) - Gerenciador de Banco de Dados e editor de código SQL.
* [Insomnia](https://insomnia.rest/) - É um programa que testa as requisições de uma API(GET, POST, PUT, DELETE, PATCH, etc).

---

## Execução ✅
```bash

# Clone este repositório
$ git clone https://github.com/zthiago15/NLW-06

# Executar aplicação
$ yarn dev
```

O servidor vai se iniciar na porta :3000. Acesse no seu navegador a URL **http://localhost:3000/** + *rota*

## Rotas atuais do projeto: 
* `/test` -> Testando rota GET
* `/test-post` -> Testando rota POST
* `/users` -> Criar usuário

## Aula 1 - Litoff (Anotações 📝)

### Origem e funcionamento do Node.js
  Criado por Ryan Dahl, em 2009, pela necessidade de saber o progresso de seu upload, porém sempre precisar fazer novas requisições para saber a porcentagem do envio. Após pesquisas, Ryan percebeu que JavaScript aceita requisições assíncronas e iniciou o desenvolvimento do Node.js.
  Funcionamento: Usuários(lado cliente) fazem suas requisições(GET, POST, PUT, DELETE, etc), e a single thred de **event loop** do Node.js recebe essas requisições e as delega(repassa) para outras threads disponívies, dependendo do sistema, o número de threads disponíveis pode variar e as conecta a um banco de dados.
Sendo assim, não há bloqueio de requisições(Non-blocking IO), então podemos fazer várias requisições simultâneas.

### API(Application Programming Interface)
  É um modelo/padrão que temos nosso projeto para separar o sistema do lado cliente(HTML, CSS, JavaScript, frameworks, etc) do lado servidor(regras de negócio, conexão com Banco de Dados, autenticação, etc). Então, teremos as requisições(*request*) do usuário por meio de rotas e o servidor lhe retorna uma resposta(*response*) em formato JSON.
  
### Principais métodos HTTP 
* _GET_ -> seleciona dados;
* _POST_ -> cadastra um dado;
* _PUT_ -> editar um dado;
* _DELETE_ -> deleta um dado;
* _PATCH_ -> altera um dado específico.

Obs: Os navegadores suportam somente os métodos GET ou POST por algum formulário. 

### Comandos básicos:

#### Inicialização e download de dependências
* __yarn init -y__ -> inicializa *package.json* no seu projeto. *-y*, no final do comando, faz o cadastro dos dados de nome, versão, main e licença automaticamente.
* __yarn tsc --init__ -> inicializa o TS.
* __yarn tsc__ -> converte TS para JS para o Node.js executar. O Node.js não compreende o TypeScript.
* __yarn add typescript -D__ -> adiciona o TypeScript em mode de desenvolvimento, quando for pra produção, o código será convertido para JavaScript.
* __yarn add express__ -> adiciona o framework express no projeto.
* __yarn add @types/express -D__ -> baixa as tipagens do express em modo de desenvolvimento.
* __yarn add ts-node-dev -D__ -> essa biblioteca converte arquivos TS em JS automaticamente, para não ficar criando arquivos com a extensão *.js* toda vez que queremos executar o projeto.

#### Execução
* __yarn dev__ -> Uma forma curta para executar o servidor na porta 3000. Definimos o comando *dev* dentro de "scripts", no package.json. Essa propriedade recebe o comando: *ts-node-dev src/server.ts*. Com essa configuração, não precisamos digitar *yarn ts-node-dev src/server.ts* toda vez que executarmos o projeto, somente yarn dev, agilizando o desenvolvimento.

--- 

## Aula 2 - Maximun Speed (Anotações 📝)

### Tipos de parâmetros nas requisições(GET, POST, PUT, DELETE..)
* __Route params__ -> parâmetros dentro da rota. Ex: http://localhost:3000/livro/**69865498**
* __Query params__ -> filtro/pesquisa do usuário(parâmetro opcional). Ex: http://localhost:3000/jogo**?name=red-dead-redemption&price=100**
* __Body params__ -> são enviados dentro do corpo da requisição(POST, PUT e PATCH) como objeto dentro de um arquivo JSON.

### Formas de usar banco de dados no projeto:
* Inserir driver de um BD no projeto, porém temos que mexer com código SQL;
* [Knex.js](http://knexjs.org/): é um query builder(construtor de consultas).  Não precisamos mexer tanto com sintaxe SQL e tem integração com vários tipos de Banco de Dados(MySQL, SQLite3, Postgres, etc);
* [TypeORM(Object Relacional Mapper)](https://typeorm.io/#/): transforma objetos do código para entidade, assim o banco de dados compreende a sintaxe.

Obs: não é aconselhável usar SQLite com o projeto em produção por não ser tão robusto quando outros bancos. 

### Instalação 
* _yarn add typeorm reflect-metadata sqlite3_ -> baixa as 3 dependências de uma vez(). *reflect-metadata* nos permite adicionar os *decorators*(@) as classes e funções, lhes atribuindo um apelido.


### Migrations 
  É um controle de versionamento de código SQL. Mantem a versão mais recente dos códigos do Banco de dados, assim todo time usa a mesma versão. Nesse projeto, é usado o TypeORM Migrations.
  
* Documentação do TypeORM: https://typeorm.io/#/


### Comandos de migration:
* _yarn typeorm migration:create -n NameEntity_ -> cria um arquivo de uma entidade
* _yarn typeorm migration:run_-> cadastra a migration com os dados SQL digitados
* _yarn typeorm migration:revert_-> remove a última migration cadastrada


### Camadas do projeto:
* __Entity__ -> fica registrado as entidades que serão passadas pro banco
* __Repository__ -> responsável por fazer a comunicação entre a entidade e o BD.
* __Service__ -> as regras gerais do projeto, responsável pela autenticação, verificação, etc.
* __Controller__ -> Igual os métodos **request, response**. Nesse caso, o Controller recebe as informações do servidor e as passa para a camada Service.

Arquivo criado *routes.ts* -> arquivo onde ficarão as rotas que serão passadas para o Controller.

---
Licença MIT ©
