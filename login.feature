Feature: Login
    Como um usuário com conta no sistema
    Desejo realizar meu acesso na aplicação
    Para conseguir utilizar os serviços do Lembra Compras.

Background: Base URL
    * def emailAleatorio = Date.now() + "@raro.com" 
    Given url baseUrl
    And path "users"
    When request {"name": "Romerito","email": "#(emailAleatorio)","password": "1234"}
    And method post 
    Given url baseUrl
    And path "auth/login"
    
    

Scenario: logar no sistema com e-mail existente e senha correta
    When request {"email": "#(emailAleatorio)","password": "1234"}
    And method post
    Then status 200


Scenario: logar no sistema com e-mail existente e senha incorreta
    When request {"email": "#(emailAleatorio)","password": "8888"}
    And method post 
    Then status 403
    And match response contains {"error": "Invalid email or password."}


Scenario: logar no sistema com e-mail não existente 
    When request {"email": "ro@raro.com","password": "1234"}
    And method post 
    Then status 403
    And match response contains {"error": "Invalid email or password."}


Scenario: logar no sistema com e-mail em branco 
    When request {"password": "1234"}
    And method post 
    Then status 400
    And match response contains {"error":"Bad request."}


Scenario: logar no sistema com senha em branco 
    When request {"email": "romerito@raro.com"}
    And method post 
    Then status 400
    And match response contains {"error":"Bad request."}

Scenario: digitar e-mail invalido 
    When request {"email": "romeritorarocom","password": "1234"}
    And method post 
    Then status 403
    And match response contains {"error":"Invalid email or password."}

