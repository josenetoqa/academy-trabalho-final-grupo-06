class CriarPage{

    nome = "#name"
    email = "#email"
    senha = "#senha"
    confirmarSenha = "#confirmarSenha"
    btnregistrese = '.sc-evZas'
    btnregistrar = '.sc-kgUAyh'

    visitar() {
        cy.visit("/");
    }

    registreSe(){
        cy.get(this.btnregistrese).click();
    }
    
    atribuirNome(nome) {
        cy.get(this.nome).type(nome);
    }

    atribuirEmail(email) {
        cy.get(this.email).type(email);
    }

    atribuirSenha(senha) {
        cy.get(this.Senha).type(senha);
    }

    atribuirConfirmarSenha(confirmarSenha) {
        cy.get(this.ConfirmarSenha).type(confirmarSenha);
    }

    icone() {
        cy.get(this.btnregistrar).click();
    }

    mensagemDeSucesso(mensagem) {
        cy.contains(mensagem).should("be.visible");
    }

    mensagemDeErro(mensagem) {
        cy.contains(mensagem).should("be.visible");
    }

    preencherFormulario(nome, email, senha, confirmarSenha) {
        this.nome(nome);
        this.email(email);
        this.senha(senha);
        this.confirmarSenha(confirmarSenha);
    }}

export var criarPage = new CriarPage();