import { gestao } from '../pages/gestaoPage.po';
import { login } from '../pages/loginPage.po';
import { criarPage } from "../pages/criarPage.po";


Given('acesso a tela principal', () => {
    login.visitar()
    criarPage.registreSe()
});
When('informo os dados necessarios para registro de um usuario aleatorio', (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.preencherFormularioaleatorio(dadosTabela.nome,dadosTabela.email, dadosTabela.senha, dadosTabela.confirmarSenha);
});
Given('acessei a pagina da aplicacao', () => {
	cy.wait(1000)
	gestao.visitar()
	criarPage.emailcache()
	login.loginSenha('123')
	login.entrar()
});
When('realizo o cadastro de uma nova lista', () => {
	gestao.inputdescricao('desc')
	gestao.inputnameitem('dessss')
	gestao.inputquantidade('10')
	gestao.btnadditem()
	gestao.btnsalvar()
});
Then('salvo a lista criada', () => {
	gestao.btnsalvar()
	cy.wait(1000)
});
Then('não consigo visualizar mais de uma lista', () => {
	gestao.titulo()
	gestao.btnconfirmar()
	cy.wait(1000)
	gestao.btnconfirmar()
	gestao.btnconcluir()
});
Then('deslogo da plataforma', () => {
	gestao.logoff()
});
When('realizo o cadastro de uma lista', () => {
	gestao.inputdescricao('desc')
	gestao.inputnameitem('dessss')
	gestao.inputquantidade('10')
	gestao.btnadditem()
	gestao.btnsalvar()
});
When('verifico se as listas sao compostas por uma descrição e por uma lista de itens', () => {
    gestao.btnconfirmar()
	gestao.verificacaodecampo()
	gestao.btnconcluir()
});
When('verifico se os itens da lista possuem apenas nome e quantidade', () => {
    gestao.btnconfirmar()
	gestao.verificacaodelista()
	gestao.btnconcluir()
});
When('realizo o cadastro de uma nova lista sem descricao', () => {
	gestao.inputnameitem('dessss')
	gestao.inputquantidade('10')
	gestao.btnadditem()
	gestao.btnsalvar()
});
Then('consegui criar uma nova lista', () => {
	gestao.btnconfirmar()
	gestao.btnconcluir()
});
When('realizo o cadastro de uma nova lista incluindo um item com o valor menor que 1', () => {
	gestao.inputdescricao('desc')
	gestao.inputnameitem('dessss')
	gestao.inputquantidade('-1')
	gestao.btnadditem()
});
Then('vejo a mensagem de erro insira um valor valido', () => {
	gestao.erromenor()
});
When('realizo o cadastro de uma nova lista incluindo um item com o valor maior que 1000', () => {
	gestao.inputdescricao('desc')
	gestao.inputnameitem('dessss')
	gestao.inputquantidade('-1')
	gestao.btnadditem()
});
Then('vejo a mensagem de erro insira um valor valido', () => {
	gestao.erromaior()
});
When('realizo o cadastro de uma nova lista', () => {
	gestao.inputdescricao('desc')
	gestao.inputnameitem('dessss')
	gestao.inputquantidade('10')
	gestao.btnadditem()
});
When('cadastro um novo item na lista com o mesmo nome utilizado anteriormente', () => {
	gestao.inputnameitem('dessss')
	gestao.inputquantidade('10')
	gestao.btnadditem()
	gestao.btnsalvar()
	
});
Then('a lista foi criada com sucesso', () => {
	gestao.btnconfirmar()
	gestao.btnconcluir()
});
When('cadastro uma nova lista', () => {
	gestao.inputnameitem('dessss')
	gestao.inputquantidade('10')
	gestao.btnadditem()
	gestao.btnsalvar()
	gestao.btnconfirmar()
});
Then('devo conseguir marcar um intem como concluido', () => {
	gestao.btnconcluir()
	gestao.marcar()
});