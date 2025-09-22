const { test, expect } = require('@playwright/test');
// const LoginPage = require('../pageobjects/LoginHelper');
const { LoginPage } = require('../pageobjects/LoginHelper'); 

test('Login exitoso', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigateToURL();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.isLoginSuccessful();
  //await expect(page).toHaveURL(/.*inventory/);

});

