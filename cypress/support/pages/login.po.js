class Login {
    menu='.sc-bjUoiL'
    btnentrar = '.sc-ftvSup'
    btnregistra = '.sc-crXcEl'
    emaillogin = 'input[name=email]'
    senhalogin = 'input[name=password]'
    erroinfoincorreta = '.sc-papXJ'
    boxerro = '.go3958317564'
    emailincorreto = '.sc-papXJ'
    
    visitar(){
        cy.visit("https://academy-lembra-compras.herokuapp.com/login");
    }
    loginemail(email){
        cy.get(this.emaillogin).type(email)    
    }
    loginsenha(senha){
        cy.get(this.senhalogin).type(senha)
    }
    entrar(){
        cy.get(this.btnentrar).click()
    }
    emailnaoinserido(){
        cy.get('.davdmO').should('be.visible')
        cy.contains('Informe seu e-mail')
    }
    senhanaoinserida(){
        cy.contains('Informe sua senha')
    }
    emailinvalido(){
        cy.get(this.emailincorreto).should('have.text', 'Formato de e-mail inválido.')

    }
    mensageminvalido(){
        cy.get(this.erroinfoincorreta).should('have.text', 'E-mail ou senha incorretos.')
        cy.get(this.boxerro).should('be.visible')

}}
export var login = new Login(); 