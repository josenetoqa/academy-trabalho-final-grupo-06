class CriarPage{
    inputNome = "#name"
    inputEmail = "#email"
    inputSenha = "#senha"
    inputConfirmarSenha = "#confirmarSenha"
    btnregistrarse = '.sc-crXcEl'
    
    visita(){
        cy.visit ('/')
    }

    registrerSe(){
        cy.get('.sc-ftvSup').click();
    }
 
    nome(nome){
        cy.get(this.inputNome).type(nome);
    }

    email(email){
        cy.get(this.inputEmail).type(email);
    }

    senha(senha){
        cy.get(this.inputSenha).type(senha);
    }

    confirmarSenha(confirmarSenha){
        cy.get(this.inputConfirmarSenha).type(confirmarSenha);
    }

    registrar(){
        cy.get('.sc-ftvSup').click();
    }

    voltar(){
        cy.contains("a", "Voltar").click();
    }

    mensagemDeSucesso(mensagem){
        cy.contains(mensagem).should("be.visible");
    }

    mensagemDeErro(mensagem){
        cy.contains(mensagem).should("be.visible");
    }

    preencherFormulario(nome, email, senha, confirmarSenha){
        this.nome(nome);
        this.email(email);
        this.senha(senha);
        this.confirmarSenha(confirmarSenha);
    }

    telaPrincipal(){
        cy.url().should("be.equal", "https://academy-lembra-compras.herokuapp.com/register");
    }
}

export var criarPage = new CriarPage();