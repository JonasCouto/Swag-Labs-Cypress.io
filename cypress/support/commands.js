// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addRecord', (user) => {
    
    cy.fixture(user)
    .then((user) => {

        cy.get('[data-test="firstName"]')
        .should('be.visible')
        .type(user.name)
        .should('have.value', user.name)

        cy.get('[data-test="lastName"]')
        .should('be.visible')
        .type(user.lastName)
        .should('have.value', user.lastName)

        cy.get('[data-test="postalCode"]')
        .should('be.visible')
        .type(user.postalCode)
        .should('have.value', user.postalCode)

        
    })
    
})