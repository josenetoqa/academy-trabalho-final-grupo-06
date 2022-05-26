import Login from '..suport/pages/perfilPage.po';

Given("acessei a tela de perfil", () => {
  
   perfilPage.telaLogin();
   perfilPage.preencherEmail().clear();
   perfilPage.preencherEmail();
   

  }
)