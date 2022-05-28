import { gestao } from "../pages/gestaolista.po";

Given('acessei a pagina da aplicacao', () => {
	gestao.visit()
	gestao.loginemail('josepandia42@gmail.com')
	gestao.loginsenha('123')
	gestao.entrar()
	cy.wait(2000)
});


When('realizo o cadastro de uma nova lista', () => {
	gestao.inputdescricao('desc')
	gestao.inputnameitem('dessss')
	gestao.inputquantidade('10')
	gestao.btnadditem()
});
Then('salvo a lista criada', () => {
	gestao.btnsalvar()
	cy.wait(4000)	
});
Then('não consigo visualizar mais de uma lista', () => {
	gestao.btnconfirmar()
});


When('realizo o cadastro de uma nova lista', () => {
	gestao.inputdescricao('desc1')
	gestao.inputnameitem('desc10')
	gestao.inputquantidade('100')
	gestao.btnadditem()
});

When('verifico se as listas sao compostas por uma descrição e por uma lista de itens', () => {
	return true;
});

Then('salvo a nova lista', () => {
	gestao.btnsalvar()
	cy.wait(4000)
});


When('realizo o cadastro de uma nova lista', () => {
	gestao.inputdescricao('desc10')
	gestao.inputnameitem('desc100')
	gestao.inputquantidade('1')
	gestao.btnadditem()
});

When('verifico se os itens da lista possuem apenas nome e quantidade', () => {
	return true;
});

Then('consegui criar uma nova lista', () => {
	gestao.btnsalvar()
	cy.wait(4000)
	gestao.btnconfirmar()
});


When('realizo o cadastro de uma nova lista sem descricao', () => {
	gestao.inputnameitem('desc100')
	gestao.inputquantidade('1')
	gestao.btnadditem()
});

When('verifico que pelo menos um item foi inserido', () => {
	return true;
});

Then('consegui criar uma nova lista', () => {
	return true;
});


When('realizo o cadastro de uma nova lista', () => {
	gestao.inputdescricao('desc10')
});

When('seleciono a quantidade do item com o valor menor que 1', () => {
	gestao.inputnameitem('desc100')
	gestao.inputquantidade('0,5')
	gestao.btnadditem()
});

Then('vejo a mensagem de erro insira um valor valido', () => {
	return true;
});


When('realizo o cadastro de uma nova lista', () => {
	return true;
});

When('seleciono a quantidade do item com o valor maior que 1000', () => {
	return true;
});

Then('vejo a mensagem de erro insira um valor valido', () => {
	return true;
});

