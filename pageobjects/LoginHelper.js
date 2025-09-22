// pages/LoginPage.js
const { navigate, fillInput, clickElement, validateUrl } = require('../utils/helpers');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = '#user-name';
    this.passwordField = '#password';
    this.loginButton = '#login-button';
  }

  async navigateToURL() {
    await navigate(this.page, 'https://www.saucedemo.com/');
  }

  async login(username, password) {
    await fillInput(this.page, this.usernameField, username);
    await fillInput(this.page, this.passwordField, password);
    await clickElement(this.page, this.loginButton);
  }

  async isLoginSuccessful() {
    return await validateUrl(this.page, '/inventory');
  }
}


module.exports = { LoginPage };