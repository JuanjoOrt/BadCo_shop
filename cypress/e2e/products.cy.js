describe('', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/products').as('products')
    cy.intercept('GET', '**/details').as('details')
    cy.visit('http://localhost:3000')
  })

  it('get details and select a size', () => {
    cy.contains('Products')
      .click()
    cy.wait('@products')
    cy.contains('Sudadera Capucha Washed Fire Tiger')
      .click()
    cy.wait('@details')
    cy.get('.detail-content__button')
      .should('be.disabled')
    cy.get('.detail-content__size').children().eq(0).click()
    cy.get('.detail-content__button')
      .should('be.enabled')
      .click()
    cy.get('.side-shopping-cart')
      .should('have.class', 'show')
  })
})
