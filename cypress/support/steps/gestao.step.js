import { gestao } from "../pages/Gestao.po";

Given(/^acessei a pagina da aplicacao$/, () => {
	 gestao.visit()
});
Given(/^que fiz o login na plataforma$/, () => {
	gestao.loginemail('josepandia42@gmail.com')
	gestao.loginsenha('123')
	gestao.entrar()
});

