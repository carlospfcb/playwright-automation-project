// Verificar si un elemento es visible
async function isElementVisible(page, selector) {
  try {
    await page.waitForSelector(selector, { state: 'visible' });
    return true;
  } catch {
    return false;
  }
}

//Navegar a una URL con espera
async function navigate(page, url) {
  await page.goto(url);
}

// Click con espera
async function clickElement(page, selector) {
  await page.waitForSelector(selector, { state: 'visible' });
  await page.click(selector);
}

// Rellenar un campo de texto
async function fillInput(page, selector, value) {
  await page.waitForSelector(selector, { state: 'visible' });
  await page.fill(selector, value);
}

// Seleccionar opción de un dropdown
async function selectOption(page, selector, optionValue) {
  await page.waitForSelector(selector, { state: 'visible' });
  await page.selectOption(selector, optionValue);
}

// Marcar un checkbox
async function checkElement(page, selector) {
  await page.waitForSelector(selector, { state: 'visible' });
  await page.check(selector);
}

// Obtener texto de un elemento
async function getText(page, selector) {
  await page.waitForSelector(selector);
  return await page.textContent(selector);
}

// Obtener la URL actual
async function validateUrl(page, expectedUrl) {
  const currentUrl = page.url();
  return currentUrl.includes(expectedUrl); 
  // también podrías usar === si quieres coincidencia exacta
}

module.exports = {
  isElementVisible,
  clickElement,
  fillInput,
  selectOption,
  checkElement,
  getText,
  navigate,
  validateUrl
};