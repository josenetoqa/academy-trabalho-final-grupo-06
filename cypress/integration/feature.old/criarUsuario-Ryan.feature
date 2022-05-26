Feature: Criar Usuário
    Como uma pessoa qualquer
    Desejo me registrar no sistema
    Para ter acesso as funcionalidades de lista de compras

Scenario: Criar Usuário com sucesso
    Given que acessei o site "https://academy-lembra-compras.herokuapp.com/login"
    When clico no link Registre-se
    And preencho os campo Nome, E-mail, Senha e Confirmar Senha
    | Nome            | Pão de Queijo                 |
    | E-mail          | lendariopaodequeijo@email.com |
    | Senha           | 123321                        |
    | Confirmar senha | 123321                        |
    And clico em Registrar
    Then o sistema deve retonar uma mensagem de Usuário cadastrado com sucesso!
    | mensagemDoSistema | Usuário cadastrado com sucesso! |

Scenario: Criar usuário com confirmação de senha diferente
    Given que acessei o site "https://academy-lembra-compras.herokuapp.com/login"
    When clico no link Registre-se
    And preencho os campo Nome, E-mail, Senha e Confirmar Senha
    | Nome            | Pao com salame                |
    | E-mail          | paocomsalame@email.com        |
    | Senha           | 123321                        |
    | Confirmar senha | 123324                        |
    And clico em Registrar
    Then o sistema deve retonar uma mensagem de As senhas não conferem!
    | mensagemDoSistema | As senhas não conferem. |

Scenario: Criar usuário com email de forma inválida
    Given que acessei o site "https://academy-lembra-compras.herokuapp.com/login"
    When clico no link Registre-se
    And preencho os campo Nome, E-mail, Senha e Confirmar Senha
    | Nome            | Pão de Queijo                 |
    | E-mail          | lendariopaodequeijo2email.com |
    | Senha           | 123321                        |
    | Confirmar senha | 123321                        |
    And clico em Registrar
    Then o sistema deve retonar uma mensagem de Formato de e-mail inválido.
    | mensagemDoSistema | Formato de e-mail inválido. |

Scenario: Criar usuário com email ja existente
    Given que acessei o site "https://academy-lembra-compras.herokuapp.com/login"
    When clico no link Registre-se
    And preencho os campo Nome, E-mail, Senha e Confirmar Senha
    | Nome            | Pão de Sal                 |
    | E-mail          | lendariopaodequeijo@email.com |
    | Senha           | 123321                        |
    | Confirmar senha | 123321                        |
    And clico em Registrar
    Then o sistema deve retonar uma mensagem de que o email já está sendo utilizado
    | mensagemDoSistema | Este e-mail já é utilizado por outro usuário. |

Scenario: Criar usuario com mais de 100 caracteres no campo Nome
    Given que acessei o site "https://academy-lembra-compras.herokuapp.com/login"
    When clico no link Registre-se
    And preencho os campo Nome, E-mail, Senha e Confirmar Senha
    | Nome            | PaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijo                 |
    | E-mail          | salame@salame.com |
    | Senha           | 789987                        |
    | Confirmar senha | 789987                        |
    And clico em Registrar
    Then o sistema deve retonar uma mensagem de Informe no máximo 100 letras no seu nome
    | mensagemDoSistema | Informe no máximo 100 letras no seu nome |

Scenario: Criar usuário com mais de 60 caracteres no email
    Given que acessei o site "https://academy-lembra-compras.herokuapp.com/login"
    When clico no link Registre-se
    And preencho os campo Nome, E-mail, Senha e Confirmar Senha
    | Nome            | Pão de Queijo                 |
    | E-mail          | paodequeijopaodequeijopaodequeijopaodequeijopaodequeijopaodequeijo@email.com |
    | Senha           | 123321                        |
    | Confirmar senha | 123321                        |
    And clico em Registrar
    Then o sistema deve retonar uma mensagem de Informe no máximo 60 letras no seu email
    | mensagemDoSistema | Informe no máximo 60 letras no seu email |


    

    