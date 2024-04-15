const { expect, test } = require('@playwright/test');
import { HomePage } from './Pages/HomePage';
import { ProdutoPage } from './Pages/ProdutoPage';


test('Pesquisar', async ({ page }) => {
  const homePage = new HomePage(page)
  const produtoPage = new ProdutoPage(page)

  // visit the site
  await page.goto('https://www.mercadolivre.com.br/');
  await homePage.PesquisarProduto('pc gamer')
  //var produto = produtoPage.GetNomeProduto()
  //console.log(produto)
});
