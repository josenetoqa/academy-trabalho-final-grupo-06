import { pageLogin } from "../pages/perfilPage.po"

Given("acessei a tela de perfil", () => {
  
   perfilPage.telaLogin();
   perfilPage.loginEmail().clear();
   perfilPage.loginEmail();
   

  }
)