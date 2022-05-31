const { faker } = require('@faker-js/faker')

const name = faker.datatype.string(5)
const correto = name.toLowerCase();
const randomEmail = faker.internet.email(correto, correto)

class CriarPage {
	nome = ':nth-child(1) > .sc-kDDrLX';
	email = ':nth-child(2) > .sc-kDDrLX';
	senha = ':nth-child(3) > .sc-bBXxYQ > .sc-cOFTSb';
	confirmarSenha = ':nth-child(4) > .sc-bBXxYQ > .sc-cOFTSb';
	btnregistrese = '.sc-crXcEl';
	btnregistrar = '.sc-ftvSup';
	box = '.go2072408551';
	texterro = '.sc-papXJ';
	btnentrar = '.sc-ftvSup'
	senhalogin = 'input[name=password]'

visitar() {
		cy.visit('/');
	}
cadastrar() {
		cy.get(this.btnregistrar).click();
	}
registreSe() {
		cy.get(this.btnregistrese).click();
	}
atribuirNome(nome) {
		cy.get(this.nome).type(nome);
	}
atribuirEmail(email) {
		cy.get(this.email).type(email);
	}
atribuirSenha(senha) {
		cy.get(this.senha).type('123');
	}
atribuirConfirmarSenha(confirmarSenha) {
		cy.get(this.confirmarSenha).type('123');
	}
entrar(){
		cy.get(this.btnentrar).click()
	}
loginSenha(senha){
		cy.get(this.senhalogin).type(senha)
}
emailcache(){
	cy.get(this.email).type(randomEmail);
}
preencherFormularioaleatorio(nome, senha, confirmarSenha) {
		this.atribuirNome(nome);
		this.atribuirEmail(randomEmail);
		this.atribuirSenha(senha);
		this.atribuirConfirmarSenha(confirmarSenha);
		cy.get(this.btnregistrar).click();
	}
preencherFormularioaleatoriologin(senha) {
		this.atribuirEmail(randomEmail);
		this.loginSenha(senha);
		this.entrar();
	}	
preencherFormulario(nome, email, senha, confirmarSenha) {
		this.atribuirNome(nome);
		this.atribuirEmail(email);
		this.atribuirSenha(senha);
		this.atribuirConfirmarSenha(confirmarSenha);
		cy.get(this.btnregistrar).click();
	}
preencherFormulariosemnome(email, senha, confirmarSenha) {
		this.atribuirEmail(email);
		this.atribuirSenha(senha);
		this.atribuirConfirmarSenha(confirmarSenha);
		cy.get(this.btnregistrar).click();
	}
preencherFormulariosememail(nome, senha, confirmarSenha) {
		this.atribuirNome(nome);
		this.atribuirSenha(senha);
		this.atribuirConfirmarSenha(confirmarSenha);
		cy.get(this.btnregistrar).click();
	}
preencherFormulariovazio(senha, confirmarSenha) {
		this.atribuirSenha(senha);
		this.atribuirConfirmarSenha(confirmarSenha);
		cy.get(this.btnregistrar).click();
	}
mensagemSucesso() {
		cy.get(this.box).should('have.text', 'Usuário criado com sucesso!');
	}
mensagemErro() {
		cy.get(this.box).should(
			'have.text',
			'Este e-mail já é utilizado por outro usuário.'
		);
	}
errosemnome() {
		cy.get(this.texterro).should('have.text', 'Informe seu nome');
	}
errosememail() {
		cy.get(this.texterro).should('have.text', 'Informe seu e-mail');
	}
errosememailnome() {
		cy.get(this.texterro).should(
			'have.text',
			'Informe seu nomeInforme seu e-mail'
		);
	}
erroemailinvalido() {
		cy.get(this.texterro).should(
			'have.text',
			'Formato de e-mail inválido.'
		);
	}
erro100() {
		cy.get(this.texterro).should(
			'have.text',
			'Informe no máximo 100 letras no seu nome'
		);
	}
erro60() {
		cy.get(this.box).should(
			'have.text',
			'Não foi possível efetuar seu registro. Tente novamente mais tarde.'
		);
	}
erroname() {
		cy.get(this.texterro).should('have.text', 'Informe seu nome completo');
	}
voltar() {
		cy.get('.sc-crXcEl').click();
	}
}
export var criarPage = new CriarPage();
