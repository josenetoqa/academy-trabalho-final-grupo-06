import {login} from "../pages/perfilPage.po"
import {Perfil} from "../pages/perfilPage.po"
import {dados} from "../pages/perfilPage.po"


//Acessar tela de perfil para atualizar informações de usuario
Given("acessei a tela de perfil", () => {
   //Fazer login
   login.telaLogin();
   login.preencherEmail();
   login.preencherSenha();
   login.clicarEntrar();
   //Acessar tela de Perfil
   Perfil.clicarOpções();
   Perfil.clicarPerfil();
  }
);  

When("atualizo as informações de nome para um nome valido", () => {

   dados.preencherNome();
  }
); 

When("confirmo a operação", () => {
  
   dados.confirmarAlterações();
   dados.clicarEnter();
   }
);