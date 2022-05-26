import { login } from "../pages/perfilPage.po" 


Given("acessei a tela de perfil", () => {
   //login
   perfilPage.telaLogin('/');
   perfilPage.loginEmail().clear();
   perfilPage.loginEmail();
   //acessar tela de Perfil


  }

  
)