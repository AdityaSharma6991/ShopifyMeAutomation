export class ProductPage{

    productPage_addToCart = 'Add to cart'
    productPage_cartCounter= '#cart-icon-bubble > div > span.visually-hidden'


    clickOnAddToCart() {
        cy.contains(this.productPage_addToCart).click();
        cy.wait(2000);
    }

    validateCartCounter(c) {
        cy.scrollTo('top')
        cy.wait(1000)
        let cartText = c + ' items'
        cy.get(this.productPage_cartCounter).should('include.text', cartText)
    }

}