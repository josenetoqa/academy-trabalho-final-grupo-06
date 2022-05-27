//Fazer Login
class newLogin{

    //elementos
    botãoEntrar = '.sc-ftvSup'
    emailLogin = 'input[name=email]'
    senhaLogin = 'input[name=password]'
       
    //Ações 
    telaLogin(){
        cy.visit("https://academy-lembra-compras.herokuapp.com/");
    }
    preencherEmail(email){
        cy.get(this.emailLogin).clear()
        cy.get(this.emailLogin).type("guilherme@raro.com");    
    }
    preencherSenha(senha){
        cy.get(this.senhaLogin).clear()
        cy.get(this.senhaLogin).type("12345678");
    }
    clicarEntrar(){
        cy.get(this.botãoEntrar).click();

}}

//Acessar tela de perfil
class acessPerfil{

    //elementos
    botãoOpções = '.sc-bjUoiL'
    botãoPerfil = ":nth-child(3) > .sc-crXcEl > .sc-hHLeRK"

    //Ações     
    clicarOpções(){
        cy.get(this.botãoOpções).click();
    } 
    clicarPerfil(){
            cy.get(this.botãoPerfil).click();    

}}

//Alterar dados de usuario
class alterarDados{

    //elementos
    campoNome = ':nth-child(2) > .sc-gSAPjG'
    campoEmail = ':nth-child(3) > .sc-gSAPjG'
    buttonConfirmar = '.jmKUXo'


    //Ações     
      
    preencherNome(){
        cy.get(this.campoNome).clear()
        cy.get(this.campoNome).type("Paulo Henrique Ganso");    
    }

    preencherEmail(){
        cy.get(this.campoEmail).type(); 
    }

    confirmarAlterações(){
        cy.get(this.buttonConfirmar).click(); 
    }
    
    clicarEnter(){
        cy.type({enter});
    }

}


export var login = new newLogin();
export var Perfil = new acessPerfil();
export var dados = new alterarDados();