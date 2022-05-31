Feature: Criar usuario
    Como uma pessoa qualquer
    Desejo me registrar no sistema
    Para ter acesso as funcionalidades de lista de compras

Background: Acessa a tela de usuario para alteração de dados
    * def emailAleatorio = Date.now() + "@raro.com" 
    * def emailAleatorioExiste = Date.now() + "1@raro.com"
     * def payload = {name: "Amanda Rodrigues", email: "aar.amanda@gmail.com"}   
    Given url baseUrl
    And path "users"
    When request {"name": "pipoca","email": "#(emailAleatorioExiste)","password": "1234"}  
    And method post 
    And path "users" 
    When request {"name": "pipoca","email": "#(emailAleatorio)","password": "1234"}
    And method post 
    Given url baseUrl
    And path "auth/login"
    When request {"email":"#(emailAleatorio)","password": "1234"}
    And method post 
    * def token = response.session.token
Scenario: Registrar um novo usuário
    * def emailAleatorionew = Date.now() + "@raro.com"
    And path "users" 
    When request {"name": "pipoca","email": "#(emailAleatorionew)","password": "1234"}
    And method post
    Then status 201
    And match response contains { name: "pipoca", email: "#(emailAleatorionew)"}
Scenario: Registrar um novo usuário com email já existente   
    And path "users" 
    When request {"name": "pipoca","email": "#(emailAleatorioExiste)","password": "1234"}
    When method post
    Then status 422
    And match response == { error: "User already exists." }
Scenario: Registrar um novo usuário sem o nome
    And path "users" 
    And request { email: "#(payload.name)" }
    When method post
    Then status 400
Scenario: Registrar um novo usuário sem o email
    And path "users" 
    And request { }
    When method post
    Then status 400
Scenario: Registrar um novo usuário sem nome e o email
    And path "users" 
    And request { email: "#(payload.name)" }
    And request { }
    When method post
    Then status 400
Scenario: Não deve ser possível criar usuário sem email
    And path "users" 
    And request { email: "#(payload.email)" }
    When method post
    Then status 400
Scenario: Não deve ser possível criar usuário com email inválido
    And path "users" 
    And request { name: "Amanda Rodrigues", email: "aar.amandaemail.com" }
    When method post
    Then status 400 
Scenario: Não deve ser possível criar nome com mais de 100 caracteres
    And path "users" 
    And request { name: "amandaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", email: "fghij@email.com"}
    When method post
    Then status 400
Scenario: Não deve ser possível criar email com mais de 60 caracteres
    And path "users" 
    And request { name: "Amanda", email: "gabrielaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@email.com"}
    When method post
    Then status 400
Scenario: Registrar um usuário com menos de 4 caracteres no nome
    And path "users" 
    And request { name: "Jub", email: "jub@email.com"}
    When method post
    Then status 400  