class Login {

    botãoEntrar = '.sc-ftvSup'
    emailLogin = 'input[name=email]'
    senhaLogin = 'input[name=password]'
    baseUrl = 'https://academy-lembra-compras.herokuapp.com/'

    telaLogin(){
        cy.visit(this.baseUrl)
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
export const Login = new Login(); 
