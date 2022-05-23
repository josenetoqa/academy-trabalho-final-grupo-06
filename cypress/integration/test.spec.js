import { login  } from "../support/pages/login.po";
describe('int', () => {
    it('tes ', () => {
        login.visit()
        login.entrar()
        login.emailnaoinserido()
    });
});