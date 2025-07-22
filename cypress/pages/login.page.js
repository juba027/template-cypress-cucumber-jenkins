/// <reference types="cypress" />


class LoginPage {
    // web elements
    elements = {
        loginButton: () => cy.get("form#login-form input[type='submit']"),
        userName: () => cy.get("#id_username"),
        password: () => cy.get("#id_password"),
        errorMessage: () => cy.get(".errornote")
    }

    // actions
    saisirUsernam(username) {
        this.elements.userName().type(username)
    }

    saisirPassword(password){
        this.elements.password().type(password)
    }

    cliqueSurLogin(){
        this.elements.loginButton().click()
    }

    doLogin(username, password){
        this.saisirUsernam(username)
        this.saisirPassword(password)
        this.cliqueSurLogin()
    }

}

export default new LoginPage();