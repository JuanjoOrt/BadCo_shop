describe('Page', () => {
  it('Still page alive', () => {
    cy.visit('http://localhost:3000/')
  })
  it('page contain logo', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('BAD CO.')
  })
  it('go to products page', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Products').click()
    cy.url().should('include', '/products')
  })
})
