@ignore

@criarUsuario
Feature: Hook
    @minhagata
    Scenario: Criar usuario no lembra compras
        * def tequila = "Pacoca" + Date.now()
        * def pacoca = Date.now() + "@qualquer.com"
        Given url "https://lista-compras-api.herokuapp.com/api/v1"
        And path "users"
        And request {name: "#(tequila)", email: "#(pacoca)"}
        When method post 


@gestaoLista

Scenario: gestão de lista de compras
    * call read("hook.feature@login")
    * def payload = read("payloadUsuario.json")

    Given url baseUrl
    Given path "list"
    And header X-JWT-Token = payload.token
    And request { description: "Supermarket", items: [{ name: "Jose", amount: 1}]}
    When method post
    Then status 201