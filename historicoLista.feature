Feature: Histórico de lista de compras
    Como um usuário com conta no sistema
    Desejo consultar minhas últimas listas de compra
    Para visualizar minhas últimas compras

Background: Acessa a tela de usuario para alteração de dados
        * def emailAleatorio = Date.now() + "@raro.com" 
        * def emailAleatorioExiste = Date.now() + "1@raro.com"   
        Given url baseUrl
        And path "users"
        When request {"name": "Romerito","email": "#(emailAleatorioExiste)","password": "1234"}  
        And method post 
        And path "users" 
        When request {"name": "Romerito","email": "#(emailAleatorio)","password": "1234"}
        And method post 
        Given url baseUrl
        And path "auth/login"
        When request {"email":"#(emailAleatorio)","password": "1234"}
        And method post 
        * def token = response.session.token
        Given path "list"
        And header X-JWT-Token = token
        When request { description: "Supermercado", items: [{ name: "jose duarte", amount: 1}]}
        And method post
        
    
        Scenario: Histórico de listas
            And path "list/history"
            And header X-JWT-Token = token
            When method get
            Then status 200
            And match response[].tags[].id =="#present"
            And match response[].tags[].userId =="#present"
            And match response[].tags[].description =="#present"
            And match response[].tags[].createdAt   =="#present"
            And match response[].tags[].updatedAt =="#present"
            
        
        Scenario: inserir token inválido
            And path "list/history"
            And header X-JWT-Token = "asfg"
            When method get
            Then status 401
            And match response contains {status: 401, message: "Invalid token."}
@focus 
        Scenario: Encontra lista inativa por ID
            Given path "list"
            And header X-JWT-Token = token
            When method get
            * def idlist = response.listId
            And path "list/history"
            And header X-JWT-Token = token
            And path idlist
            When method get
            Then status 200
            And match response[].tags[].id =="#present"
            And match response[].tags[].userId =="#present"
            And match response[].tags[].description =="#present"
            And match response[].tags[].createdAt   =="#present"
            And match response[].tags[].updatedAt =="#present"

        Scenario: Encontra lista inativa por ID com credenciais inválidas
            And path "list/history"
            And header X-JWT-Token = "1"
            And path "0993dfe0-40bb-45dc-9d97-f85e6807f4ba"
            When method get
            Then status 401
            And match response contains {status:401, message :"Invalid token."}

        Scenario: Encontra lista inativa por ID
            And path "list/history"
            And header X-JWT-Token = token
            And path "0993dfe0-40bb-45dc-9d97-f85e6807f4ba"
            When method get
            Then status 404
            And match response contains {error: "List not found."}
