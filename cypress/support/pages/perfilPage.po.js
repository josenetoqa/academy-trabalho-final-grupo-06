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
        cy.get(this.emailLogin).type("ganso@gmail.com");    
    }
    preencherSenha(senha){
        cy.get(this.senhaLogin).clear()
        cy.get(this.senhaLogin).type("12345678");
    }
    clicarEntrar(){
        cy.get(this.botãoEntrar).click();

}}

//acessar tela de perfil
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


export var login = new newLogin();
export var Perfil = new acessPerfil();