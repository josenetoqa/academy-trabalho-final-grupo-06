Feature: Criar usuário
    Como uma pessoa qualquer
    Desejo me registrar no sistema
    Para ter acesso as funcionalidades de lista de compras

    Background: Acessar a tela de cadastrar
        Given acesso a tela principal
        And acesso a página de cadastrar através da opção Registre-se
        #@ignore
        Scenario: Registra um novo usuário
            When informo um nome válido
            | nome | Jujuba Princesa|
            And informo um email válido
            | email | jujuba@princesa.com |
            And Informo uma senha válida
            | senha | JujubaPrincesa |
            And Confirmo a senha digitada acima
            | senha | JujubaPrincesa |
            And confirmo o formulário através do botão Registrar
            Then visualizo a mensagem de sucesso
            | mensagem | Usuário criado com sucesso! |
        #@ignore
        Scenario: Registrar um novo usuário com email já existente
            When tenho um usuário cadastrado
            | nome  | Jujuba Princesa     |
            | email | jujuba@princesa.com |
            And confirmo o formulário através do botão Registrar
            And informo um nome válido
            | nome | Theo Pestinha |
            And informo um email já existente
            | email | jujuba@princesa.com |
            And confirmo o formulário através do botão Registrar
            Then visualizo a mensagem de erro
            | mensagem | Este e-mail já é utilizado por outro usuário. |
        #@ignore
        Scenario: Registrar um novo usuário sem o nome
            When informo um email válido
            | email | jujuba@princesa.com |
            And confirmo o formulário através do botão Registrar
            Then visualizo a mensagem de erro
            | mensagem | Informe seu nome. |
        #@ignore
        Scenario: Registrar um novo usuário sem o email
            When informo um nome válido
            | nome | Jujuba Princesa |
            And confirmo o formulário através do botão Registrar
            Then visualizo a mensagem de erro
            | mensagem | Informe seu e-mail. |
        #@ignore
        Scenario: Registrar um novo usuário sem o nome e email
            When confirmo o formulário através do botão Registrar
            Then visualizo as mensagens de erro
            | mensagem1 | Informe seu nome.   |
            | mensagem2 | Informe seu e-mail. |
        #@ignore
        Scenario: Registrar um novo usuário com email sem o @
            When informo um nome válido
            | nome | Jujuba Princesa |
            And confirmo o formulário através do botão Registrar
            And informo um email inválido
            | email | jujubaprincesa.com |
            And confirmo o formulário através do botão Registrar
            Then visualizo a mensagem de erro
            | mensagem | Formato de e-mail inválido. |
        #@ignore
        Scenario: Registrar um novo usuário com email sem o .com
            When informo um nome válido
            | nome | Jujuba Princesa |
            And informo um email inválido
            | email | jujuba@princesa |
            And confirmo o formulário através do botão Registrar
            Then visualizo a mensagem de errom
            | mensagem | Formato de e-mail inválido. |
        #@ignore
        Scenario: Registrar um usuário com mais de 100 caracteres no nome
            When informo um nome inválido
            | nome | JujubaPrincesaJujubaPrincesaJujubaPrincesaJujubaPrincesaJujubaPrincesaJujubaPrincesaJujubaPrincesaJuj |
            And informo um email válido
            | email | jujuba@princesa.com |
            And confirmo o formulário através do botão Registrar
            Then visualizo a mensagem de erro
            | mensagem | Informe no máximo 100 letras no seu nome. |
        #@ignore
        Scenario: Registrar um usuário com mais de 600 caracteres no email
            When informo um nome válido
            | nome | Jujuba Princesa |
            And informo um email inválido
            | email | JujubaJujubaJujubaJujubaJujubaJujubaJujubaJujuba@princesa.com |
            And confirmo o formulário através do botão Registrar
            Then visualizo a mensagem de erro
            | mensagem | Informe no máximo 100 caracteres. |
        #@ignore
        Scenario: Registrar um usuário com menos de 4 caracteres no nome
            When informo um nome inválido
            | nome | Jub |
            And informo um email válido
            | email | jujuba@princesa.com |
            And confirmo o formulário através do botão Registar
            Then visualizo a mensagem de erro
            | mensagem | Informe seu nome completo |
        #@ignore
        Scenario: Clicar na opção de "Voltar à página de login "
            When clico na opção voltar à pagina de login
            Then volto para a tela principal


