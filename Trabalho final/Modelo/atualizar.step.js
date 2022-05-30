import { listarPage } from "../pages/listarPage.po"
import { atualizarPage } from "../pages/atualizarPage.po"


//Atualizar usuario com sucesso
Given("acesso a tela principal", () => {
    listarPage.telaPrincipal();
    })
Given("visualizo os usuarios cadastrados", () => {
        atualizarPage.usuariosCadastrados();
    })

Given("aciono a opção ver detalhes em um determinado usuario", () => {
        listarPage.verDetalhes();
        cy.intercept("POST", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        });
    })

When("clico em Editar", () => {
        atualizarPage.editar();
    })
    
When("deleto o campo nome", () => {
    atualizarPage.apagarNome();
   })

When("deleto o campo email", () => {
    atualizarPage.apagarEmail();
   })

When("altero o nome para um nome válido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.atualizarNome(dadosTabela.nome);
   })

When("altero o email para um email válido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.atualizarEmail(dadosTabela.email);
 })

When("aciono o botão Salvar", () => {
    atualizarPage.salvar();
 })
  

// Atualizar usuario sem o campo "NOME"
Given("acesso a tela principal", () => {
    listarPage.telaPrincipal();
   })
Given("visualizo os usuarios cadastrados", () => {
        atualizarPage.usuariosCadastrados();
    })

Given("aciono a opção ver detalhes em um determinado usuario", () => {
        listarPage.verDetalhes();
    })

When("clico em Editar", () => {
        atualizarPage.editar();
    })
    
When("deleto o campo nome", () => {
    atualizarPage.apagarNome();
   })

When("aciono o botão Salvar", () => {
    atualizarPage.salvar();
 })

// Atualizar usuario sem o campo "EMAIL"
Given("acesso a tela principal", () => {
    listarPage.telaPrincipal();
    })
Given("visualizo os usuarios cadastrados", () => {
        atualizarPage.usuariosCadastrados();
    })

Given("aciono a opção ver detalhes em um determinado usuario", () => {
        listarPage.verDetalhes();
    })

When("clico em Editar", () => {
        atualizarPage.editar();
    })
    
When("deleto o campo email", () => {
    atualizarPage.apagarEmail();
   })

When("aciono o botão Salvar", () => {
    criarPage.salvar();
   })


//Atualizar usuario sem o campo "NOME" e "EMAIL" 
Given("acesso a tela principal", () => {
    listarPage.telaPrincipal();
    })
Given("visualizo os usuarios cadastrados", () => {
        atualizarPage.usuariosCadastrados();
    })

Given("aciono a opção ver detalhes em um determinado usuario", () => {
        listarPage.verDetalhes();
    })

When("clico em Editar", () => {
        atualizarPage.editar();
    })
    
When("deleto o campo nome", () => {
        atualizarPage.apagarNome();
       })

When("deleto o campo email", () => {
    atualizarPage.apagarEmail();
   })

When("aciono o botão Salvar", () => {
    criarPage.salvar();
   })

Then("visualizo as mensagens de erro", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.mensagemDeErro(dadosTabela.mensagem1);
    atualizarPage.mensagemDeErro(dadosTabela.mensagem2);
   })


// Atualizar usuário com email sem o @
Given("acesso a tela principal", () => {
    listarPage.telaPrincipal();

Given("visualizo os usuarios cadastrados", () => {
        atualizarPage.usuariosCadastrados();
    })

Given("aciono a opção ver detalhes em um determinado usuario", () => {
        listarPage.verDetalhes();
    })

When("clico em Editar", () => {
        atualizarPage.editar();
    })
    
When("deleto o campo email", () => {
    atualizarPage.apagarEmail();
   })
   
When("altero o email para um email válido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.atualizarEmail(dadosTabela.email);   
   })

When("aciono o botão Salvar", () => {
    criarPage.salvar();
   })

})

