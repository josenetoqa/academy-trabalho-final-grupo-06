class AtualizarPage{
    inputNome = "#userName"
    inputEmail = "#userEmail"

    telaPrincipal() {
        cy.url().should("be.equal", "https://academy-crud-frontend.herokuapp.com/users");
    }

    usuariosCadastrados() {
        cy.intercept("GET", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 200,
        fixture: "Usuarios.json"
        });

    }

    editar() {
        cy.contains("button", "Editar").click();
    }

    vizualizarEditar() {
        cy.contains("button", "Editar").should("be.visible");
    }

    cancelar() {
        cy.contains("button", "Cancelar").click();
    }

    icone() {
        cy.get(".jbJCFN").click();
    }

    apagarNome() {
        cy.get(this.inputNome).clear();
    }

    apagarEmail() {
        cy.get(this.inputEmail).clear();
    }

    atualizarNome(nome) {
        cy.get(this.inputNome).type(nome);
    }

    atualizarEmail(email) {
        cy.get(this.inputEmail).type(email);
    }

    mensagemDeSucesso(mensagem) {
        cy.contains(mensagem).should("be.visible");
    }

    mensagemDeErro(mensagem) {
        cy.contains(mensagem).should("be.visible");
    
    }

    salvar() {
        cy.contains("button", "Salvar").click();
    }

    voltar() {
        cy.contains("a", "Voltar").click();
    }

}


export var atualizarPage = new AtualizarPage();