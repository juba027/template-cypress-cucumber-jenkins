/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"


import LoginPage from "../pages/login.page";



When('je saisis le username {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
  LoginPage.saisirUsernam(s)
})

When('je saisis le password {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
  LoginPage.saisirPassword(s)
})

When('je clique sur le bouton Login', () => {
  // Write code here that turns the phrase above into concrete actions
  LoginPage.cliqueSurLogin()
})

Then('j acced a mon dashboard', () => {
  // Write code here that turns the phrase above into concrete actions
  expect(0).to.equal(0)
})

Given('je visite le lien {string}', (s) => {
  // Write code here that turns the phrase above into concrete actions
  cy.visit(s, {failOnStatusCode: false})
})
