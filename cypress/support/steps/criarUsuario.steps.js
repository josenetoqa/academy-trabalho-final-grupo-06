import {criarPage} from "../pages/criarUsuario.po";

Given(/^acesso a tela principal$/, () => {
	criarPage.visita()
});

(/^acesso a página de cadastrar através da opção Registre-se$/, () => {
	return true;
});

When(/^informo um nome válido$/, () => {
	return true;
});

When(/^informo um email válido$/, () => {
	return true;
});

When(/^Informo uma senha válida$/, () => {
	return true;
});

When(/^Confirmo a senha digitada acima$/, () => {
	return true;
});

When(/^confirmo o formulário através do botão Registrar$/, () => {
	return true;
});

Then(/^visualizo a mensagem de sucesso$/, () => {
	return true;
});
