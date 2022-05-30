import {perfil} from "../pages/perfilPage.po"


// Pré-Condição


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
  perfil.nomeMenor4();

  }
); 

When("atualizo as informações de nome para um nome =4 caracteres", () => {

  perfil.limparNome();
  perfil.nomeIgual4();

  }
);

When("atualizo as informações de nome para um nome =100 caracteres", () => {

  perfil.limparNome();
  perfil.nomeIgual100();

  }
);

When("atualizo as informações de email para um email =60 caracteres", () => {

  perfil.limparEmail();
  perfil.emailIgual60();

  cy.intercept("PUT", "  https://lista-compras-api.herokuapp.com/api/v1/users", {
        statusCode: 200,
        body: {
            "id": "ca504a1e-4e6a-4514-90e1-5964928481da",
            "name": "Guilhermeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            "email": "guilhermeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee@raro.com",
            "updatedAt": "2022-05-29T23:21:46.333Z",
            "createdAt": "2022-05-27T20:33:36.785Z"
            }
    })
    
});

When("atualizo as informações de nome para um nome =101 caracteres", () => {

  perfil.limparNome();
  perfil.nomeMaior100();

  }
);

When("atualizo as informações de email para um email =61 caracteres", () => {

  perfil.limparEmail();
  perfil.emailMaior60();

  cy.intercept("PUT", "  https://lista-compras-api.herokuapp.com/api/v1/users", {
        statusCode: 200,
        body: {
            "id": "ca504a1e-4e6a-4514-90e1-5964928481da",
            "name": "Guilhermeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            "email": "guilhermeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee@raro.com",
            "updatedAt": "2022-05-29T23:21:46.333Z",
            "createdAt": "2022-05-27T20:33:36.785Z"
            }
    })
    
});

When("atualizo as informações de email para um email sem o @", () => {

  perfil.limparEmail();
  perfil.emailArroba();

     
});

When("atualizo as informações de email para um email sem o .com", () => {

  perfil.limparEmail();
  perfil.emailCom();

     
});

When("limpo as informações do campo nome", () => {

  perfil.limparNome();
       
});

When("limpo as informações do campo email", () => {

  perfil.limparEmail();
       
});




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



//Respostas


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

Then("visualizo a mensagem informando o erro", () => {
  
  perfil.menssagemErro3();

  }
);

Then("visualizo a mensagem de erro de email", () => {
  
  perfil.menssagemErro4();

  }
);

Then("visualizo a mensagem de erro de alteração", () => {
  
  perfil.menssagemErro5();

  }
);

Then("visualizo a mensagem de campo nome sem preenchimento", () => {
  
  perfil.menssagemErro6();

  }
);

Then("visualizo a mensagem de campo email sem preenchimento", () => {
  
  perfil.menssagemErro7();

  }
);





