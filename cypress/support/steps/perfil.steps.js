import {perfil} from "../pages/perfilPage.po"


//Acessar tela de perfil para atualizar informações de usuario
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