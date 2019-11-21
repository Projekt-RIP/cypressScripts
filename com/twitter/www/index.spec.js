describe('This visits twitter.com', () => {

    it('', () => {
        let mail = Cypress.env("user");
        let password = Cypress.env("password");
        login(mail, password);
    })
})

function login(mail, password) {
    cy.visit('https://www.twitter.com');
    if (cy.get('.StaticLoggedOutHomePage-buttons > .EdgeButton--secondary').should('exist')) {
        cy.get('.StaticLoggedOutHomePage-buttons > .EdgeButton--secondary').click();
        cy.get('.js-username-field').type(mail);
        cy.get('.js-password-field').type(password);
        cy.get('.subchck > .t1-label > input').click();
        cy.get(':nth-child(3) > .submit').click();
    }
    cy.get('[data-testid=AppTabBar_More_Menu] > .r-1awozwy > .css-1dbjc4n > .r-hkyrab').click();
    cy.get('[data-testid=settings] > .css-1dbjc4n').click();
    cy.get('[role="tablist"] > :nth-child(2) > .css-4rbku5').click();
    cy.get('[href="/settings/deactivate"]').click();
    cy.get(':nth-child(11) > .css-18t94o4').click();
}