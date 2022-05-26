class Login {

    btnentrar = '.sc-ftvSup'
    emaillogin = 'input[name=email]'
    senhalogin = 'input[name=password]'


    visit(){
        cy.visit('https://academy-lembra-compras.herokuapp.com/login')
    }
    loginemail(email){
        cy.get(this.emaillogin).type(email)    
    }
    loginsenha(senha){
        cy.get(this.senhalogin).type(senha)
    }
    entrar(){
        cy.get(this.btnentrar).click()



















}}
export const perfil = new Login(); 
