import {perfil} from "../pages/perfilPage.po"



Given("acessei a tela de perfil", () => {

   perfil.logar();   
   perfil.acessarPerfil();
   
  }
);  





When("atualizo as informações de nome para um nome valido", () => {

  perfil.limparNome();
  perfil.preencherNome();

  }
); 

When("confirmo a operação", () => {

  perfil.confirmarAlterações();

  }
);





Then("visualizo a mensagem de sucesso", () => {
  
  perfil.informaçõesAtualizadas();

  }
);