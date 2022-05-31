Feature: Histórico de lista de compras
    Como um usuário com conta no sistema
    Desejo consultar minhas últimas listas de compra
    Para visualizar minhas últimas compras

    Background: Acesso o historico de compras
        * def emailAleatorio = Date.now() + "@raro.com" 
         Given url baseUrl
        And path "users"
   When request {"name": "Romerito","email": "#(emailAleatorio)","password": "1234"}
        And method post 
        Given url baseUrl
        And path "auth/login"
        When request {"email":"#(emailAleatorio)","password": "1234"}
        And method post 
        * def token = response.session.token
        Given url baseUrl
        And path "list/history"
        And header X-JWT-Token = token
        
    
        Scenario: Histórico de listas
            And header X-JWT-Token = token
            When method get
            Then status 200
            And match response contains [{id: "#string", userId: "#string", description: "#string", active: false, createdAt: "#string", updatedAt: "#string" }]
            And match response == "#[10]"
        
        Scenario: inserir token inválido
            And header X-JWT-Token = "asfg"
            When method get
            Then status 401
            And match response contains {status: 401, message: "Invalid token."}

        Scenario: Encontra lista inativa por ID
            And header X-JWT-Token = token
            And path "0993dfe0-40bb-45dc-9d97-f85e6807f4bc"
            When method get
            Then status 200
            And match response contains {description: "#string", items: [ {id: "#string", listId: "#string", name: "#string", amount: 1, createdAt: "#string", updatedAt: "#string"}]}

        Scenario: Encontra lista inativa por ID com credenciais inválidas
            And header X-JWT-Token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZCI6IjkzMDc2YzliLWU1ZWQtNGM4Yy1hZDdkLWEwMTEzMmM5MmVmZSIsImlzX2FkbWluIjpmYWxzZSwiZW1haWwiOiJsZW5kYXJpb3Bhb2RlcXVlaWpvQGVtYWlsLmNvbSIsImRhdGVDcmVhdGVkIjoxNjUzOTQ5NjQwNzg2LCJpc3N1ZWQiOjE2NTM5NDk2NDA3ODYsImV4cGlyZXMiOjE2NTM5NTA1NDA3ODZ9.pIxbtas9D6xj6p0kYMiYnQMSvsuLpnzKoBZaIuIyrTaw34nMps1363qmT83dK_whjAx0GDN-uKosO7m-cTbDys"
            And path "0993dfe0-40bb-45dc-9d97-f85e6807f4bc"
            When method get
            Then status 401
            And match response contains {status:401, message :"Invalid token."}

        Scenario: Encontra lista inativa por ID
            And header X-JWT-Token = token
            And path "0993dfe0-40bb-45dc-9d97-f85e6807f4ba"
            When method get
            Then status 404
            And match response contains {error: "List not found."}
