![banner](https://user-images.githubusercontent.com/61299540/123202984-020f5000-d48c-11eb-8c12-38af40aae04e.png)

# NLW Valoriza (Next Level week - 6ª edição) 🚀
[![nodejs-badge][nodejs-img]][nodejs]

[nodejs-img]: https://img.shields.io/badge/Node.js-v14.17-green
[nodejs]: js.org/en/

---

## Status do projeto:
🚧 Em andamento... 🚧


---

## Índice 📖
* __[Descrição](#description)__
* __[Tecnologias](#technologies)__
* __[Regras do projeto](#rules)__
* __Aulas__
  * __[Aula 1 - Criando projeto](#class1)__
  * __[Aula 2 - Criando estrutura de usuários](#class2)__
  * __[Aula 3 - Criando estrutura de tags](#class3)__
  * __[Aula 4 -  Criando estrutura de elogios](#class4)__

---

## Descrição 📌 <a name="description"></a>
Sistema para fazer elogio a outros usuários por meio de tags. 

--- 

## Tecnologias 💻 <a name="technologies"></a>
* [Node.js](https://nodejs.org/en/) - Baixe a versão recomendada LTS.
* [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) - Gerenciador de pacotes, similar ao npm do Node.js.
* [Express](https://expressjs.com/pt-br/) - Framework para desenvolver back-end com Node.js.
* [TypeScript](https://www.typescriptlang.org/) - É JavaScript com tipagem de dados e recursos adicionais, voltado ao lado servidor.
* [Beekeeper](https://www.beekeeperstudio.io/) - Gerenciador de Banco de Dados e editor de código SQL.
* [Insomnia](https://insomnia.rest/) - É um programa que testa as requisições de uma API(GET, POST, PUT, DELETE, PATCH, etc).

---

## Execução ✅ <a name="execution"></a>
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
* `/tags` -> Criar tag

### Regras do projeto <a name="rules"></a>

- Cadastro de usuário

- [x] Não é permitido cadastrar mais de um usuário com o mesmo em-mail

- [x] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

- [x] Não é permitido cadastrar tag sem nome

- [x] Não é permitido cadastrar mais de uma tag com o mesmo nome

- [x] Não é permitido o cadastro por usuários que não sejam administradores

- Cadastro de elogios
 
- [ ] Não é permitido um usuário cadastrar um elogio para si

- [ ] Não é permitido cadastrar elogios para usuários inválidos

- [ ] O usuário precisar estar autenticado na aplicação

## Aula 1 - Liftoff - Criando projeto (Anotações 📝) <a name="class1"></a>

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

## Aula 2 - Maximun Speed - Criando estrutura de usuários (Anotações 📝) <a name="class2"></a>

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

## Aula 3 - In Orbit - Criando estrutura de tags(Anotações 📝) <a name="class3"></a>

### Middleware
   Intercepta a nossa rota, ou seja, faz a **verificação** para ver se o usuário pode continuar para seu destino pela requisição que ele fez.
se não puder retornamos um Status Code com a mensagem do porquê. Então, o usaremos para tratar os erros ao invés de usar *try, catch* toda hora. 
No projeto, usamos para o seguinte caso: se o usuário tente acessar a rota para criar tags sem ser um admin, o middleware irá retornar um Erro Status 401: Unauthourized.

### Funções 

#### FindOne
   É uma função que seleciona, em sintaxe SQL, um parâmetro. Ex: __SELECT * FROM tags WHERE name = 'dado_passado';__

#### NextFunction 
   Uma função do express, irá levar o usuário para a página requisitada, caso o middleware permitir o acesso após a verificação.

### Comandos
* ___yarn add express-async-erros___ -> biblioteca para tratar erros assíncronos.

Obs: Estamos criando as classes de repositórios, mesmo sem usá-la, para quando utilizarmos seus métodos não precisarmos fazer muitas 
alterações no projeto, caso o colocassemos em outra camada.

## Aula 4 - Landing - Criando estrutura de elogios(Anotações 📝) <a name="class4"></a>

### JWT(Json Web Token) - O que é e como funciona
    É um padrão de token onde pegamos os dados de usuário pelas requisições(GET, POST, etc), fazer a verificação se
o usuário pode estar acessando aquela rota e autenticá-lo. Dessa forma, em vez de usar os dados de e-mail e senha toda hora, usamos o token. 
    É **codificado** em 3 partes, divididos por um ponto, classificados em:
* __Header__ -> tipo do token, algoritmo pra criptografar os dados e gerar o token;
* __Payload__ -> São propriedades de informações de usuário, como seu id, email, nome, etc. Então quando passamos os dados do *back* pro *front* ou vice-versa, os dados são encriptografados no envio e descriptografados no destino por alguma biblioteca feita para isso. Porém, não passaremos informações sensíveis como senha;
* __Verify Assignature__ -> Irá criar uma verificação de assinaruto concatenando(juntando) o *header* e o *payload*, convertendo-os com o base64 e os juntando com a chave que definimos para então validar e gerar o token.

### Instalação
* __*yarn add jsonwebtoken*__ -> instala sua bibloteca
* __*yarn add @types/jsonwebtoken -D*__ -> instala suas tipagens em ambiente de desenvolvimento;

### Criptografia
    Pra fazer a criptografia da senha, usaremos a lib(library ou biblioteca):

* __*yarn add bcryptjs*__ 
* __*yarn add @types/bcrypt*__ 

E importaremos seu método **hash()**, onde passamos a senha e o *salt* que é o tamanho da criptografia, por padrão
usamos 8. Dessa forma, recebemos a senha e a encriptografamos antes de ser salva no banco. Agora a senha não irá aparecer nos registros salvos.

### Autenticação
Vamos fazer a autenticação dentro da camada **Service** e vamos receber os dados de email e senha. Então, teremos 3 passos para fazer: 
* Verificar se email existe;
* Confirmar se a senha está correta;
* Gerar o token de autenticação: usaremos a função *sign* da biblioteca *jwc*, onde passamos os dados do *payload* e a chave de acesso que colocamos. 
Usamos o site [MD5 Hash Generator](https://www.md5hashgenerator.com/) para ter mais segurança. No site, digitamos um texto que irá ser convertido em um código MD5 hash e SHA1 hash, então podemos escolher um dos dois para ser a chave.

Obs: mesmo que o erro for no email ou na senha, é uma boa prática de segurança não responder exatamente onde está o erro. Pois caso uma pessoa mal-intencionada estiver acessando o sistema, ela irá saber o campo em que está o erro e atacar ali. Então, dizemos que ambos podem estar incorretos.

Dica: só usamos o *await* quando é retornado uma *Promise*.


---


Licença MIT ©
