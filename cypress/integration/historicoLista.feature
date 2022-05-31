Feature: Histórico de lista de compras
    Como um usuário com conta no sistema
    Desejo consultar minhas últimas listas de compra
    Para visualizar minhas últimas compras

Background: Acesso ao sistema
    Given acessei a pagina da aplicacao
    
Scenario: Registrar um novo usuário
    Given acesso a tela principal
    When informo os dados necessarios para registro de um usuario aleatorio
        | nome           | Juba Princesa  |
        | senha          | 123            |
        | confirmarSenha | 123            |

Scenario: Cadastrar Listas
    When realizo o cadastro de uma nova lista 
    Then salvo a lista criada
    Then finalizo a lista
    When realizo o cadastro de uma nova lista 
    Then salvo a lista criada
    Then finalizo a lista
    Then deslogo da plataforma
Scenario:  O usuário só deve visualizar as suas próprias listas
    When acessei a tela de histórico de compras
    Then o sistema apresenta as listas de compras realizadas
    Then deslogo da plataforma
Scenario: O usuário precisa estar logado para visualizar seu histórico
    When acessei a tela de histórico de compras
    Then o sistema permite vizualizar meu histórico de compras 
    Then deslogo da plataforma
Scenario: Apenas as últimas 10 listas mais recentes devem ser listadas no histórico
    When acessei a tela de histórico de compras
    Then o sistema apresenta 10 listas de compras recentes
    Then deslogo da plataforma
Scenario: O nome da lista e data de criação devem ser listados para o usuário
    When acessei a tela de histórico de compras
    Then é possível vizualizar nome e data de criação da lista
    Then deslogo da plataforma
Scenario: Deve ser possível consultar o nome e itens de uma lista após interagir com a lista no Histórico
    When acessei a tela de histórico de compras
    When seleciono uma lista
    Then o sistema permite consultar o nome e itens da lista
    Then deslogo da plataforma
