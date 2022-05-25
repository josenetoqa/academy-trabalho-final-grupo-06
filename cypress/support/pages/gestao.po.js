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


    visit(){
        cy.visit('/')
    }
}
export const gestao = new Gestao()