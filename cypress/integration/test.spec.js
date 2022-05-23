import { login  } from "../support/pages/login.po";
describe('int', () => {
    it('tes ', () => {
        login.visit()
        login.entrar()
        login.emailnaoinserido()
        login.loginemail('josepandia42@gmail.com')
        login.loginsenha('123')
        login.entrar()
        login.mensageminvalido()
    });
});