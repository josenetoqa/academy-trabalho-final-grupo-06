
class acessPerfil{

    // ELEMENTOS

    // Tela Login

    botãoEntrar = '.sc-ftvSup' // Botão entrar "Tela Login"
    emailLogin = 'input[name=email]' // Campo Email "Tela Login"
    senhaLogin = 'input[name=password]' // Campo Senha "Tela Login"


    // Tela principal

    botãoOpções = '.sc-bjUoiL' // Botão "Opções" tela principal
    botãoPerfil = ":nth-child(3) > .sc-crXcEl > .sc-hHLeRK" // Botão Perfil em "Opções"

    // Tela Perfil

    campoNome = ':nth-child(2) > .sc-gSAPjG' // Campo Nome " Tela Perfil"
    campoEmail = ':nth-child(3) > .sc-gSAPjG' // Campo Email " Tela Perfil"
    buttonConfirmar = '.jmKUXo' // Botão Confirmar " Tela Perfil"
    menssagemSucessoAtualizar = '.go3958317564' // Mensagem de confirmação
    


    // AÇÔES
    
    logar(){         
        cy.visit("https://academy-lembra-compras.herokuapp.com/"); // Visitar "Tela Login"
        cy.get(this.emailLogin).clear() // Limpar campo Email na "Tela Login"
        cy.get(this.emailLogin).type("guilherme@raro.com"); // Preencher Email "Tela Login"
        cy.get(this.senhaLogin).clear() // Limpar campo Senha "Tela Login"
        cy.get(this.senhaLogin).type("12345678"); // Preencher Senha "Tela Login"
        cy.get(this.botãoEntrar).click(); // Clicar no Botão Entrar "Tela Login"

    }
  
    acessarPerfil(){
        cy.get(this.botãoOpções).click(); // Botão Perfil em Opções "Tela principal"
        cy.get(this.botãoPerfil).click(); // Botão Perfil em Perfil em Opções na "Tela principal" 
    }

    limparNome(){
        cy.get(this.campoNome).clear(); // Limpar campo Nome "Tela perfil"
    }

    limparEmail(){
        cy.get(this.campoEmail).clear(); // Limpar campo Email "Tela perfil"  
    }
    
    preencherNome(){
        cy.get(this.campoNome).type("Guilherme Araujo dos santos"); // Preencher campo Nome "Tela perfil"
    }
    
    preencherEmail(){
        cy.get(this.campoEmail).type("guilhermesantos@gmail.com"); // Preencher campo Email "Tela perfil"
    }
    
    confirmarAlterações(){
        cy.get(this.buttonConfirmar).click(); // Clicar botão Confirmar Alterações "Tela perfil"
        cy.contains("button", "Confirmar").should("be.visible"); // Visualizar botão Confirmar "Tela perfil"
        cy.get(".sc-jdAMXn.iMjKmA").click(); // Clicar botão Confirmar "Tela perfil"
    }

    informaçõesAtualizadas(){ 
        cy.get(this.menssagemSucessoAtualizar).should("be.visible"); // Visualizar mensagem de Sucesso "Tela perfil"
    }
}



export var perfil = new acessPerfil();
