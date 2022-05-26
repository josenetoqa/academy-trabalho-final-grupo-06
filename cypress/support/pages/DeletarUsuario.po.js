class DeletarUsuario{
    nomeUsuario = "p[data-test='userDataName']"
    boxbusca = ".sc-gKXOVf"
    botaoconfirmar= ".gBlXkK"
    botaocancelar= ".kZMnfO"
    botaox = ".dBcBxJ"
    boxsucesso = ".go3958317564"
    botaodeletar = "button[data-test='userDataDelete']"
    limparbusca=".sc-iBkjds"
   visitar(){
      cy.visit('https://academy-crud-frontend.herokuapp.com')
   }
   mock(){
      cy.intercept('GET','https://crud-api-academy.herokuapp.com/api/v1/search?value=teste',{
         statusCode: 200,
         body:[
            {
                "id": "8c9b33e4-142d-412a-a437-1a9e8bff6b6a",
                "name": "teste",
                "email": "t@g.com",
                "createdAt": "2022-05-10T03:01:22.466Z",
                "updatedAt": "2022-05-10T03:01:22.466Z"
            }
        ]
      })
   }
   buscarusuario(nome){
     
      cy.get(this.boxbusca).type(nome)
   }
   buscarusuario(email){
      cy.get(this.boxbusca).type(email)
   }
   deletarusuario(){
       cy.get(this.botaodeletar).click()
   }
   confirmardelete(){
      cy.get(this.botaoconfirmar).click()
      cy.get(this.boxsucesso).should('be.visible')
      cy.contains('Usuário removido!')
     }
     
}
export var deletarusuario = new DeletarUsuario();