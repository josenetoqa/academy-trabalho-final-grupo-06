import { gestao } from "../pages/gestaolista.po";

Given('acessei a pagina da aplicacao', () => {
	gestao.visit()
	gestao.loginemail('josepandia42@gmail.com')
	gestao.loginsenha('123')
	gestao.entrar()
	cy.wait(2000)
})
When('realizo o cadastro de uma nova lista', () => {
	gestao.inputdescricao('desc')
	gestao.inputnameitem('dessss')
	gestao.inputquantidade('10')
	gestao.btnadditem()
})
Then('salvo a lista criada', () => {
	gestao.btnsalvar()
	cy.wait(10000)
	gestao.btnsalvar()
	gestao.btnconfirmar()
});
Then('não deve ser possível visualizar mais de uma lista', () => {
	
});
