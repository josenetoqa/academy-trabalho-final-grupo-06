  Feature: Atualizar Usuario
    Como um adminstrador qualquer
    Desejo poder atualizar as informações de um usuário
    Para ter os dados atualizadas


        #@ignore
        Scenario: Atualizar Nome de um usuário com sucesso
            Given acessei a tela de perfil
            When atualizo as informações de nome para um nome valido
            And confirmo a operação
            Then visualizo a mensagem de sucesso
            
        #@ignore
        Scenario: Atualizar Email de um usuário com sucesso
            Given acessei a tela de perfil
            When atualizo as informações de email para um email valido
            And confirmo a operação
            Then visualizo a mensagem de sucesso
            
        #@ignore
        Scenario: Atualizar Nome e Email de um usuário com sucesso
            Given acessei a tela de perfil
            When atualizo as informações de nome e email
            And confirmo a operação
            Then visualizo a mensagem de sucesso

        #@ignore
        Scenario: Atualizar o nome para um nome igual de 4 caracteres
            Given acessei a tela de perfil
            When atualizo as informações de nome para um nome =4 caracteres
            And confirmo a operação
            Then visualizo a mensagem de sucesso
            

        #@ignore
        Scenario: Atualizar Nome igual a 100 caracteres
            Given acessei a tela de perfil
            When atualizo as informações de nome para um nome =100 caracteres
            And confirmo a operação
            Then visualizo a mensagem de sucesso
            

        #@ignore
        Scenario: Atualizar Email igual a 60 caracteres
            Given acessei a tela de perfil
            When atualizo as informações de email para um email =60 caracteres
            And confirmo a operação
            Then visualizo a mensagem de sucesso
            

        #@ignore
        Scenario: Atualizar Email para um já em uso
            Given acessei a tela de perfil
            When atualizo as informações de email para um email já em uso
            Then visualizo a mensagem email já em uso
            
        #@ignore
        Scenario: Atualizar o nome para um nome menor de 4 caracteres
            Given efetuei logout do sistema
            And acessei a tela de perfil        
            When atualizo as informações de nome para um nome <4 caracteres
            And tento confirmar a operação
            Then visualizo a mensagem de alerta
            
        #@ignore
        Scenario: Atualizar Nome maior que 100 caracteres
            Given efetuei logout do sistema
            And acessei a tela de perfil        
            When atualizo as informações de nome para um nome =101 caracteres
            And tento confirmar a operação
            Then visualizo a mensagem informando o erro
   
        #@ignore
        Scenario: Atualizar Email maior que 60 caracteres
            Given efetuei logout do sistema
            And acessei a tela de perfil        
            When atualizo as informações de email para um email =61 caracteres
            Then visualizo a mensagem de erro de email
            

        #@ignore
        Scenario: Atualizar o email sem o @
            Given efetuei logout do sistema
            And acessei a tela de perfil        
            When atualizo as informações de email para um email sem o @
            And tento confirmar a operação
            Then visualizo a mensagem de erro de alteração
            
            
        #@ignore
        Scenario: Atualizar o email sem o .com
            Given efetuei logout do sistema
            And acessei a tela de perfil        
            When atualizo as informações de email para um email sem o .com
            And tento confirmar a operação
            Then visualizo a mensagem de erro de alteração
           

        #@ignore
        Scenario: Atualizar o nome de usuario sem preenchimento do campo
            Given efetuei logout do sistema
            And acessei a tela de perfil        
            When limpo as informações do campo nome
            And tento confirmar a operação
            Then visualizo a mensagem de campo nome sem preenchimento
                             
        
        #@ignore
        Scenario: Atualizar o email de usuario sem preenchimento do campo
            Given efetuei logout do sistema
            And acessei a tela de perfil        
            When limpo as informações do campo email
            And tento confirmar a operação
            Then visualizo a mensagem de campo email sem preenchimento
            

