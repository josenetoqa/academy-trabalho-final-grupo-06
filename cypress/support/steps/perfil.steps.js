<<<<<<< HEAD
import {perfil} from "../pages/perfilPage.po"
=======
import {login} from "../pages/perfilPage.po"
import {perfil} from "../pages/perfilPage.po"
import {dados} from "../pages/perfilPage.po"
import {mens} from "../pages/perfilPage.po"
>>>>>>> c58b24dcb526803874733176161f159571944811


//Acessar tela de perfil para atualizar informações de usuario
Given("acessei a tela de perfil", () => {

<<<<<<< HEAD
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

=======
   //Fazer login
   login.telaLogin();
   login.preencherEmail();
   login.preencherSenha();
   login.clicarEntrar();

   //Acessar tela de Perfil
   perfil.clicarOpções();
   perfil.clicarPerfil();
  }
);  

When("atualizo as informações de nome para um nome valido", () => {

  dados.preencherNome();

  }
); 



When("confirmo a operação", () => {

  dados.confirmarAlterações();
  }
);

Then("visualizo a mensagem de sucesso", () => {
  
  mens.informaçõesAtualizadas();
>>>>>>> c58b24dcb526803874733176161f159571944811
  }
);