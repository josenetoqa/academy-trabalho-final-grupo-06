  Feature: Atualizar Usuario
    Como um adminstrador qualquer
    Desejo poder atualizar as informações de um usuário
    Para ter os dados atualizadas

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
        Given url baseUrl
        And path "/users"
        And header X-JWT-Token = token
      
        Scenario: Atualizar Nome de um usuário com sucesso
            When request {"name": "Romerito2","email": "#(emailAleatorio)"}
            And method put
            Then status 200
            
       
        Scenario: Atualizar Email de um usuário com sucesso
            When request {"name": "Romerito2","email": "#('romerito'+emailAleatorio)"}
            And method put
            Then status 200

        
        Scenario: Atualizar Nome e Email de um usuário com sucesso
            When request {"name": "Romerito3","email": "#('romerito3'+emailAleatorio)"}
            And method put
            Then status 200

        
        Scenario: Atualizar Email para um já em uso
            When request {"name": "Romerito2","email": "#(emailAleatorioExiste)"}
            And method put
            Then status 422
            And match response contains {"error": "E-mail already in use."}

        
        Scenario: Atualizar o nome para um nome menor de 4 caracteres
            When request nomeMenor4
            And method put
            Then status 400
            And match response contains {"error": "Bad request."}

      
        Scenario: Atualizar Nome igual a 100 caracteres
            When request nomeIgual100
            And method put
            Then status 200
           

        
        Scenario: Atualizar Nome maior que 100 caracteres
            When request nomeMaior100
            And method put
            Then status 400
           

       
        Scenario: Atualizar Email igual a 60 caracteres
            When request emailIgual60
            And method put
            Then status 200
            
        
        Scenario: Atualizar Email maior que 60 caracteres
            When request emailMaior60
            And method put
            Then status 400
        
        Scenario: Atualizar o email sem o @
            When request emailSemA
            And method put
            Then status 400
            And match response contains {"error": "Bad request."}

            
        
        Scenario: Atualizar o email sem o .com
            When request emailSemCom
            And method put
            Then status 400
            And match response contains {"error": "Bad request."}

        
        Scenario: Atualizar o nome de usuario sem preenchimento do campo
            When request nomeEmBranco
            And method put
            Then status 400
            And match response contains {"error": "Bad request."}                     
        
        
        Scenario: Atualizar o email de usuario sem preenchimento do campo
            When request emailEmBranco
            And method put
            Then status 400
            And match response contains {"error": "Bad request."}  

        
        Scenario: Atualizar o nome e email de usuario sem preenchimento do campo
            When request NomeEemailEmBranco
            And method put
            Then status 400
            And match response contains {"error": "Bad request."}  