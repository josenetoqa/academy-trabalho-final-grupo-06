class Login {
    menu='.sc-bjUoiL'
    btnentrar = '.sc-ftvSup'
    btnregistra = '.sc-crXcEl'
    emaillogin = 'input[name=email]'
    senhalogin = 'input[name=password]'
    erroinfoincorreta = '.sc-papXJ'
    boxerro = '.go3958317564'
    emailincorreto = '.sc-papXJ'
    sair = '.sc-hHLeRK'
    
    visitar(){
        cy.visit("https://academy-lembra-compras.herokuapp.com/login");
    }
    loginEmail(email){
        cy.get(this.emaillogin).type(email)    
    }
    loginSenha(senha){
        cy.get(this.senhalogin).type(senha)
    }
    entrar(){
        cy.get(this.btnentrar).click()
    }

    preencherFormularioELogar(email, senha) {
        this.loginEmail(email);
        this.loginSenha(senha);
        this.entrar();
    }

    preencherSemEmail(senha) {
        this.loginSenha(senha);
        this.entrar();
    }

    preencherSemSenha(email) {
        this.loginEmail(email);
        this.entrar();
    }
    

    logou(){
        cy.contains("Lembra Compras")
    }

    deslogar(){
        cy.get(this.menu).click();
        
        cy.contains("Sair").click();


    }

    erroLogin(mensagemErro){
        cy.contains(mensagemErro).wait(2000).should("be.visible");

    };


    

}
export var login = new Login(); 