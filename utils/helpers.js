class Helpers {
  constructor(page) {
    this.page = page;
  }

  // Verificar si un elemento es visible
  async isElementVisible(target) {
    const locator = typeof target === 'string' ? this.page.locator(target) : target;
    try {
      await locator.waitFor({ state: 'visible' });
      return true;
    } catch {
      return false;
    }
  }

  // Navegar a una URL con espera
  async navigate(url) {
    await this.page.goto(url);
  }

  // Click con espera
  async clickElement(locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.click();
  }

  // Rellenar un campo de texto
  async fillInput(locator, value) {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(value);
  }

  // Seleccionar opción de un dropdown
  async selectOption(locator, optionValue) {
    await locator.waitFor({ state: 'visible' });
    await locator.selectOption(optionValue);
  }

  // Marcar un checkbox
  async checkElement(locator) {
    await locator.waitFor({ state: 'visible' });
    await locator.check();
  }

  // Obtener texto de un elemento
  async getText(locator) {
    await locator.waitFor();
    return await locator.textContent();
  }

  // Validar URL actual
  async validateUrl(expectedUrl) {
    const currentUrl = this.page.url();
    return currentUrl.includes(expectedUrl);
  }
}

module.exports = { Helpers };
