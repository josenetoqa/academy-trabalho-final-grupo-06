// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('teste', function(nome){
    cy.intercept('GET','https://crud-api-academy.herokuapp.com/api/v1/search?value=teste',{
         statusCode: 200,
         body:[
            {
                "name": "teste",
                "email": "t@g.com",
                "createdAt": "2022-05-10T03:01:22.466Z",
                "updatedAt": "2022-05-10T03:01:22.466Z"
            }
        ]
      })
});