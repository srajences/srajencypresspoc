import { HomePageLocators } from '../locators/HomePageLocators';
import { PageTextValues } from '../pageEnums/PageTextValues';
/*This function basically performs the Homepage component validations*/
export class HomePageFunctions{
    static validateTitle(expectedTitle:string){
        cy.title().should('eq',expectedTitle);
    }
    static validateHeaderPageComponents(){
        cy.get(HomePageLocators.dineInTakeway).should('be.visible').invoke('text').then((text)=>{
            expect(text).to.eq(PageTextValues.DineInTakewayText)
        });
        cy.get(HomePageLocators.nearbuyStores).should('be.visible').invoke('text').then((text)=>{
            expect(text).to.eq(PageTextValues.NearBuyStoreText)
        });
        cy.get(HomePageLocators.kingDeals).should('be.visible').invoke('text').then((text)=>{
            expect(text).to.eq(PageTextValues.KingDealsText)
        });
        cy.get(HomePageLocators.loginComponent).should('be.visible').invoke('text').then((text)=>{
            expect(text).to.eq(PageTextValues.LoginText)
        });
        cy.get(HomePageLocators.cartComponent).should('be.visible').invoke('text').then((text)=>{
            expect(text).to.eq(PageTextValues.CartText)
        });

    }
}