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

    // Cria novo usuário
    cy.addRecord('user.json')
    
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
  
  it('Tentativa de realizar checkout sem adicionar produto no carrinho', () => {

    
    cy.get('.product_sort_container')
    .select('Name (A to Z)')
    .should('have.value', 'az')

    // Enter on product
    cy.get('#item_4_img_link > .inventory_item_img')
    .click()

    // Enter in cart
    cy.get('#shopping_cart_container')
    .click()

    // enter in checkout
    cy.get('.btn_action')
    .click()
    
   // click on the button continue
    cy.get('.btn_primary')
    .click()

    // visibility message of positive
    cy.get('[data-test="error"]')
    .should('be.visible')
    
  })


})