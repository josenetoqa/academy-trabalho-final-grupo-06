import {perfil} from "../pages/perfilPage.po"



Given("acessei a tela de perfil", () => {

   perfil.logar();   
   perfil.acessarPerfil();
   
  }
);  


//Cenarios


When("atualizo as informações de nome para um nome valido", () => {

  perfil.limparNome();
  perfil.preencherNome();

  }
); 


When("atualizo as informações de email para um email valido", () => {

  perfil.limparEmail();
  perfil.preencherEmail();

  }
); 


When("atualizo as informações de nome e email", () => {
  
  perfil.limparNome();
  perfil.preencherNome();
  perfil.limparEmail();
  perfil.preencherEmail();

  }
); 


//Confirmar Operação
When("confirmo a operação", () => {

  perfil.confirmarAlterações();
  perfil.logout();

  }
);



//Resposta
Then("visualizo a mensagem de sucesso", () => {
  
  perfil.informaçõesAtualizadas();

  }
);