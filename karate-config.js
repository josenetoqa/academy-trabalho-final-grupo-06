function setup() {
    
    var data = new Date();
    var aleatorio = data.getTime();

   
    var config = {
        baseUrl: "https://lista-compras-api.herokuapp.com/api/v1",
        usuarioPerfil: {"name": "Perfil","email": "perfil@raro.com"},
        
        
        emailAleatorioPerfil: {"name": "Perfil","email": "perfil"+aleatorio+"@raro.com"},
        usuarioAleatorioPerfil: {"name": "Perfil"+aleatorio,"email": "perfil@raro.com"},
        emailExistentePerfil: {"name": "Perfil","email": "romerito@raro.com"},
        nomeMenor4: {"name": "abc","email": "perfil"+aleatorio+aleatorio+"@raro.com"},
        nomeIgual100: {"name": aleatorio+"deabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde","email": "perfil"+aleatorio+aleatorio+"@raro.com"},
        nomeMaior100: {"name": aleatorio+"deabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdee","email": "perfil"+aleatorio+aleatorio+"@raro.com"},
        emailIgual60: {"name": "Perfil","email": aleatorio+"deabcdeabcdeabcdeabcdeabcdeabcdeabcdef@raro.com"},  
        emailMaior60: {"name": "Perfil","email": aleatorio+"cdeabcdeabcdeabcdeabcdeabcdeabcdeabcdef@raro.com"},
        emailSemA: {"name": "Perfil","email": "perfil"+aleatorio+"raro.com"},
        emailSemCom: {"name": "Perfil","email": "perfil"+aleatorio+"@raro"}, 
        nomeEmBranco: {"name": "","email": "perfil"+aleatorio+"@raro.com"},   
        emailEmBranco: {"name": "Perfil"+aleatorio,"email": ""},  
        NomeEemailEmBranco: {"name": "","email": ""},
        
        



    

    }
   
    return config;
}