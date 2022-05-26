@ignore
Feature: Hook
    @minhagata
    Scenario: Criar usuario no lembra compras
        * def tequila = "Pacoca" + Date.now()
        * def pacoca = Date.now() + "@qualquer.com"
        Given url "https://lista-compras-api.herokuapp.com/api/v1"
        And path "users"
        And request {name: "#(tequila)", email: "#(pacoca)"}
        When method post 

    