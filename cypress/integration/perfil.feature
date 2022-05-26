Feature: Atualizar Usuario
    Como um usuário comum cadastrado no sistema
    Desejo atualizar minhas informações básicas
    Para manter meus dados atualizados no sistema.

    Background: Acessar a tela de usuario para alteração de dados
     Given acessei a tela de perfil

        @ignore
        Scenario: Atualizar Nome de um usuário com sucesso
            When atualizo as informações de nome para um nome valido
            And confirmo a operação
            Then visualizo a mensagem de sucesso
            And a operação é concluida com sucessoo

        @ignore
        Scenario: Atualizar Email de um usuário com sucesso
            When atualizo as informações de email para um email valido
            And confirmo a operação
            Then visualizo a mensagem de sucesso
            And a operação é concluida com sucessoo

        @ignore
        Scenario: Atualizar Nome e Email de um usuário com sucesso
            When atualizo as informações de nome para um nome valido
            And atualizo as informações de email para um email valido
            And confirmo a operação
            Then visualizo a mensagem de sucesso
            And a operação é concluida com sucessoo

        @ignore
        Scenario: Atualizar Email para um já em uso
            When atualizo as informações de email para um email já em uso
            And confirmo a operação
            Then visualizo a mensagem de erro
            And não é possivel concluir a operação

        @ignore
        Scenario: Atualizar o nome para um nome menor de 4 caracteres
            When  atualizo as informações de nome para um nome <4 caracteres
            And confirmo a operação
            Then visualizo a mensagem de erro
            And não é possivel concluir a operação

        @ignore
        Scenario: Atualizar o nome para um nome igual de 4 caracteres
            When  atualizo as informações de nome para um nome =4 caracteres
            And confirmo a operação
            Then visualizo a mensagem de sucesso
            And a operação é concluida com sucessoo

        @ignore
        Scenario: Atualizar Nome igual a 100 caracteres
            When atualizo as informações de nome para um nome =100 caracteres
            And confirmo a operação
            Then visualizo a mensagem de sucesso
            And a operação é concluida com sucessoo

        @ignore
        Scenario: Atualizar Nome maior que 100 caracteres
            When atualizo as informações de nome para um nome =101 caracteres
            And confirmo a operação
            Then visualizo a mensagem de erro
            And não é possivel concluir a operação

        @ignore
        Scenario: Atualizar Email igual a 60 caracteres
            When atualizo as informações de email para um email =60 caracteres
            And confirmo a operação
            Then visualizo a mensagem de sucesso
            And a operação é concluida com sucessoo
   
        @ignore
        Scenario: Atualizar Email maior que 60 caracteres
            When atualizo as informações de email para um email =61 caracteres
            And confirmo a operação
            Then visualizo a mensagem de erro
            And não é possivel concluir a operação

        @ignore
        Scenario: Atualizar o email sem o @
            When atualizo as informações de email para um email sem o @
            And confirmo a operação
            Then visualizo a mensagem de erro
            And não é possivel concluir a operação
            
        @ignore
        Scenario: Atualizar o email sem o .com
            When atualizo as informações de email para um email sem o .com
            And confirmo a operação
            Then visualizo a mensagem de erro
            And não é possivel concluir a operação

        @ignore
        Scenario: Atualizar o nome de usuario sem preenchimento do campo
            When apago as informações do nome
            And confirmo a operação
            Then visualizo a mensagem de erro
            And não é possivel concluir a operação                     
        
        @ignore
        Scenario: Atualizar o email de usuario sem preenchimento do campo
            When apago as informações do email
            And confirmo a operação
            Then visualizo a mensagem de erro
            And não é possivel concluir a operação

        @ignore
        Scenario: Atualizar o nome e email de usuario sem preenchimento do campo
            When apago as informações do nome e email
            And confirmo a operação
            Then visualizo a mensagem de erro
            And não é possivel concluir a operação

