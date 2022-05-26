import { login  } from "../support/pages/login.po";

Given(/^acessei a pagina$/, () => {
    login.visit()

});

When(/^digitei o email para acesso$/, () => {
	return true;
});

When(/^digitei a senha para acesso$/, () => {
	return true;
});

Then(/^Clico em Entrar para conseguir acesso$/, () => {
	return true;
});

When(/^for carregado as listas$/, () => {
	return true;
});
