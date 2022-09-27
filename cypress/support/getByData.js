export default function getByData (selector) {
  return cy.get(`[data-test=${selector}]`)
}
