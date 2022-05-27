class Gestao{
    inputdescricao = 'input[name="description"]'
    inputnameitem= 'input[name="name"]'
    inputquantidade = 'input[name="amount"]'
    btnadicionaritem = '.jXvxPV'
    btnsalvar ='.ihUbVe'
    btnadicionarlista = '.cAnVuz'
    checkitem = '.dHzcbv'
    btnfinalizar = '.bRCWwE'
    btnhistorico = 'a[href="/historico"]'
    btnlista = 'a[href="/lista"]'
    menu='.sc-bjUoiL'
    
    
    //Login
    
    
    btnentrar = '.sc-ftvSup'
    btnregistra = '.sc-crXcEl'
    emaillogin = 'input[name=email]'
    senhalogin = 'input[name=password]'
    erroinfoincorreta = '.sc-papXJ'
    boxerro = '.go3958317564'
    emailincorreto = '.sc-papXJ'

    loginemail(email){
        cy.get(this.emaillogin).type(email)    
    }
    loginsenha(senha){
        cy.get(this.senhalogin).type(senha)
    }
    entrar(){
        cy.get(this.btnentrar).click()
    }
    inputdescricao(desc){
        cy.get(this.inputdescricao).type(desc)
    }
    inputnameitem(item){
        cy.get(this.inputnameitem).type(item)
    }
    inputquantidade(quantidade){
        cy.get(this.inputquantidade).type(quantidade)
    }
    btnsalvar(){
        cy.get(this.btnsalvar).click()
    }
    visit(){
        cy.visit('/')
    }
}
export const gestao = new Gestao()