
const Form_URL = '/books/'

describe('Forms', function () {
  before(() => {
    cy.visit(Form_URL)
    cy.url()
      .should('eq', Cypress.config().baseUrl + Form_URL)
  })

  it('should display the Page title', function () {
    cy.get('.main-header')
      .should('contain', 'Book Store')
  })


  it('should search as per the Author name', function () {
    cy.get('.form-control').click().type('Addy')
    cy.get('.rt-td').should('be.visible').and('contain.text', 'Addy')
  })

  it('should show message for not matching search result', function () {
    cy.reload()
    cy.get('.form-control').click().type('Andrew')
    cy.get('.rt-noData').should('be.visible').and('contain.text', 'No rows')

  })

  it('should verify whether all images are valid jpg images', function () {
    cy.get('.form-control').clear()
    cy.get('div.rt-td ').find('[src*=jpg]')

  })

  it('should have 10 records per page ', function () {
    cy.reload()
    cy.get('div.rt-td:nth-of-type(1)').should('have.length', 10)

  })

  it('should click on records dropdown & verify other values ', function () {
    cy.reload()
    cy.get('.select-wrap.-pageSizeOptions').click().contains('5 rows')

  })

  it('should click on link of book & verify the Title in next page', function () {
    cy.get('.form-control').clear()
    cy.get('div.rt-tr-group span').first().click()
    cy.get('.form-label').should('be.visible').and('contain.text', 'Git Pocket Guide')
  })

})
