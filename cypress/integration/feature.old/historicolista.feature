Feature: Histórico de lista de compras
    Como um usuário com conta no sistema
    Desejo consultar minhas últimas listas de compra
    Para visualizar minhas últimas compras

Background: Cenario antes do teste
    Given acessei a pagina
    When digitei o email para acesso
    And digitei a senha para acesso
    Then Clico em Entrar para conseguir acesso
    When for carregado as listas

Scenario: O usuário só deve visualizar as suas próprias listas

Scenario: O usuário precisa estar logado para visualizar seu histórico

Scenario: Apenas as últimas 10 listas mais recentes devem ser listadas no histórico
    Then clico no Historico para acessar a pagina
    When for carregado minhas listas
    Then verifico o tamanho da lista carregada

Scenario: O nome da lista e data de criação da mesma devem ser listados para o usuário
    Then clico no Historico para acessar a pagina
    When for carregado minhas listas
    Then verifico se o nome e data de criação são apresentados
Scenario: Deve ser possível consultar o nome e itens de uma lista após interagir com a lista no Histórico
    Then clico no Historico para acessar a pagina
    When for carregado minhas listas
    Then clico em uma lista 
    When a lista for carregada
    Then verifico se foi apresentado o nome e item da lista
