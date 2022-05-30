Feature: Atualizar Usuario
    Como um adminstrador qualquer
    Desejo poder atualizar as informações de um usuário
    Para ter os dados atualizadas

    Background: Acessa a tela de usuario para alteração de dados
        Given acesso a tela principal
        And visualizo os usuarios cadastrados
        And aciono a opção ver detalhes em um determinado usuario

        #@ignore
        Scenario: Atualizar informações de um usuário com sucesso
            When clico em Editar
            And deleto o campo nome
            And altero o nome para um nome válido
            | nome | GuihGanso |
            And deleto o campo email
            And altero o email para um email válido
            | email | guihganso@raro.com.br |
            And aciono o botão Salvar
            Then visualizo a mensagem de sucesso
            | mensagem | Informações atualizadas com sucesso! |

        #@ignore
        Scenario: Atualizar um usuário sem o nome
            When clico em Editar
            And deleto o campo nome
            And aciono o botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | O campo nome é obrigatório. |

        #@ignore    
        Scenario: Atualizar um usuário sem o email
            When clico em Editar
            And deleto o campo email
            And aciono o botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | O campo e-mail é obrigatório. |

        #@ignore
        Scenario: Atualizar um usuário sem o nome e sem o email
            When clico em Editar
            And deleto o campo nome
            And deleto o campo email
            And aciono o botão Salvar
            Then visualizo as mensagens de erro
            | mensagem1 | O campo nome é obrigatório.   |
            | mensagem2 | O campo e-mail é obrigatório. |

        #@ignore
        Scenario: Atualizar usuário com email sem o @
            When clico em Editar
            And deleto o campo email
            And altero o email para um email válido
            | email | gansotest.com.br |
            And aciono o botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | Formato de e-mail inválido |

       # @ignore    
        Scenario: Atualizar usuário com email sem o .com
            When clico em Editar
            And deleto o campo email
            And altero o email para um email válido
            | email | guilherme@raro |
            And aciono o botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | Formato de e-mail inválido |

        #@ignore
        Scenario: Atualizar um usuário com mais de 100 caracteres no nome
            When clico em Editar
            And deleto o campo nome
            And altero o nome para um nome válido
            | nome | Guilhermeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee |
            And aciono o botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | Informe no máximo 100 caracteres para o nome |

        #@ignore
        Scenario: Atualizar um usuário com mais de 60 caracteres no email
            When clico em Editar
            And deleto o campo email
            And altero o email para um email válido
            | email | guilhermeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee@raro.com.br |
            And aciono o botão Salvar
            Then visualizo a mensagem de erro
            | mensagem | Informe no máximo 60 caracteres para o e-mail |

        #@ignore
        Scenario: Cancelar a ação de atualizar o usuário
            When clico na opção Editar
            And clico na opção Cancelar
            Then vizualizo o botão de Editar novamente

        #@ignore    
        Scenario: Clicar na opção de "voltar"
            When clico na opção Voltar
            Then retorno para a tela principal

        #@ignore    
        Scenario: Clicar no ícone principal do C.R.U.D
            When aciono o ícone principal
            Then retorno para a tela principal