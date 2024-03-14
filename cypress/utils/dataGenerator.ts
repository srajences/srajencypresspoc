import * as faker from 'faker';
import * as fs from 'fs';
interface FakeData {
  firstName: string;
  lastName: string;
  email: string;
  enquiry: string;
}
 
export function generateFakeData(): FakeData {
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const enquiry = faker.lorem.sentence();

const data: FakeData = {firstName,lastName,email,enquiry};
cy.writeFile('cypress/fixtures/dataRequired.json',JSON.stringify(data,null,2)); 
  return data;
}