import {historicoLista} from "../pages/historicoLista.po"

Given ("que estou logado no sistema", () => {
    historicoLista.login();
})

And ("acessei a tela de histórico de compras",  () => {
    historicoLista.historico();
})

Then ("o sistema apresenta as listas de compras realizadas", () => {
    historicoLista.lista();

})
Then ("o sistema apresenta 10 listas de compras recentes", () => {
    historicoLista.lista();
})

Then ("deslogo da plataforma", () => {
    historicoLista.logoff();
})

Then ("o sistema apresenta 10 listas de compras recentes", () => {
    historicoLista.verificar();
})
Then ("é possível vizualizar nome e data de criação da lista", () => {
    historicoLista.data();
})
Then ("o sistema permite vizualizar meu histórico de compras", () => {

})
When ("seleciono uma lista", () => {
    historicoLista.clicar();
})
Then ("o sistema permite consultar o nome e itens da lista", () =>{
    historicoLista.interagir();
})
