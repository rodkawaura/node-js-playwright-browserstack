const { expect, test } = require('@playwright/test');
import { HomePage } from './Pages/HomePage';
import { ProdutoPage } from './Pages/ProdutoPage';
import { CarrinhoPage } from './Pages/CarrinhoPage';


test('Adicionar produto ao carrinho', async ({ page }) => {
  const homePage = new HomePage(page)
  const produtoPage = new ProdutoPage(page)
  const carrinhoPage = new CarrinhoPage(page)

  await page.goto('https://www.mercadolivre.com.br/');
  await homePage.PesquisarProduto('pc gamer')
  var produto = await produtoPage.GetNomeProduto()
  await produtoPage.AdicionarProdutoCarrinho()
  await carrinhoPage.ConferirProduto(produto)
});
