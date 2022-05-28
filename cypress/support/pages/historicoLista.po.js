class historico {
    visitar(){
        cy.visit("https://academy-lembra-compras.herokuapp.com/login")
    }
}
export var historicoLista = new historico();
