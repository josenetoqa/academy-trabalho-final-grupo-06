# Raro Academy Projeto Final


## Pre-requisitos

- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) (version 8 or greater)
- [Chrome](https://www.google.com/chrome/) Browser
- [Cypress](https://www.cypress.io/) (version 9.6.1 or greater)
- [Cucumber Pre Processor](https://www.npmjs.com/package/cypress-cucumber-preprocessor)
- [Karate](https://karatelabs.github.io/karate/)

> Para verificar a versão instalada do Node basta digitar `node -v` no terminal. O retorno será algo parecido com isso `v10.13.0`. Se não tiver o node instalado basta baixar no link acima

## Instalação

[Clone](https://help.github.com/articles/cloning-a-repository/) the project to your computer. Run `git clone https://github.com/joseneto-dev/academy-trabalho-final-grupo-06`

Dentro da pasta do projeto clonado, digite `npm i` ou `npm install`  para instalar as dependencias necessárias.

## BDD



___
## Testes funcionais e exploratórios

Para os testes funcionais e exploratórios utilizamos um board no Trello para que possamos realizar toda a documentação desses testes.

[Board Trello](https://trello.com/invite/b/dBIvX7q1/b5ff917c25a3543b1e1fb3c37fd95688/academy-trabalho-final-grupo-06)

- Ao acessar o board irá conseguir realizar o acesso como um membro do projeto
___
## Testes com Karate

Para realizar os testes via Karate utilizando o BDD em conjunto. 

Os testes .feature do karate podem ser encontrados na [pasta Src]

### Rodando os testes


___
## Teste via Cypress

 -  Para criação do cypress utilizamos o Cucumber pre processor podendo assim utilizar os BDD's criados para melhor utilização e patronização foi utilizado Page Objects.

 - Os arquivos referentes ao podem ser encontrados em:

    - [BDD](.cypress/integration) Dentro dessa pasta podem ser encontrados as features do BDD
    - [Page Objects](.cypress/support/pages)  Dentro dessa pasta podem ser encontrados os arquivos referentes aos PageObjects Utilizado
    - [Steps Definitions](.cypress/support/steps)  Dentro dessa pasta podem ser encontrados os arquivos referente aos Steps Definitions para integrar o Cucumber

### Rodando os testes

Dentro da pasta do projeto,  digite `npx cypress open ` para abrir o painel do cypress ou `npx cypress run ` caso queira rodar em modo headless. 
___

Made with 💜 by [Grupo 06] for The Raro Academy