Feature: Atualizar Usuario
    Como um usuário com conta no sistema
    Desejo atualizar minhas informações básicas
    Para manter meus dados atualizados no sistema.

    Background: Acessa a tela de usuario para alteração de dados
        Given acesso a tela principal
        And aciono o botão OPÇÕES no canto superior direito da tela
        And seleciono a opção PERFIL 

        #@ignore
        Scenario: Atualizar Nome de um usuário com sucesso
            When apago as infomações no campo NOME COMPLETO
            And insiro um NOME valido
            | nome | Guilherme Araujo |
            And aciono o botão CONFIRMAR ALTERAÇÕES
            Then visualizo a mensagem de alerta
            | Mensagem de alerta | Tem certeza que deseja alterar suas informações ? |
            When aciono o botão CONFIRMAR
            Then visualizo a mensagem de sucesso
            | Mensagem de Sucesso | Informações atualizadas com sucesso! |

        #@ignore
        Scenario: Atualizar Email de um usuário com sucesso
            When apago as infomações no campo E-MAIL
            And insiro um E-MAIL valido
            | email | ganso100@gmail.com |
            And aciono o botão CONFIRMAR ALTERAÇÕES
            Then visualizo a mensagem de alerta
            | Mensagem de alerta | Tem certeza que deseja alterar suas informações ? |
            When aciono o botão CONFIRMAR
            Then visualizo a mensagem de sucesso
            | Mensagem de Sucesso | Informações atualizadas com sucesso! |

        #@ignore
        Scenario: Atualizar Nome e Email de um usuário com sucesso
            When apago as infomações no campo NOME COMPLETO
            And insiro um NOME valido
            | nome | Guilherme Araujo |
            And apago as infomações no campo E-MAIL
            And insiro um E-MAIL valido
            | email | ganso100@gmail.com |
            And aciono o botão CONFIRMAR ALTERAÇÕES
            Then visualizo a mensagem de alerta
            | Mensagem de alerta | Tem certeza que deseja alterar suas informações ? |
            When aciono o botão CONFIRMAR
            Then visualizo a mensagem de sucesso
            | Mensagem de Sucesso | Informações atualizadas com sucesso! |

        #@ignore
        Scenario: Atualizar Email para um já em uso
            And apago as infomações no campo E-MAIL
            And insiro um E-MAIL já em uso
            | email | guilhermeteste@gmail.com |
            Then visualizo a mensagem de erro
            | Mensagem de erro | email já utilizado por outro usuário. |

        #@ignore
        Scenario: Atualizar nome maior que 100 caracteres
            And apago as infomações no campo NOME COMPLETO
            And insiro um NOME maior que 100 caracteres
            | nome | guilhermeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee |
            Then visualizo a mensagem de erro
            | Mensagem de erro | Informe no máximo 100 letras no seu nome |

        #@ignore
        Scenario: Atualizar email maior que 60 caracteres
            And apago as infomações no campo E-MAIL
            And insiro um email maior que 60 caracteres
            | email | guilhermeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee@gmail.com |
            Then visualizo a mensagem de erro
            | Mensagem de erro | Informe no máximo 60 caracteres |
