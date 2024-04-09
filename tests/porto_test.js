const { expect, test } = require('@playwright/test');

test('Acessar Porto', async ({ page }) => {
  // visit the site
  await page.goto('https://www.portoseguro.com.br/');

  await page.click("//span[text()='Área do Cliente']");
});
