declare module 'faker' {
     interface FakerStatic {
      // Define the structure of Faker.js methods you intend to use
      name: {
        firstName(): string;
        lastName(): string;
      };
      internet: {
        email(): string;
      };
      lorem: {
        sentence(): string;
      };
      // Add more methods as needed
    }
   
    const faker: FakerStatic;
    export default faker;
  }