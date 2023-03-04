describe('template spec', () => {

  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'))
  });



  it.only('Adicionar produtos no carrinho até finalizar', () => {
  
    cy.get(':nth-child(1) > .pricebar > .btn_primary')
    // adding products to cart
    .click().should('be.visible')

    // Enter in cart
    cy.get('#shopping_cart_container')
    .click()

    // enter in checkout
    cy.get('.btn_action')
    .click()
    
    // write the first name of clients
    cy.get('[data-test="firstName"]')
    .type('José')

    // write the last name of clients
    cy.get('[data-test="lastName"]')
    .type('Abreu')

    // write the zip-code of clients
    cy.get('[data-test="postalCode"]')
    .type('91520120')
    
    // click on the button continue
    cy.get('.btn_primary')
    .click()

    // click on the button finish
    cy.get('.btn_action')
    .click()

    // visibility message of positive
    cy.get('.complete-header')
    .should('be.visible')
    



  })

  it('Adicionar mais de um produtos no carrinho', () => {
  
    // adiciona produto 1
    cy.get(':nth-child(1) > .pricebar > .btn_primary')
    .click().should('be.visible')

    // adiciona produto 2
    cy.get(':nth-child(3) > .pricebar > .btn_primary')
    .click().should('be.visible')

    // cy.get('#shopping_cart_container')
    // .click()
  
  })



})