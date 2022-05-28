import {login} from "../pages/perfilPage.po"
import {perfil} from "../pages/perfilPage.po"
import {dados} from "../pages/perfilPage.po"
import {mens} from "../pages/perfilPage.po"


//Acessar tela de perfil para atualizar informações de usuario
Given("acessei a tela de perfil", () => {

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
  }
);