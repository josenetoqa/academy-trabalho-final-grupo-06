class Gestao{
    inputdesc= '.sc-bBrHrO > .sc-hAZoDl > .sc-ksZaOG'
    inputname= ':nth-child(1) > .sc-ksZaOG'
    inputquant = '.sc-bZkfAO > :nth-child(2) > .sc-ksZaOG'
    btnadicionaritem = '.sc-kLLXSd'
    btnadicionarlista = '.sc-ftvSup'
    checkitem = '.dHzcbv'
    btnfinalizar = '.sc-jdAMXn'
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
        cy.get(this.inputdesc).type(desc)
    }
    inputnameitem(item){
        cy.get(this.inputname).type(item)
    }
    inputquantidade(quantidade){
        cy.get(this.inputquant).type(quantidade)
    }
    btnadditem(){
        cy.get(this.btnadicionaritem).click()
    }
    btnsalvar(){
        cy.get(this.btnadicionarlista).click()
    }
    btnconfirmar(){
        cy.get(this.btnfinalizar).click()
    }
    visit(){
        cy.visit('/')
    }

}
export const gestao = new Gestao()