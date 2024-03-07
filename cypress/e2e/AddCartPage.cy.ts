import { AddCartFunctions } from '../pageFunction/AddCartFunctions';
import {navigate} from '../utils/navigate';
/* Author: Srajen Singh*/
beforeEach(()=>{
    
    cy.fixture('requiredData').then((data)=>{
        const url = data.url;
        navigate(url);
    });
});
    /* This Test case basically checks the add items in cart functionality*/
describe('Add items in carts',()=>{
    it('This verifies the adding items in cart functionality',()=>{
        AddCartFunctions.selectLocation();
        AddCartFunctions.addFoodItems();
    });
});


