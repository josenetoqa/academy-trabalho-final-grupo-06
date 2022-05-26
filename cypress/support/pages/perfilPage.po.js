class Login{

    botãoEntrar = '.sc-ftvSup'
    emailLogin = 'input[name=email]'
    senhaLogin = 'input[name=password]'
    
    telaLogin(){
        cy.visit('https://academy-lembra-compras.herokuapp.com/')
    }
    loginEmail(email){
        cy.get(this.emailLogin).type(email)    
    }
    loginSenha(senha){
        cy.get(this.senhaLogin).type(senha)
    }
    entrar(){
        cy.get(this.botãoEntrar).click()



}}

export const pagelogin = new Login(); 
