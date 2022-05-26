Feature: Login
    Como um usuário com conta no sistema
    Desejo realizar meu acesso na aplicação
    Para conseguir utilizar os serviços do Lembra Compras.

Background: Cenario antes do teste
    Given acessei a pagina
    

Scenario: logar no sistema com e-mail existente e senha correta
    When preencho o campo e-mail com um e-mail existente
    And preencho o campo senha com a senha correta
    When clico em Entrar
    Then tenho acesso ao sistema


Scenario: logar no sistema com e-mail existente e senha incorreta
    When preencho o campo e-mail com um e-mail existente
    And preencho o campo senha com a senha incorreta
    When clico em Entrar
    Then visualizo a mensagem "E-mail ou senha incorretos."


Scenario: logar no sistema com e-mail não existente 
    When preencho o campo e-mail com um e-mail existente
    And preencho o campo senha com uma senha qualquer
    When clico em Entrar
    Then visualizo a mensagem "E-mail ou senha incorretos."