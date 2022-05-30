function setup() {
    
    var data = new Date();
    var aleatorio = data.getTime();

   
    var config = {
        baseUrl: "https://lista-compras-api.herokuapp.com/api/v1",
        usuarioLogin: {"email": "romerito@raro.com","password": "123"},
        usuarioPerfil: {"name": "Perfil","email": "perfil@raro.com"},

        emailAleatorioPerfil: {"name": "Perfil","email": "perfil"+aleatorio+"@raro.com"},
        usuarioAleatorioPerfil: {"name": "Perfil"+aleatorio,"email": "perfil@raro.com"},
        emailExistentePerfil: {"name": "Perfil","email": "romerito@raro.com"},
        nomeMenor4: {"name": "abc","email": "perfil"+aleatorio+aleatorio+"@raro.com"},
        nomeIgual100: {"name": "abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcde","email": "perfil"+aleatorio+aleatorio+"@raro.com"},
        nomeMaior100: {"name": "abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdee","email": "perfil"+aleatorio+aleatorio+"@raro.com"},
        emailIgual60: {"name": "Perfil","email": "abcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdee@raro.com"},  
        emailMaior60: {"name": "Perfil","email": "aabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdeabcdee@raro.com"},
        emailSemA: {"name": "Perfil","email": "perfil"+aleatorio+"raro.com"},
        emailSemCom: {"name": "Perfil","email": "perfil"+aleatorio+"@raro"}, 
        nomeEmBranco: {"name": "","email": "perfil"+aleatorio+"@raro.com"},   
        emailEmBranco: {"name": "Perfil"+aleatorio,"email": ""},  
        NomeEemailEmBranco: {"name": "","email": ""},
        
        


        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpZCI6ImVmZTQ3YmI1LTRmNGItNGI5MS1hNGIxLWMxNDA1M2VlYWQzZiIsImlzX2FkbWluIjpmYWxzZSwiZW1haWwiOiJzdXNhcmlvQGNvbS5jb20iLCJkYXRlQ3JlYXRlZCI6MTY1Mzg2OTA5OTk3OSwiaXNzdWVkIjoxNjUzODY5MDk5OTc5LCJleHBpcmVzIjoxNjUzODY5OTk5OTc5fQ.P2F1lE6OQj4FoJX0spyRy74l-4WRQR6jHvTTelvmIhgcJdr8Gh4NVwDTUZ9-pYtAP_fh_PErD4LzT7E5GGZLdQ",
    

    }
   
    return config;
}