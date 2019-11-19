describe('This visits instagram.com', () => {

    it('', () => {
        let mail = Cypress.env('apollo987@web.de');
        let password = Cypress.env('medion');
        login(mail, password); //maybe redundant
        deleteAccount(mail, password);
    })
})

function login(mail, password) {
    cy.visit('https://www.instagram.com');
    if (cy.get('.izU2O > a').should('exist')) {
        cy.get('.izU2O > a').click();
        cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ').type(mail);
        cy.get(':nth-child(3) > ._9GP1n > .f0n8F > ._2hvTZ').type(password);
        cy.get('.HmktE > :nth-child(4)').click();
    }
}

function deleteAccount(mail, password) {
    cy.visit('https://www.instagram.com/accounts/remove/request/permanent/');
    if (cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ').should('exist')) {
        cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ').type(mail);
        cy.get(':nth-child(3) > ._9GP1n > .f0n8F > ._2hvTZ').type(password);
        cy.get('.HmktE > :nth-child(4)').click();
        }
    cy.get('#deletion-reason').select('Privacy concerns');
    cy.get('#password').type(password);
    cy.get('#confirm-button').click();
}