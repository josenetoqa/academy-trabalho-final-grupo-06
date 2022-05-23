Feature: Gestão de lista de compras
    Como um usuário com conta no sistema
    Desejo gerenciar uma lista de compras
    Para registrar os produtos que desejo comprar.

Background: Cenario antes do teste
    Given acessei a pagina
    When digitei o email para acesso
    And digitei a senha para acesso
    Then Clico em Entrar para conseguir acesso
    When for carregado as listas
    

Scenario: Apenas usuarios logados podem criar uma lista


Scenario: So deve ser possivel possuir uma lista ativa por vez
    When dou um nome para minha lista
    When cadastro um novo item na lista 
    And  seleciono a quantidade desse item
    When clico em salvar o item
    When clico em salvar a lista
    And e carregado a lista atual desse usúario 
    Then não deve ser possível cadastrar uma nova lista. 
Scenario: As listas devem ser compostas por uma descrição e por uma lista de itens que identificam os produtos a serem comprados
    When dou um nome para minha lista
    When cadastro um novo item na lista 
    And  seleciono a quantidade desse item
    When clico em salvar o item
    When clico em salvar a lista
    Then a criação da lista foi finaliza
Scenario: Os itens da lista possuem apenas nome e quantidade
    When dou um nome para minha lista
    When cadastro um novo item na lista 
    And  seleciono a quantidade desse item
    When clico em salvar o item
    When clico em salvar a lista
    Then a criação da lista foi finaliza
Scenario: Deve ser possível criar uma lista sem descrição, dado que pelo menos um item tenha sido adicionado
    When cadastro um novo item na lista 
    And  seleciono a quantidade desse item com o valor menor que 1
    When clico em salvar o item
    When clico em salvar a lista
Scenario: A quantidade mínima de um item na lista deve ser de 1 unidade
    When dou um nome para minha lista
    When cadastro um novo item na lista 
    And  seleciono a quantidade desse item com o valor menor que 1
    When clico em salvar o item
    When clico em salvar a lista
    Then vejo a mensagem de erro "insira um valor valido"
Scenario: A quantidade máxima de um item na lista deve ser de 1000 unidades
    When dou um nome para minha lista
    When cadastro um novo item na lista 
    And  seleciono a quantidade desse item com o valor maior que 1000
    When clico em salvar o item
    When clico em salvar a lista
    Then vejo a mensagem de erro "insira um valor valido"
Scenario: Se um item que já existe na lista sofrer uma nova tentativa de ser adicionado utilizando o mesmo nome, a quantidade do item deve ser acrescentada
    When dou um nome para minha lista
    When cadastro um novo item na lista 
    And  seleciono a quantidade desse item
    When clico em salvar o item
    When cadastro um novo item na lista com o mesmo nome utilizado anteriormente
    And  seleciono a quantidade desse item
    When clico em salvar o item
    When clico em salvar a lista
    Then foi possível adicionar o item 
Scenario: Ao atualizar a quantidade do item, a nova quantidade total atualizada deste item não deve ultrapassar de 1000 unidades

Scenario: O usuário deve poder marcar um item como concluído
    When dou um nome para minha lista
    When cadastro um novo item na lista 
    And  seleciono a quantidade desse item
    When clico em salvar o item
    When clico em salvar a lista
    Then devo conseguir marcar um intem como concluido
    Then o item deve ser 'riscado ao meio'
Scenario: O usuário pode finalizar a lista de compras. O status da lista não pode ser alterado após ter sido finalizada
    When dou um nome para minha lista
    When cadastro um novo item na lista 
    And  seleciono a quantidade desse item
    When clico em salvar o item
    When clico em salvar a lista
    And e carregado a lista atual desse usúario 
   
    |item    | quantidade|
    |        |           |
    |        |           |