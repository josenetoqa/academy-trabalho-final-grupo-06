class Login {

    botãoEntrar = '.sc-ftvSup'
    emailLogin = 'input[name=email]'
    senhaLogin = 'input[name=password]'


    visit(){
        cy.visit('https://academy-lembra-compras.herokuapp.com/login')
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
export const perfil = new Login(); 
