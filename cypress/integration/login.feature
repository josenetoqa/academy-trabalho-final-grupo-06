Feature: Login
    Como um usuário com conta no sistema
    Desejo realizar meu acesso na aplicação
    Para conseguir utilizar os serviços do Lembra Compras.

Background: Cenario antes do teste
    Given acesso a pagina de Login  
Scenario: logar no sistema com e-mail existente e senha correta
    When informo os dados
        | email | romerito@raro.com |
        | senha | 123               |
    Then tenho acesso ao sistema
Scenario: logar no sistema com e-mail existente e senha incorreta
    When informo os dados
        | email | romerito@raro.com |
        | senha | 12345             |
    Then visualizo a mensagem de erro "E-mail ou senha incorretos."
Scenario: logar no sistema com e-mail não existente 
    When informo os dados
        | email | ro@raro.com |
        | senha | 1234        |
    Then visualizo a mensagem de erro "E-mail ou senha incorretos."
Scenario: logar no sistema com e-mail em branco 
    When informo os dados sem email
        | senha | 1234              |
    Then visualizo a mensagem de erro "Informe seu e-mail"
Scenario: logar no sistema com senha em branco 
    When informo os dados sem senha
        | email | ro@raro.com |
    Then visualizo a mensagem de erro "Informe sua senha"
Scenario: digitar e-mail invalido 
    When informo os dados
        | email | roeritoraro |
        | senha | 1234        |
    Then visualizo a mensagem de erro "Formato de e-mail inválido."



