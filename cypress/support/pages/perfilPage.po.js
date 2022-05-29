
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
   
    campoNome = 'input[name=name]' // Campo Nome " Tela Perfil"
    campoEmail = ':nth-child(3) > .sc-gSAPjG' // Campo Email " Tela Perfil"
    buttonConfirmar = '.jmKUXo' // Botão Confirmar " Tela Perfil"
    menssagemSucessoAtualizar = '.go3958317564' // Mensagem de confirmação
    buttonSair = ':nth-child(4) > .sc-crXcEl > .sc-hHLeRK' // Botão Sair (logout)
    


    // AÇÔES
    
    logar(){         
        cy.visit("https://academy-lembra-compras.herokuapp.com/"); // Visitar "Tela Login"
        cy.get(this.emailLogin).clear() // Limpar campo Email na "Tela Login"
        cy.get(this.emailLogin).type("guilherme@raro.com"); // Preencher Email "Tela Login"
        cy.get(this.senhaLogin).clear() // Limpar campo Senha "Tela Login"
        cy.get(this.senhaLogin).type("12345678"); // Preencher Senha "Tela Login"
        cy.get(this.botãoEntrar).click(); // Clicar no Botão Entrar "Tela Login"
        cy.wait(1500)
    }
  
    acessarPerfil(){
        cy.get(this.botãoOpções).click(); // Botão Perfil em Opções "Tela principal"
        cy.get(this.botãoPerfil).click(); // Botão Perfil em Perfil em Opções na "Tela principal" 
        cy.wait(1500)
    }

    limparNome(){
        cy.get(this.campoNome).clear(); // Limpar campo Nome "Tela perfil"
        cy.wait(1500)
    }

    limparEmail(){
        cy.get(this.campoEmail).clear(); // Limpar campo Email "Tela perfil"  
        cy.wait(1500)
    }
    
    preencherNome(){
        cy.get(this.campoNome).type("Guilherme Santos"); // Preencher campo Nome "Tela perfil"
    }

    nomeM4(){
        cy.get(this.campoNome).type("Gui"); // Preencher campo Nome <4 caracteres "Tela perfil"
    }
    
    preencherEmail(){
        cy.get(this.campoEmail).type("guilherme@raro.com"); // Preencher campo Email "Tela perfil"
    }
    
    emailUsado(){
        cy.get(this.campoEmail).type("guilhermearaujo@raro.com"); // Preencher campo Email já em uso "Tela perfil"
    }


    confirmarAlterações(){
        cy.get(this.buttonConfirmar).click(); // Clicar botão Confirmar Alterações "Tela perfil"
        cy.contains("button", "Confirmar").should("be.visible"); // Visualizar botão Confirmar "Tela perfil"
        cy.get(".sc-jdAMXn.iMjKmA").click(); // Clicar botão Confirmar "Tela perfil"
    }

    
    erroConfirmar(){
        cy.get('.jmKUXo').should('be.visible').click();
        cy.get(this.buttonConfirmar).click();
        
    }


    informaçõesAtualizadas(){ 
        cy.wait(500)
        cy.get(this.menssagemSucessoAtualizar).should("be.visible"); // Visualizar mensagem de Sucesso "Tela perfil"
    }
    
    menssagemErro1(){ 
        cy.get(this.campoNome).click();
        cy.contains('User already exists').should("be.visible"); // Visualizar mensagem de erro "Tela perfil"
        
    }

    menssagemErro2(){ 
        cy.get(this.campoEmail).click();
        cy.contains('Informe seu nome completo').should("be.visible"); // Visualizar mensagem de erro "Tela perfil"
        
    }

    menssagemErro3(){ 
        
        cy.contains('').should("be.visible"); // Visualizar mensagem de erro "Tela perfil"
        
    }

    
   
    logout(){
        cy.get(this.botãoOpções).click(); // Botão Perfil em Opções "Tela perfil"
        cy.get(this.buttonSair).click(); // botão para SAIR do LOGIN

    }
}



export var perfil = new acessPerfil();
