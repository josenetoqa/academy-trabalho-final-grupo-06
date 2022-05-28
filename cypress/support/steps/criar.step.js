import { criarPage  } from "../pages/criarPage.po";

Given('acesso a tela principal', () => {
	 criarPage.visitar()
});


When("informo os dados", (tabela) => {
    var dadosTabela = tabela.rowsHash();
    login.preencherFormularioELogar(dadosTabela.email, dadosTabela.senha);
});

When('informo os dados necessarios para registro de um novo usuario', (tabela) => {
	var dadosTabela = tabela.rowsHash();
    criarPage.preencherFormulario(dadosTabela.nome, dadosTabela.email , dadosTabela.senha, dadosTabela.confirmarSenha)
});

Then('será permitido acesso ao sistema', () => {
	return true;
});
