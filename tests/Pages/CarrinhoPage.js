const { expect } = require('@playwright/test');

export class CarrinhoPage{
    constructor(page){
        this.page = page
    }

    async ConferirProduto(produto){
        await expect(this.page.getByText(produto)).toBeVisible()
    }
}
