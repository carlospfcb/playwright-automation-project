const { test, expect } = require('@playwright/test');
// const LoginPage = require('../pageobjects/LoginHelper');
const { LoginPage } = require('../pageobjects/LoginHelper');
const { InventoryPage } = require('../pageobjects/inventory'); 

let page; 

test.beforeAll(async ({ browser }) => {
  // Crear un contexto y página manualmente
  const context = await browser.newContext();
  page = await context.newPage();
  const loginPage = new LoginPage(page);
  await loginPage.navigateToURL();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);
});


test('Cerrando sesion', async () => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.openMenu();
  await inventoryPage.signOut();
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});