// Atualizar usuário com email sem o .com
Given("acesso a tela principal", () => {
    listarPage.telaPrincipal();

Given("visualizo os usuarios cadastrados", () => {
        atualizarPage.usuariosCadastrados();
    })

Given("aciono a opção ver detalhes em um determinado usuario", () => {
        listarPage.verDetalhes();
    })

When("clico em Editar", () => {
        atualizarPage.editar();
    })
    
When("deleto o campo email", () => {
    atualizarPage.apagarEmail();
   })

When("altero o email para um email válido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.atualizarEmail(dadosTabela.email);   
   })

When("aciono o botão Salvar", () => {
    criarPage.salvar();
   })

})

//Atualizar usuario com >100 caraceteres no nome
Given("acesso a tela principal", () => {
    listarPage.telaPrincipal();

Given("visualizo os usuarios cadastrados", () => {
        atualizarPage.usuariosCadastrados();
    })

Given("aciono a opção ver detalhes em um determinado usuario", () => {
        listarPage.verDetalhes();
    })

When("clico em Editar", () => {
        atualizarPage.editar();
    })
    
When("deleto o campo nome", () => {
    atualizarPage.apagarNome();
   })

When("altero o nome para um nome válido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.atualizarNome(dadosTabela.nome);
   })

When("aciono o botão Salvar", () => {
    criarPage.salvar();
 })
  
})

//Atualizar usuario com >60 caraceteres no Email
Given("acesso a tela principal", () => {
    listarPage.telaPrincipal();

Given("visualizo os usuarios cadastrados", () => {
        atualizarPage.usuariosCadastrados();
    })

Given("aciono a opção ver detalhes em um determinado usuario", () => {
        listarPage.verDetalhes();
    })

When("clico em Editar", () => {
        atualizarPage.editar();
    })
    
When("deleto o campo email", () => {
    atualizarPage.apagarEmail();
   })

When("altero o email para um nome válido", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.atualizarEmail(dadosTabela.Email);
   })

When("aciono o botão Salvar", () => {
    criarPage.salvar();
 })
  
})

// Cancelar operação de atualizar usuario
Given("acesso a tela principal", () => {
    listarPage.telaPrincipal();
   })
Given("visualizo os usuarios cadastrados", () => {
        atualizarPage.usuariosCadastrados();
    })

Given("aciono a opção ver detalhes em um determinado usuario", () => {
        listarPage.verDetalhes();
    })

When("clico na opção Editar", () => {
        atualizarPage.editar();
    })

When("clico na opção Cancelar", () => {
        atualizarPage.cancelar();
    })
    
Then("vizualizo o botão de Editar novamente", () => {
        atualizarPage.vizualizarEditar();
    })
    
// validando botão Voltar
Given("acesso a tela principal", () => {
    listarPage.telaPrincipal();
   })

Given("visualizo os usuarios cadastrados", () => {
        atualizarPage.usuariosCadastrados();
    })

Given("aciono a opção ver detalhem em um determinado usuario", () => {
        listarPage.verDetalhes();
    })

When("clico na opção Voltar", () => {
        atualizarPage.voltar();
    })

Then("retorno para a tela principal", () => {
    atualizarPage.telaPrincipal();
    })


 // validando icone principal
 Given("acesso a tela principal", () => {
    listarPage.telaPrincipal();
   })

Given("visualizo os usuarios cadastrados", () => {
        atualizarPage.usuariosCadastrados();
    })

Given("aciono a opção ver detalhem em um determinado usuario", () => {
        listarPage.verDetalhes();
    })

When("aciono o ícone principal", () => {
    listarPage.icone();
    }) 

Then("retorno para a tela principal", () => {
    listarPage.telaPrincipal();
        })
     


// Mensagens de Erro do sistema
Then("visualizo a mensagem de erro", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.mensagemDeErro(dadosTabela.mensagem);
})

Then("visualizo a mensagem de sucesso", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.mensagemDeSucesso(dadosTabela.mensagem);
 })

Then("visualizo as mensagens de erro", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    atualizarPage.mensagemDeErro(dadosTabela.mensagem1);
    atualizarPage.mensagemDeErro(dadosTabela.mensagem2);
})