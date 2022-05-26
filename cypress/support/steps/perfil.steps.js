import { perfil } from "../pages/perfil.po" 

Background // Acessar a tela de PERFIL para realizar as atuallizações de usuario
 Given("acessei a tela de perfil", () => {
    //login
    cy.visit()
    cy.get(this.emaillogin).type(email)
    cy.get(this.senhalogin).type(senha)
    cy.get(this.btnentrar).click()
    //acessar tela de Perfil

})