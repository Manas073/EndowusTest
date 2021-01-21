/// <reference types="Cypress" />

class LoginPageObj 
{
    fillEmail(value){
      cy.get('[id=userName]').type(value)
      
    }

    fillPassword(value){
       cy.get('[id=password]').type(value)
    }

    submit(){
       cy.get('[id=login').click()
    }
}
     export default LoginPageObj
