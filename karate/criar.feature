Feature: Criar usuario
Como uma pessoa qualquer
Desejo me registrar no sistema
Para ter acesso as funcionalidades de lista de compras

Background: Acessar a tela de cadastrar de um novo usuario
    Given acesso a tela principal

    Scenario: Registrar um novo usuário
        When informo os dados necessarios para registro de um novo usuario
        | nome           | Juba Princesa    |
        | email          | jujba11@princesa.com |
        | senha          | JujubaPrincesa      |
        | confirmarSenha | JujubaPrincesa      |
        Then será permitido acesso ao sistema

    Scenario: Registrar um novo usuário com email já existente
        When informo os dados necessarios para registro de um novo usuario
        | nome           | Theo Pestinha       |
        | email          | jujba@princesa.com |
        | senha          | Theo1234            |
        | confirmarSenha | Theo1234            |
        Then visualizo a mensagem de erro

    Scenario: Registrar um novo usuário sem o nome
        When informo os dados necessarios para registro de um novo usuario sem nome
        | email          | jujuba@princesa.com |
        | senha          | JujubaPrincesa      |
        | confirmarSenha | JujubaPrincesa      |
        Then visualizo a mensagem de erro sem nome

    Scenario: Registrar um novo usuário sem o email
        When informo os dados necessarios para registro de um novo usuario sem email
        | nome           | Jujuba Princesa     |
        | senha          | JujubaPrincesa      |
        | confirmarSenha | JujubaPrincesa      |
        Then visualizo a mensagem de erro sem email

    Scenario: Registrar um novo usuário sem o nome e email
        When informo os dados necessarios para registro de um novo usuario sem o nome e email
        | senha          | JujubaPrincesa      |
        | confirmarSenha | JujubaPrincesa      |
        Then visualizo a mensagem de erro sem o nome e email

    Scenario: Registrar um novo usuário com email sem o @
        When informo os dados necessarios para registro de um novo usuario
        | nome           | Jujuba Princesa     |
        | email          | jujubaprincesa.com  |
        | senha          | JujubaPrincesa      |
        | confirmarSenha | JujubaPrincesa      |
        Then visualizo a mensagem de erro email invalido

    Scenario: Registrar um novo usuário com email sem o .com
        When informo os dados necessarios para registro de um novo usuario
        | nome           | Jujuba Princesa     |
        | email          | jujuba@princesa     |
        | senha          | JujubaPrincesa      |
        | confirmarSenha | JujubaPrincesa      |
        Then visualizo a mensagem de erro email invalido

    Scenario: Registrar um usuário com mais de 100 caracteres no nome
        When informo os dados necessarios para registro de um novo usuario
        | nome | JujubaPrincesaJujubaPrincesaJujubaPrincesaJujubaPrincesaJujubaPrincesaJujubaPrincesaJujubaPrincesaJuj |
        | email          | jujuba@princesa.com    |
        | senha          | JujubaPrincesa      |
        | confirmarSenha | JujubaPrincesa      |
        Then visualizo a mensagem de erro de tamanho invalido

    Scenario: Registrar um usuário com mais de 60 caracteres no email
        When informo os dados necessarios para registro de um novo usuario
        | nome           | Jujuba Princesa     |
        | email | teoteoteoteoteoteoteoteoteoteoteoteoteoteoteoteoteoteoteoteoteoteo@princesa.com |
        | senha          | JujubaPrincesa      |
        | confirmarSenha | JujubaPrincesa      |
        Then visualizo a mensagem de erro email maior que o permitido

    Scenario: Registrar um usuário com menos de 4 caracteres no nome
        When informo os dados necessarios para registro de um novo usuario
        | nome           | Jub                 |
        | email          | jujuba@princesa.com |
        | senha          | JujubaPrincesa      |
        | confirmarSenha | JujubaPrincesa      |           
        Then visualizo a mensagem de erro de nome invalido

    Scenario: Clicar na opção de "Voltar à página de login "
        When clico na opção voltar à pagina de login
        Then volto para a tela principal
