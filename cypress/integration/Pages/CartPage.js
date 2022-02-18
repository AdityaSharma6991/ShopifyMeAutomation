export class CartPage {

    cartPage_productPriceIdPrefix = '#CartItem-'
    cartPage_productPriceIdSuffix = ' > td.cart-item__totals.right.small-hide > div.cart-item__price-wrapper > span > span > span'
    cartPage_title = 'Your Shopping Cart – QA-Practical-Test'
    cartPage_totalProductPrice= 1408.00
   
    
    validateNavigationToCartpage() {
        cy.title().should('eq', this.cartPage_title)
    }

    validateTotalPrice() {
        var Total = 0;
        cy.get('#main-cart-items > div > table > tbody')
        .find('tr > td:nth-child(5) > div:nth-child(2) >span > span')
        .each(($el, index) => {
                const price = $el.text().substring(4).match("\\d{1,3}[,\\.]?(\\d{1,2})?");
                // expect(price).to.equal(parseFloat(829.00).toFixed(2))
                Total= Total + parseFloat(price);
            }).then(() => {
                expect(Total).to.equal(this.cartPage_totalProductPrice)
            })
    }

}