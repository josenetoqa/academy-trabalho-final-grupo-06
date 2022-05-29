@ignore
Feature: Hook
    @josefeliz
    Scenario: So deve ser possivel possuir uma lista ativa por vez
        * def vodka = "rum" + Date.now()
        * def rum = Date.now() + "@qualquer.com"
        Given url "https://lista-compras-api.herokuapp.com/api/v1"
        And path "users"
        And request {email: "#(vodka)", senha: "#(rum)"}
        When method post 
