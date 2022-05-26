import {login} from "..support/pages/perfilPage.po"

Given("acessei a tela de perfil", () => {
  
   login.telaLogin();
   login.preencherEmail().clear();
   login.preencherEmail();
   

  }
);