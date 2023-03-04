describe('template spec', () => {

  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'))
  });


  it.only('Adicionar produtos no carrinho até finalizar', () => {
    cy.get('.product_sort_container')
    .select('Name (A to Z)')
    .should('have.value', 'az')

    // Enter in cart
    cy.get(':nth-child(1) > .pricebar > .btn_primary')  
    .click()
    
    // Enter in cart
    cy.get('#shopping_cart_container')
    .click()

    // enter in checkout
    cy.get('.btn_action')
    .click()
    
    // write the first name of clients
    cy.get('[data-test="firstName"]')
    .should('be.visible')
    .type('José')
    .should('have.value', 'José')

    // write the last name of clients
    cy.get('[data-test="lastName"]')
    .should('be.visible')
    .type('Abreu')
    .should('have.value', 'Abreu')

    // write the zip-code of clients
    cy.get('[data-test="postalCode"]')
    .should('be.visible')
    .type('91520120')
    .should('have.value', '91520120')
    
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



})