import {login} from "../pages/login.po"

Given("acessei a pagina inicial",()=>{
    login.visitar();
})

When('preencho o campo e-mail com um e-mail existente', () => {
	return true;
});

And('preencho o campo senha com a senha correta', () => {
	return true;
});

When('clico em Entrar', () => {
	return true;
});


Then('tenho acesso ao sistema', () => {
	return true;
});
