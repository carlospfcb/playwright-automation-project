const { Helpers } = require('../utils/helpers');

class InventoryPage {
  constructor(page) {
    this.page = page;
    this.helpers = new Helpers(page); // instanciamos Helpers aquí

    // Selectores
    this.openMenuOption = page.getByRole('button', { name: 'Open Menu' });
    this.signOutOption = page.locator('[data-test="logout-sidebar-link"]');
  }

  async openMenu() {
    await this.helpers.clickElement(this.openMenuOption);
  }

  async signOut() {
    await this.helpers.clickElement(this.signOutOption);
  }
}

module.exports = { InventoryPage };