/* This file contains the require locators for Home Page Validation*/
export const dineInTakeway = 'div.toggle.delivery div.u_cursor_pointer.toggle__left '
export const parentTopBarLocator = 'ul.nav-menu__list.delivery';
export const childSelector = (index: number) => `ul.nav-menu__list.delivery li:nth-child(${index})`; 
export const HomePageLocators = {
   dineInTakeway,
   parentTopBarLocator,
   childSelector
}

