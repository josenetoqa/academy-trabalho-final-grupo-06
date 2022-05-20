Feature: Gestão de lista de compras
    Como um usuário com conta no sistema
    Desejo gerenciar uma lista de compras
    Para registrar os produtos que desejo comprar.

Background: Cenario antes do teste
    Given acessei a pagina
    When digitei o email para acesso
    And digitei a senha para acesso
    Then Clico em Entrar para conseguir acessar
    When for carregado as listas
    Then deve ser possivel visualizar apeanas uma lista 

Scenario: Apenas usuarios logados podem criar uma lista


Scenario: So deve ser possivel possuir uma lista ativa por vez
    
Scenario: As listas devem ser compostas por uma descrição e por uma lista de itens que identificam os produtos a serem comprados

Scenario: Os itens da lista possuem apenas nome e quantidade

Scenario: Deve ser possível criar uma lista sem descrição, dado que pelo menos um item tenha sido adicionado

Scenario: A quantidade mínima de um item na lista deve ser de 1 unidade

Scenario: A quantidade máxima de um item na lista deve ser de 1000 unidades

Scenario: Se um item que já existe na lista sofrer uma nova tentativa de ser adicionado utilizando o mesmo nome, a quantidade do item deve ser acrescentada

Scenario: Ao atualizar a quantidade do item, a nova quantidade total atualizada deste item não deve ultrapassar de 1000 unidades

Scenario: O usuário deve poder marcar um item como concluído

Scenario: O usuário pode finalizar a lista de compras. O status da lista não pode ser alterado após ter sido finalizada