Feature: Histórico de lista de compras
    Como um usuário com conta no sistema
    Desejo consultar minhas últimas listas de compra
    Para visualizar minhas últimas compras

Background: Acesso ao sistema
    Given que estou logado no sistema
    And acessei a tela de histórico de compras
    
  Scenario:  O usuário só deve visualizar as suas próprias listas
       Then o sistema apresenta as listas de compras realizadas
       Then deslogo da plataforma

   Scenario: O usuário precisa estar logado para visualizar seu histórico
   Then o sistema permite vizualizar meu histórico de compras 
   Then deslogo da plataforma

   Scenario: Apenas as últimas 10 listas mais recentes devem ser listadas no histórico
       Then o sistema apresenta 10 listas de compras recentes
       Then deslogo da plataforma

  Scenario: O nome da lista e data de criação devem ser listados para o usuário
      Then é possível vizualizar nome e data de criação da lista
      Then deslogo da plataforma
    
  Scenario: Deve ser possível consultar o nome e itens de uma lista após interagir com a lista no Histórico
      When seleciono uma lista
      Then o sistema permite consultar o nome e itens da lista
      Then deslogo da plataforma
