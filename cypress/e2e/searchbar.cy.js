describe('SearchBar', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/products').as('products')
    cy.visit('http://localhost:3000')
  })

  it('type in searchbar', () => {
    cy.get('.header-input')
      .type('sudade')
      .should('have.value', 'sudade')
      .type('{enter}')
    cy.wait('@products')
  })
})
