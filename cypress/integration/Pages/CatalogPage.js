export class CatalogPage {

    catalogPage_title = 'Products – QA-Practical-Test'
    catalogPage_ithElementPrefix= '#product-grid > li:nth-child('
    catalogPage_ithElementSuffix= ')'
    
    
    validateNavigationToCatalogpage() {
        cy.title().should('eq', this.catalogPage_title)
    }

    clickOnIthProduct(a) {
        cy.get(this.catalogPage_ithElementPrefix + a + this.catalogPage_ithElementSuffix).click();
    }

}