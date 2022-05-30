  Feature: Atualizar Usuario
    Como um adminstrador qualquer
    Desejo poder atualizar as informações de um usuário
    Para ter os dados atualizadas

    Background: Acessa a tela de usuario para alteração de dados
        Given url baseUrl
        And path "/users"
        And header X-JWT-Token = token
      
        Scenario: Atualizar Nome de um usuário com sucesso
            When request usuarioAleatorioPerfil
            And method put
            Then status 200
            
       
        Scenario: Atualizar Email de um usuário com sucesso
            When request emailAleatorioPerfil
            And method put
            Then status 200

        
        Scenario: Atualizar Nome e Email de um usuário com sucesso
            When request usuarioPerfil
            And method put
            Then status 200

        
        Scenario: Atualizar Email para um já em uso
            When request emailExistentePerfil
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