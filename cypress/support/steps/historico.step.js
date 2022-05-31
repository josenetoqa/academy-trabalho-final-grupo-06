import { historicoLista } from '../pages/historicoLista.po';
import { criarPage } from "../pages/criarPage.po";
import { login } from '../pages/loginPage.po';
import {gestao} from '../pages/gestaoPage.po'

When('realizo o cadastro de uma nova lista', () => {
	gestao.inputdescricao('desc')
	gestao.inputnameitem('dessss')
	gestao.inputquantidade('10')
	gestao.btnsalvar()
});
Then('salvo a lista criada', () => {
	gestao.btnsalvar()
	cy.wait(1000)
});
Then('finalizo a lista', () => {
	gestao.titulo()
	gestao.btnconfirmar()
	cy.wait(1000)
	gestao.btnconfirmar()
	gestao.btnconcluir()
});
Given('acesso a tela principal', () => {
    criarPage.visitar()
    criarPage.registreSe()
});
When('informo os dados necessarios para registro de um usuario aleatorio', (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.preencherFormularioaleatorio(dadosTabela.nome,dadosTabela.email, dadosTabela.senha, dadosTabela.confirmarSenha);
});
Given('acessei a pagina da aplicacao', () => {
	cy.wait(1000)
	criarPage.visitar()
	criarPage.emailcache()
	login.loginSenha('123')
	login.entrar()
});
And('acessei a tela de histórico de compras', () => {
	historicoLista.historico();
});
Then('o sistema apresenta as listas de compras realizadas', () => {
	historicoLista.lista();
});
Then('o sistema apresenta 10 listas de compras recentes', () => {
	historicoLista.lista();
});
Then('deslogo da plataforma', () => {
	historicoLista.logoff();
});
Then('o sistema apresenta 10 listas de compras recentes', () => {
	historicoLista.verificar();
});
Then('é possível vizualizar nome e data de criação da lista', () => {
	historicoLista.data();
});
Then('o sistema permite vizualizar meu histórico de compras', () => {});
When('seleciono uma lista', () => {
	historicoLista.clicar();
});
Then('o sistema permite consultar o nome e itens da lista', () => {
	historicoLista.interagir();
});
