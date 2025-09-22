const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageobjects/Login');

test('Login exitoso', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/.*inventory/);
});
