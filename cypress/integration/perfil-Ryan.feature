Feature: Perfil de usuário
    Como um usuário com conta no sistema
    Desejo atualizar minhas informações básicas
    Para manter meus dados atualizados no sistema.

Scenario: Atualizar informações de usuário com sucesso!
    Given que acessei o site "https://academy-lembra-compras.herokuapp.com/login"
    And estou logado no sistema
    When clico na configuração
    And depois clico em Perfil
    And altero as informações do campo Nome completo e E-mail
    | Nome | Pão Com Salame           |
    | E-mail | paocomsalame@email.com |
    And clico em Confirmar alterações 
    And clico novamente em confirmar
    Then o sistema deverá apresentar uma mensagem de Informações atualizadas com sucesso!
    | mensagemDeSistema | Informações atualizadas com sucesso! |
    
Scenario: Atualizar usuário com e-mail já utilizado
    Given que acessei o site "https://academy-lembra-compras.herokuapp.com/login"
    And estou logado no sistema
    When clico na configuração
    And depois clico em Perfil
    And altero as informações do campo Nome completo e E-mail
    | Nome | Pão Com Salame           |
    | E-mail | paodoce@email.com |
    And clico em Confirmar alterações 
    And clico novamente em confirmar
    Then o sistema deverá apresentar uma mensagem de email ja está em uso
    | mensagemDeSistema | Email ja está em uso |

Scenario: Atualizar usuário com mais de 100 caracteres no Nome
    Given que acessei o site "https://academy-lembra-compras.herokuapp.com/login"
    And estou logado no sistema
    When clico no Menu
    And depois clico em Perfil
    And altero as informações do campo Nome completo e E-mail
    | Nome |   PaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijoPaodequeijo        |
    | E-mail | paocomsalame@email.com |
    And clico em Confirmar alterações 
    And clico novamente em confirmar
    Then o sistema deverá apresentar uma mensagem de Informe no máximo 100 letras no seu nome
    | mensagemDeSistema | Informe no máximo 100 letras no seu nome |

Scenario: Atualizar usuário com mais de 60 caracteres no Email
    Given que acessei o site "https://academy-lembra-compras.herokuapp.com/login"
    And estou logado no sistema
    When clico na configuração
    And depois clico em Perfil
    And altero as informações do campo Nome completo e E-mail
    | Nome | Pão Com Salame           |
    | E-mail | paocomsalame@email.com |
    And clico em Confirmar alterações 
    And clico novamente em confirmar
    Then o sistema deverá apresentar uma mensagem de Não foi possível atualizar suas informações
    | mensagemDeSistema | Não foi possível atualizar suas informações 🥺 |
