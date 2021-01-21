/// <reference types="Cypress" />

import LoginPageObj from '../PageObjects/LoginPageObj'

const Form_URL = '/login'

describe('Login', function () {
  beforeEach(function () {

    cy.visit(Form_URL)
    cy.url()
      .should('eq', Cypress.config().baseUrl + Form_URL)
    cy.fixture('example').then((data) => {
      this.data = data
      cy.log(this.data)
    })
  })

  it('should display the Autocomplete title', function () {
    cy.get('.main-header')
      .should('contain', 'Login')
  })

  it('should allow Valid user to Login', function () {
    const login = new LoginPageObj()
    login.fillEmail(this.data.userid)
    login.fillPassword(this.data.pwd)
    login.submit()
    cy.get('.main-header').should('contain', 'Profile')

  })

  it('should Not allow Invalid user to Login', function () {
    cy.get('#userName').type('Demouser')
    cy.get('#password').type('password')
    cy.get('#login').click()
  })

})
