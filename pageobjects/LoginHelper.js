// pages/LoginPage.js
const { fillInput, clickElement } = require('../utils/helpers');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator('#username');
    this.passwordField = page.locator('#username');
    this.loginButton = page.locator('#username');
  }

  async login(username, password) {
    await fillInput(this.page, this.usernameField, username);
    await fillInput(this.page, this.passwordField, password);
    await clickElement(this.page, this.loginButton);
  }
}

module.exports = { LoginPage };