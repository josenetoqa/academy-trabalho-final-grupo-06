import { criarPage } from '../pages/criarPage.po';
import {login} from '../pages/loginPage.po'

Given('acesso a pagina de Login',()=>{
   cy.wait(1000)
    login.visitar();
})
Given('acesso a tela principal', () => {
    login.visitar()
    login.registreSe()
});
When('informo os dados necessarios para registro de um usuario aleatorio', (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.preencherFormularioaleatorio(dadosTabela.nome,dadosTabela.email, dadosTabela.senha, dadosTabela.confirmarSenha);
});
When('informo os dados aleatorios', (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.preencherFormularioaleatoriologin(dadosTabela.senha);
});
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