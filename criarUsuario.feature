Feature: Criar usuario
    Como uma pessoa qualquer
    Desejo me registrar no sistema
    Para ter acesso as funcionalidades de lista de compras

    Background: Base url
        Given url "https://lista-compras-api.herokuapp.com/api/v1"
        And path "users"
        * def userName = "Amanda Rodrigues"
        * def userNameUpdate = "Amanda Rodrigues"
        * def payload = {name: "Amanda Rodrigues", email: "aar.amanda@gmail.com"}
    
    Scenario: Registrar um novo usuário
        * def pacoca = Date.now() + "@qualquer.com"
        And request { name: "pipoca", email: "#(pacoca)", password: "123456"}
        When method post 
        Then status 201
        And match response contains { name: "pipoca", email: "#(pacoca)"}
    
    Scenario: Registrar um novo usuário com email já existente   
        And request {name: "Amanda", email:"aar.amanda@email.com", password: "123456"}
        When method post
        Then status 422
        And match response == { error: "User already exists." }

    Scenario: Registrar um novo usuário sem o nome
        And request { email: "#payload.nome" }
        When method post
        Then status 400

    Scenario: Registrar um novo usuário sem o email
        And request { }
        When method post
        Then status 400

    Scenario: Registrar um novo usuário sem nome e o email
        And request { email: "#payload.nome" }
        And request { }
        When method post
        Then status 400
        
    Scenario: Não deve ser possível criar usuário sem email
        And request { email: "#(payload.email)" }
        When method post
        Then status 400

    Scenario: Não deve ser possível criar usuário com email inválido
        And request { name: "Amanda Rodrigues", email: "aar.amandaemail.com" }
        When method post
        Then status 400 

    Scenario: Não deve ser possível criar nome com mais de 100 caracteres
        And request { name: "amandaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", email: "fghij@email.com"}
        When method post
        Then status 400

    Scenario: Não deve ser possível criar email com mais de 60 caracteres
        And request { name: "Amanda", email: "gabrielaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa@email.com"}
        When method post
        Then status 400


    Scenario: Registrar um usuário com menos de 4 caracteres no nome
        And request { name: "Jub", email: "jub@email.com"}
        When method post
        Then status 400


