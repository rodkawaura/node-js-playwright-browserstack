const { expect } = require('@playwright/test');

export class ProdutoPage{
    constructor(page){
        this.page = page
    }

    async GetNomeProduto(){
        var nomeProduto = await this.page.locator("xpath=//h1[@class='ui-pdp-title']").textContent()
        return nomeProduto
    }

    async AdicionarProdutoCarrinho(){
        await this.page.locator("xpath=//span[contains(text(),'Adicionar ao carrinho')]")
        await this.page.locator("xpath=//span[contains(text(),'Ir para o carrinho')]")
    }
}
