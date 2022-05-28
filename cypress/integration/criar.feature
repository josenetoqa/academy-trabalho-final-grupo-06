Feature: Criar usuario
    Como uma pessoa qualquer
    Desejo me registrar no sistema
    Para ter acesso as funcionalidades de lista de compras

    Background: Acessar a tela de cadastrar de um novo usuario
        Given acesso a tela principal
  
        Scenario: Registrar um novo usuário
            When informo os dados necessarios para registro de um novo usuario
            | nome           | Jujuba Princesa     |
            | email          | jujuba@princesa.com |
            | senha          | JujubaPrincesa      |
            | confirmarSenha | JujubaPrincesa      |
            Then será permitido acesso ao sistema

        Scenario: Registrar um novo usuário com email já existente
            When informo os dados necessarios para registro de um novo usuario
            | nome           | Theo Pestinha       |
            | email          | jujuba@princesa.com |
            | senha          | Theo1234            |
            | confirmarSenha | Theo1234            |
            Then visualizo a mensagem de erro
            | mensagem | Este e-mail já é utilizado por outro usuário. |

        Scenario: Registrar um novo usuário sem o nome
            When informo os dados necessarios para registro de um novo usuario
            | nome           |                     |
            | email          | jujuba@princesa.com |
            | senha          | JujubaPrincesa      |
            | confirmarSenha | JujubaPrincesa      |
            Then visualizo a mensagem de erro
            | mensagem | Informe seu nome. |

        Scenario: Registrar um novo usuário sem o email
            When informo os dados necessarios para registro de um novo usuario
            | nome           | Jujuba Princesa     |
            | email          |                     |
            | senha          | JujubaPrincesa      |
            | confirmarSenha | JujubaPrincesa      |
            Then visualizo a mensagem de erro
            | mensagem | Informe seu e-mail. |

        Scenario: Registrar um novo usuário sem o nome e email
            When informo os dados necessarios para registro de um novo usuario
            | nome           |                     |
            | email          |                     |
            | senha          | JujubaPrincesa      |
            | confirmarSenha | JujubaPrincesa      |
            Then visualizo a mensagem de erro
            | mensagem1 | Informe seu nome.   |
            | mensagem2 | Informe seu e-mail. |

        Scenario: Registrar um novo usuário com email sem o @
            When informo os dados necessarios para registro de um novo usuario
            | nome           | Jujuba Princesa     |
            | email          | jujubaprincesa.com  |
            | senha          | JujubaPrincesa      |
            | confirmarSenha | JujubaPrincesa      |
            Then visualizo a mensagem de erro
            | mensagem | Formato de e-mail inválido. |

        Scenario: Registrar um novo usuário com email sem o .com
            When informo os dados necessarios para registro de um novo usuario
            | nome           | Jujuba Princesa     |
            | email          | jujuba@princesa     |
            | senha          | JujubaPrincesa      |
            | confirmarSenha | JujubaPrincesa      |
            Then visualizo a mensagem de erro
            | mensagem | Formato de e-mail inválido. |

        Scenario: Registrar um usuário com mais de 100 caracteres no nome
            When informo os dados necessarios para registro de um novo usuario
            | nome | JujubaPrincesaJujubaPrincesaJujubaPrincesaJujubaPrincesaJujubaPrincesaJujubaPrincesaJujubaPrincesaJuj |
            | email          | jujuba@princesa     |
            | senha          | JujubaPrincesa      |
            | confirmarSenha | JujubaPrincesa      |
            Then visualizo a mensagem de erro
            | mensagem | Informe no máximo 100 letras no seu nome. |

        Scenario: Registrar um usuário com mais de 600 caracteres no email
            When informo os dados necessarios para registro de um novo usuario
            | nome           | Jujuba Princesa     |
            | email | JujubaJujubaJujubaJujubaJujubaJujubaJujubaJujuba@princesa.com |
            | senha          | JujubaPrincesa      |
            | confirmarSenha | JujubaPrincesa      |
            Then visualizo a mensagem de erro
            | mensagem | Informe no máximo 100 caracteres. |

        Scenario: Registrar um usuário com menos de 4 caracteres no nome
            When informo os dados necessarios para registro de um novo usuario
            | nome           | Jub                 |
            | email          | jujuba@princesa.com |
            | senha          | JujubaPrincesa      |
            | confirmarSenha | JujubaPrincesa      |           
            Then visualizo a mensagem de erro
            | mensagem | Informe seu nome completo |

        Scenario: Clicar na opção de "Voltar à página de login "
            When clico na opção voltar à pagina de login
            Then volto para a tela principal


