export class Navigate {
/*This function handles the webPopup to access the location. It will make it false*/
    static HandleLocationPopup(){
        Cypress.on('window:confirm',(message)=>{
            if(message.includes('Know your location')){
                return false;
            }
        })
    }
/*This functions helps to navigate to burgerKing website*/
    static navigateTo(url:string):void{
        cy.viewport(1200,800);
        cy.visit(url);
    }
}
export const navigate = Navigate.navigateTo;
