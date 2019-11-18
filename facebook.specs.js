describe('This visits facebook.com', () => {

    it('', () => {
        let mail = 'mvq53408@bcaoo.com';
        let password = 'qwertz1234';
        cy.visit('https://facebook.com');
        cy.focused().type(mail);
        cy.get(
            '[data-testid=royal_pass]'
            ).type(password);
            

        cy.get('[data-testid=royal_login_button]').click();
        cy.visit('https://www.facebook.com/settings?tab=your_facebook_information');
        cy.get('[data-testid=settings_section_delete_your_account] > .fbSettingsListLink > .fbSettingsListItemEdit > .fbSettingsListItemEditText').click();
        cy.get('#deletion').click();
        cy.get('#continue_deactivate_delete').click();
        cy.get('.rfloat > .selected').click();
        cy.get(':nth-child(5) > input').type(password);
        cy.get('.layerConfirm').click();
        cy.wait(2000);

        //cy.get('_42ft _4jy0 layerConfirm uiOverlayButton _4jy3 _4jy1 selected _51sy').click();
        cy.get('.layerConfirm').click();
        

        
    
    })
})