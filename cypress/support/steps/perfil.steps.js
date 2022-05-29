import {perfil} from "../pages/perfilPage.po"



Given("efetuei logout do sistema", () => {

   perfil.logout();
   
  }
);  

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


When("atualizo as informações de email para um email já em uso", () => {
    
  perfil.limparEmail();
  perfil.emailUsado();

  }
); 

When("atualizo as informações de nome para um nome <4 caracteres", () => {

  perfil.limparNome();
  perfil.nomeM4();

  }
); 



//Confirmar Operação
When("tento confirmar a operação", () => {

  perfil.erroConfirmar();

  }
);

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

Then("visualizo a mensagem email já em uso", () => {
  
  perfil.menssagemErro1();

  }
);


Then("visualizo a mensagem de alerta", () => {
  
  perfil.menssagemErro2();

  }
);

Then("visualizo a mensagem de erro", () => {
  
  perfil.menssagemErro3();

  }
);




