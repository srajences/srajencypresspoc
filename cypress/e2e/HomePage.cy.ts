import {navigate} from '../utils/navigate';
import { HomePageFunctions } from '../pageFunction/HomePageFunctions';
import { PageTextValues } from '../pageEnums/PageTextValues';
/* Author: Srajen Singh*/
/* This Test file basically tests the Header components in home page of BurgerKing website*/
describe('Navigate Tests',()=>{
    it('This verifies the title,header and footer compotent in Home page',()=>{
        cy.fixture('requiredData').then((data)=>{
            const url = data.url;

            navigate(url);
        });
        HomePageFunctions.validateTitle(PageTextValues.HomePageTitle);
        HomePageFunctions.validateHeaderPageComponents();
    });
});