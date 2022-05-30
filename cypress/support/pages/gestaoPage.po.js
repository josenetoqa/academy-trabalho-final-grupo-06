class Gestao{
    inputdesc= '.sc-bBrHrO > .sc-hAZoDl > .sc-ksZaOG'
    inputname= ':nth-child(1) > .sc-ksZaOG'
    inputquant = '.sc-bZkfAO > :nth-child(2) > .sc-ksZaOG'
    btnadicionaritem = '.sc-kLLXSd'
    btnadicionarlista = '.sc-ftvSup'
    btnfinalizarlista = '.bRCWwE'
    checkitem = '.dHzcbv'
    btnfinalizar = '.sc-jdAMXn > button'
    menu='.sc-bjUoiL'
    sair='.sc-idiyUo > :nth-child(4)'
    box ='.go3958317564'
    texterro = '.sc-papXJ'

    inputdescricao(desc){
        cy.get(this.inputdesc).type(desc)
    }
    inputnameitem(item){
        cy.get(this.inputname).type(item)
    }
    inputquantidade(quantidade){
        cy.get(this.inputquant).clear()
        cy.get(this.inputquant).type(quantidade)
    }
    btnadditem(){
        cy.get(this.btnadicionaritem).click()
    }
    btnsalvar(){
        cy.get(this.btnadicionarlista).click()
    }
    btnconfirmar(){
        cy.get(this.btnfinalizarlista).click({force: true})
    }
    btnconcluir(){
        cy.get(this.btnfinalizar).click()
    }
    logoff(){
        cy.get(this.menu).click()
        cy.get(this.sair).click()
    }
    titulo(){
        cy.get('h4').should('have.text','Adicionar novo item')
    }
    visit(){
        cy.visit('/')
    }
    verificacaodecampo(){
        cy.get(':nth-child(1) > .sc-ksZaOG').should('be.visible')
        cy.get(':nth-child(2) > .sc-ksZaOG').should('be.visible')
    }
    verificacaodelista(){
        cy.get('.kPGdrP').should('be.visible')
        cy.get('h1').should('be.visible')
    }
    listaconcluida() {
        cy.get(this.box).should('have.text', 'Lista concluída com sucesso!')
    }
    listacriada() {
        cy.get(this.box).should('have.text', 'Lista criada com sucesso!')    
    }
    erromenor(){
        cy.get(this.texterro).should('have.text', 'Informe pelo menos 1 unidade')
    }
    erromaior(){
        cy.get(this.texterro).should('have.text', 'Informe uma quantidade menor ou igual a 1000')
    }
    verificarcriacao(texto){
        cy.get('.sc-gicCDI').should('have.text' , texto)
    }
    marcar(){
        cy.get('.sc-himrzO').check().should('be.checked')
    }
}
export const gestao = new Gestao()