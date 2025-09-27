// Import custom test and expect from fixtures
const { test, expect } = require('../fixtures');
const { LoginPage } = require('../../pages/LoginPage');

test.describe('Login Page Tests', () => {

 test('@LoginPage @Regression Login page', async ({ pageObject }) => {
       const loginPage = pageObject.setPageObject(LoginPage); 
       await loginPage.navigate();

       await loginPage.setUsername('practice');
       await loginPage.setPassword('SuperSecretPassword!');

       await loginPage.clickLoginButton();

       await expect(loginPage.loggedInMessage).toHaveText('You logged into a secure area!');

     });

});