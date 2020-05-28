<h1 align="center">
  ## GrowthTech#Desafio - Backend
</h1>

<blockquote align="center">“Bom não é ser importante, o importante é ser bom”!</blockquote>

<p align="center">
  <img alt="challenge" src="https://img.shields.io/badge/challenge-%2304D361">

  <a href="https://github.com/carvalhoviniciusluiz">
    <img alt="Made by Vinicius Carvalho" src="https://img.shields.io/badge/made%20by-Vinicius%20Carvalho-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">
</p>

<p align="center">
  <a href="#rocket-sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#8ball-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#metal-como-usar-o-insomnia">Como usar o insomnia</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#loop-link-do-desafio">Link do desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <a href="https://insomnia.rest/run/?label=GrowthTech-Desafio&uri=https%3A%2F%2Fgithub.com%2Fcarvalhoviniciusluiz%2FGrowthTech-Desafio%2Fblob%2Fmaster%2Fbackend%2F.github%2FInsomnia_2020-05-27.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## :rocket: Sobre o projeto

Uma empresa deseja realizar um monitoramento de outros grupos empresariais em um site X para analisar seus posts. Sua tarefa é criar uma simples API que captura apenas os usuários (http://jsonplaceholder.typicode.com/users) os quais a empresa em que trabalham fazem parte de um grupo e exiba seus posts (http://jsonplaceholder.typicode.com/posts) unido do nome do funcionário e sua empresa. Além disso criar uma tela para facilitar a leitura desses posts.

- O backend obrigatoriamente precisa ser realizado com Express.js.
- O frontend obrigatoriamente precisa ser realizado com React.js.
- Apesar de bem simples, o projeto precisa estar pronto para produção.
- Sinta-se à vontade para adicionar mais features e criar uma UI maneira!

### **As ferramentas que você irá encontrar**

Aplicação criada do zero usando [Express.js](https://expressjs.com/pt-br/api.html), conta com as seguintes ferramentas:

- Nodemon;
- Express.js;
- Node-Fetch;
- Sucrase;

## :8ball: Instalação

Os próximos passos devem ser executados no terminal.

Baixando as dependências do sistema:

    yarn

Subindo um servidor de desenvolvimento:

    yarn dev

## :metal: Como usar o Insomnia

[Insomnia](https://insomnia.rest/download/) é uma ferramenta que facilita testes de api. Você pode importar as rotas do projeto clique no butão `Run in Insomnia` que fica localizado no topo da página para facilitar os seus testes.

### **Get all users**

Retorna somente usuários. Trabalha com os seguintes filtros:
  - `group-company-by`: Agrupa todos os usuário de uma determinada companhia [string];
  - `group-all-by`: Agrupa todos os usuário de uma grupo de companhias [array];

<p align="center">
  <img src="https://user-images.githubusercontent.com/22005684/83170552-1a773480-a0eb-11ea-85ae-e1cf91cd77bb.png" alt="Image 1" />
</p>

### **Get all posts by user**
Devolve todas as postagens de um usuário específico.

<p align="center">
  <img src="https://user-images.githubusercontent.com/22005684/83170574-2236d900-a0eb-11ea-858d-09a0cf2c91ce.png" alt="Image 2" />
</p>

__IMPORTANTE__: É possível a qualquer momento disparar os tests de api para produção, para isso, altere o ambiente insomnia de `dev` pra `prod`.

## :loop: Link do desafio

https://github.com/backend-br/vagas/issues/2461

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
