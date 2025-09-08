const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');

test('Login exitoso', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('usuario', 'clave');

  await expect(page).toHaveURL('/dashboard');
});
