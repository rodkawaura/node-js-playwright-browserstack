const { expect } = require('@playwright/test');

export class ProdutoPage{
    constructor(page){
        this.page = page
    }

    async GetNomeProduto(){
        console.log(this.page.locator('xpath=//h1[@class="ui-pdp-title"]').getAttribute(name))
        var nomeProduto = 'abc'
        return nomeProduto
    }
}
