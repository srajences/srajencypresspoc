import cypress from 'cypress';
import { AddCartPageLocators } from '../locators/AddCartPageLocators';
import { PageTextValues } from '../pageEnums/PageTextValues';
import { Runnable } from 'mocha';
export class AddCartFunctions{
    static selectLocation(){
        cy.fixture('requiredData').then((data)=>{
            const location = data.Location;
            cy.get(AddCartPageLocators.toggleButton).should('be.visible').click();
            cy.get(AddCartPageLocators.locationfiled).should('be.visible').click();
            cy.get(AddCartPageLocators.parentElement).invoke('css','z-index','0')
            cy.get(AddCartPageLocators.inputLocationField).should('be.visible').type(location);
            cy.get(AddCartPageLocators.inputBar).should('be.visible').type('{enter}').wait(2000).type('{enter}');
            cy.get(AddCartPageLocators.confirmButton).should('be.visible').click();
        });

    }
    static addFoodItems(){
        cy.get(AddCartPageLocators.menuSelect).should('be.visible').invoke('click');
        cy.get(AddCartPageLocators.productPageName).should('be.visible').invoke('text').then((text)=>{
            expect(text).to.eq(PageTextValues.MenuPageName);
        });
        cy.get(AddCartPageLocators.addToCart).should('be.visible').click();
        cy.get(AddCartPageLocators.continueButton).should('be.visible').click();
        
 }
}






