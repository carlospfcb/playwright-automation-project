const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageobjects/LoginHelper');

let page; 

test('Login Exitoso', async ({browser}) => {
  // Crear un contexto y página manualmente
  const context = await browser.newContext();
  page = await context.newPage();
  const loginPage = new LoginPage(page);
  await loginPage.navigateToURL();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);
});


