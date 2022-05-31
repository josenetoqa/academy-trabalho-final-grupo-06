Feature: Gestão de lista de compras
Como um usuário com conta no sistema
Desejo gerenciar uma lista de compras
Para registrar os produtos que desejo comprar.

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
@focus 
Scenario: Criar lista de compras com sucesso
    Given path "list"
    And header X-JWT-Token = token
    And request { description: "Supermercado", items: [{ name: "jose duarte", amount: 1}]}
    When method post
    Then status 201
    
Scenario: Adicionar um novo item na lista
    Given path "list"
    Given path "item"
    And header X-JWT-Token = token
    And request { name: "Avocado",amount: 1}
    When method post
    Then status 201

Scenario: criar lista de compras com quantidade menor que 1 de um determinado item
    * call read("hook.feature@login")
    * def payload = read("payloadUsuario.json")

    Given url baseUrl
    Given path "list"
    And header X-JWT-Token = token
    And request { description: "Supermercado", items: [{ name: "Jose duarte", amount: -1}]}
    When method post
    Then status 400

Scenario: criar lista de compras com quantidade maior que 1000 de um determinado item
    * call read("hook.feature@login")
    * def payload = read("payloadUsuario.json")

    Given url baseUrl
    Given path "list"
    And header X-JWT-Token = token
    And request { description: "Supermercado", items: [{ name: "Jose duarte", amount: 1001}]}
    When method post
    Then status 422

Scenario: Desativar uma lista de compras
    * call read("hook.feature@login")
    * def payload = read("payloadUsuario.json")
    Given url baseUrl
    Given path "list"
    And header X-JWT-Token = token
    When method patch
    Then status 204

Scenario: Retorna a lista atualmente ativa 
    * call read("hook.feature@login")
    * def payload = read("payloadUsuario.json")
    Given url baseUrl
    Given path "list"
    And header X-JWT-Token = token
    When method get
    Then status 200


