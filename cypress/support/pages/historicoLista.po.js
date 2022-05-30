class historico {
    menu='.sc-bjUoiL'     
    sair='.sc-idiyUo > :nth-child(4)'
    
    login (){
        

        cy.visit("https://academy-lembra-compras.herokuapp.com/login");
        cy.get("input[name=email]").type("lendariopaodequeijo@email.com");
        cy.get("input[name=password]").type("123321");
        cy.contains("button", "Entrar").click();
    }
    
    historico(){
        cy.contains("a", "Histórico").click();
        cy.get(".sc-ehmTmK");
    
    }

    lista(){
        cy.get(".sc-ehmTmK").should("be.visible");

    }

   logoff(){
        cy.get(this.menu).click();
        cy.get(this.sair).click();
    }

    verificar(){
        cy.get(".sc-ehmTmK").should("have.length", 10);
    }

    data(){
        cy.get(".sc-lbOyJj > span").should("be.visible");
        cy.get(".sc-lbOyJj > p").should("be.visible");
    }
    
    clicar(){
        cy.get(".sc-lbOyJj").eq(0).click();
        
    }
    interagir(){
        cy.get(".sc-gFGZVQ > h2").should("be.visible");
        cy.get(".sc-ckMVTt").should("be.visible");
    }
}
export var historicoLista = new historico();