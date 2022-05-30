import {login} from '../pages/loginPage.po'

Given('acesso a pagina de Login',()=>{
    login.visitar();
})
When('informo os dados', (tabela) => {
    var dadosTabela = tabela.rowsHash();
    login.preencherFormularioELogar(dadosTabela.email, dadosTabela.senha);
});
When('informo os dados sem email', (tabela) => {
    var dadosTabela = tabela.rowsHash();
    login.preencherSemEmail(dadosTabela.senha);
});
When('informo os dados sem senha', (tabela) => {
    var dadosTabela = tabela.rowsHash();
    login.preencherSemSenha(dadosTabela.email);
});
Then('tenho acesso ao sistema', () => {
	login.logou();
    login.deslogar();
});
Then('visualizo a mensagem de erro {string}', (mensagemErro) => {
    login.erroLogin(mensagemErro);
}); 