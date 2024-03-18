import { HomePageLocators, childSelector, parentTopBarLocator } from '../locators/HomePageLocators';
import { PageTextValues,menuItems} from '../pageEnums/PageTextValues';
/*This function basically performs the Homepage component validations*/
export class HomePageFunctions{
    static validateTitle(expectedTitle:string){
        cy.title().should('eq',expectedTitle);
    }
    static validateHeaderPageComponents(){
        cy.get(HomePageLocators.dineInTakeway).should('be.visible').invoke('text').should('include',PageTextValues.DineInTakewayText)
        cy.get(parentTopBarLocator).as('parentElements');
        cy.get('@parentElements').find('li').each(($child,index)=>{
                cy.get(childSelector(index+1)).should('be.visible').invoke('text').should('include',menuItems[index]);
            })

    }
}