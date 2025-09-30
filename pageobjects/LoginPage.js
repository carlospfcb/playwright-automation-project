const { Helpers } = require('../utils/helpers');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.helpers = new Helpers(page); // instanciamos Helpers aquí

    // Selectores
    this.usernameField = page.locator('#user-name');
    this.passwordField = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async navigateToURL() {
    await this.helpers.navigate('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.helpers.fillInput(this.usernameField, username);
    await this.helpers.fillInput(this.passwordField, password);
    await this.helpers.clickElement(this.loginButton);
  }

  async isLoginSuccessful() {
    return await this.helpers.validateUrl('/inventory');
  }
}

module.exports = { LoginPage };
