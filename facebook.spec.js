describe('This visits facebook.com', () => {

    it('', () => {

        let {mail,password} = initializeCredentials();
        // let mail = 'swa66518@zzrgg.com';
        // let password = 'qwertz1234';
        console.log("Test");
        Cypress.log({ consoleProps: () => {return {"txt": "Hello World", "mail": mail}}});
        Cypress.log({'bla':password});
        login(mail, password);

        deleteAccount(password);

        cy.log('Your account deletion will be completed in 30 days.\n'+ 
                'Please do not log in to your account, unless you wish to prevent deletion.')
        

        
    
    })
})

function deleteAccount(password) {
    cy.visit('https://www.facebook.com/settings?tab=your_facebook_information');
    cy.get('[data-testid=settings_section_delete_your_account] > .fbSettingsListLink > .fbSettingsListItemEdit > .fbSettingsListItemEditText').click();
    cy.get('#deletion').click();
    cy.get('#continue_deactivate_delete').click();
    cy.get('.rfloat > .selected').click();
    cy.get(':nth-child(5) > input').type(password);
    cy.get('.layerConfirm').click();
    cy.wait(2000);
    // cy.get('.layerConfirm').click();
}

function initializeCredentials() {
    let mail = Cypress.env('user');
    let password = Cypress.env('password');
    return { mail, password };
}

function login(mail, password) {
    cy.visit('https://facebook.com');

    
    cy.focused().type(mail);
   
    cy.get('[data-testid=royal_pass]').type(password);
    cy.get('[data-testid=royal_login_button]').click();
    
    // cy.get(':nth-child(2) > .inputtext').type(password)
    // cy.get(':nth-child(5) > ._42ft').click();
    
}
