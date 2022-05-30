Feature: Gestão de lista de compras
Como um usuário com conta no sistema
Desejo gerenciar uma lista de compras
Para registrar os produtos que desejo comprar.

Background: Base url
    Given url baseUrl
    Given path "list"
    * def userName = "José Duarte"
    * def userNameUpdate = "José Duarte"
    * def payload = {email: "jose@duarte.com", senha: "123456"}

Scenario: Criar lista de compras com sucesso
    And header X-JWT-Token = token
    And request { description: "Supermercado", items: [{ name: "jose duarte", amount: 1}]}
    When method post
    Then status 201
    
Scenario: Adicionar um novo item na lista
    Given path "item"
    And header X-JWT-Token = token
    And request { name: "Avocado",amount: 1}
    When method post
    Then status 201

Scenario: criar lista de compras com quantidade menor que 1 de um determinado item
    * call read("hook.feature@login")
    * def payload = read("payloadUsuario.json")

    Given url baseUrl
    And header X-JWT-Token = payload.token
    And request { description: "Supermercado", items: [{ name: "Jose duarte", amount: -1}]}
    When method post
    Then status 400

Scenario: criar lista de compras com quantidade maior que 1000 de um determinado item
    * call read("hook.feature@login")
    * def payload = read("payloadUsuario.json")

    Given url baseUrl
    And header X-JWT-Token = payload.token
    And request { description: "Supermercado", items: [{ name: "Jose duarte", amount: 1001}]}
    When method post
    Then status 400

Scenario: Desativar uma lista de compras
    * call read("hook.feature@login")
    * def payload = read("payloadUsuario.json")
    Given url baseUrl
    And header X-JWT-Token = payload.token
    When method patch
    Then status 204

Scenario: Retorna a lista atualmente ativa 
    * call read("hook.feature@login")
    * def payload = read("payloadUsuario.json")
    Given url baseUrl
    And header X-JWT-Token = payload.token
    When method get
    Then status 200


