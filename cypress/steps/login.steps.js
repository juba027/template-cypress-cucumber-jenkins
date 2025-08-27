import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Utilise baseUrl si tu l'as, sinon visite l'URL absolue
const goToLogin = () => {
  // Si baseUrl est défini: cy.visit('/')
  cy.visit('https://www.saucedemo.com/');
};

const usernameElt = () => cy.get('[data-test="username"], #user-name').first();
const passwordElt = () => cy.get('[data-test="password"], #password').first();
const loginBtn    = () => cy.get('[data-test="login-button"], #login-button').first();

Given('je suis sur la page de login SauceDemo', () => {
  goToLogin();
  usernameElt().should('be.visible');
  passwordElt().should('be.visible');
  loginBtn().should('be.visible');
});

When('je saisis le username {string}', (u) => {
  usernameElt().clear().type(u);
});

When('je saisis le password {string}', (p) => {
  passwordElt().clear().type(p, { loggable: false });
});

When('je clique sur le bouton Login', () => {
  loginBtn().click();
});

Then("je suis redirigee vers la liste des produits", () => {


  cy.url().should('include', '/inventory');
  cy.get('.title').should('have.text', 'Products');
  cy.get('.inventory_list').should('be.visible');
});

Then('je vois un message d erreur de login', () => {
    cy.get('[data-test="error"]').should('be.visible');

})

