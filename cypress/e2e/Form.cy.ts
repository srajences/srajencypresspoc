import { FormPageLocators } from "../locators/FormPageLocators";
import { generateFakeData } from "../utils/dataGenerator";
import {navigate} from '../utils/navigate';
before(()=>{
     generateFakeData();
})
describe ('Data Generation Testing',() =>{
    it('Testing fake generation functionality',()=>{
        cy.fixture('requiredData').then((data)=>{
            const url:string = data.url2;
            navigate(url);
            });
            cy.get(FormPageLocators.button).click();
            cy.fixture('dataRequired').then((data1)=>{
                const name:string = data1.name;
                const lastName:string = data1.lastName;
                const email:string = data1.email;
                const textArea:string = data1.textArea;
                cy.get(FormPageLocators.firstName).should('be.visible').type(name);
                cy.get(FormPageLocators.lastName).should('be.visible').type(lastName);
                cy.get(FormPageLocators.email).should('be.visible').type(email);
                cy.get(FormPageLocators.textArea).should('be.visible').type(textArea);
            })

    });
});