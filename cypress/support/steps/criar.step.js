When('informo os dados necessarios para registro de um novo usuario', (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.preencherFormulario(dadosTabela.nome,dadosTabela.email, dadosTabela.senha, dadosTabela.confirmarSenha);
});
Then('será permitido acesso ao sistema', () => {
    criarPage.mock()
    criarPage.mensagemSucesso()
});
Then('visualizo a mensagem de erro', () => {
    criarPage.mensagemErro()
});


When('informo os dados necessarios para registro de um novo usuario sem nome', (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.preencherFormulariosemnome(dadosTabela.email, dadosTabela.senha, dadosTabela.confirmarSenha);
});
When('informo os dados necessarios para registro de um novo usuario sem email', (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.preencherFormulariosememail(dadosTabela.nome,dadosTabela.senha, dadosTabela.confirmarSenha);
});
When('informo os dados necessarios para registro de um novo usuario sem o nome e email', (tabela) => {
    var dadosTabela = tabela.rowsHash();
    criarPage.preencherFormulariovazio(dadosTabela.senha, dadosTabela.confirmarSenha);
});

Then('visualizo a mensagem de erro sem nome', () => {
    criarPage.errosemnome()
});
Then('visualizo a mensagem de erro sem email', () => {
    criarPage.errosememail()
});
Then('visualizo a mensagem de erro sem o nome e email', () => {
    criarPage.errosememailnome()
});
Then('visualizo a mensagem de erro email invalido', () => {
    criarPage.erroemailinvalido()
});
Then('visualizo a mensagem de erro de tamanho invalido', () => {
    criarPage.erro100()
});
Then('visualizo a mensagem de erro email maior que o permitido', () => {
    criarPage.erro60()
});
Then('visualizo a mensagem de erro de nome invalido', () => {
    criarPage.erroname()
});