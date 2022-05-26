class ListarPage {
    nomeUsuario = "p[data-test='userDataName']"

    visitar() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
    }
   verificarUsuario(nome) {
        cy.contains(this.nomeUsuario, nome);
    }
    verificarUsuarioinexistente(nome) {   
        cy.get('.sc-gKXOVf').type(nome)
        cy.get('h3').should('have.text','Ops! Não existe nenhum usuário para ser exibido.')
    }
    mock(){
        cy.intercept('GET','https://crud-api-academy.herokuapp.com/api/v1/users',{
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
}
export var listaPage = new ListarPage();