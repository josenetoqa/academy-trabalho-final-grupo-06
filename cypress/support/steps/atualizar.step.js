import { gestao } from "../pages/gestao.po";

Given(/^acessei a pagina da aplicacao$/, () => {
	 gestao.visit()
});

Given(/^que fiz o login na plataforma$/, () => {
	return true;
});

(/^realizo acesso a plataforma$/, () => {
	return true;
});
