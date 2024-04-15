const { expect } = require('@playwright/test');

export class HomePage{
    constructor(page){
        this.page = page
    }

    async PesquisarProduto(produto){
        await this.page.locator("id=cb1-edit").fill(produto)
        await this.page.locator("xpath=//div[@aria-label='Buscar']").click()
        await this.page.locator("xpath=(//h2[@class='ui-search-item__title'])[1]").click()
    }
}
