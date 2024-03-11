import { AddCartFunctions } from '../pageFunction/AddCartFunctions';
import {navigate} from '../utils/navigate';
/* Author: Srajen Singh*/

 /* This Test case basically checks the add items in cart functionality*/
describe('Add items in carts',()=>{
    it('This verifies the adding items in cart functionality',()=>{
        cy.fixture('requiredData').then((data)=>{
            const url:string = data.url;
            const location:string = data.Location;
            navigate(url);
            AddCartFunctions.selectLocation(location);
        });
        AddCartFunctions.addFoodItems();
    });
});


