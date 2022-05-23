import { login  } from "../support/pages/login.po";
describe('int', () => {
    it('tes ', () => {
        login.visit()
        login.loginemail('josepandia42@gmail.com')
        login.loginsenha('123')
        login.entrar()
        login.mensageminvalido()
    });
});