# NLW Valoriza (Next Level week - 6ª edição) 🚀
[![nodejs-badge][nodejs-img]][nodejs]

[nodejs-img]: https://img.shields.io/badge/Node.js-14.17-green
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

O servidor vai se iniciar na porta :3000. Acesse no seu navegador a URL **http://localhost:3000/** +

## Rotas atuais do projeto: 
`/test` -> Testando rota GET
`/test-post` -> Testando rota POST

## Anotações 📝

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


---
Licença MIT ©
