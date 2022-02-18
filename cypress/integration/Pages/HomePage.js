export class HomePage {

    homePage_catalogTab = '#shopify-section-header > sticky-header > header > nav > ul > li:nth-child(2) > a > span'
    homePage_cartButton = '#cart-icon-bubble'
    homePage_HomePageValidationHeading = "#Banner-template--14211560210517__image_banner > div.banner__content.banner__content--flex-end.page-width > div > h2 > span"


    validateNavigationToHomepage() {
        cy.get(this.homePage_HomePageValidationHeading).should("include.text", "Talk about your brand");
    }

    clickOnCatalogTab() {
        cy.get(this.homePage_catalogTab).click();
    }

    clickOnCartButton() {
        cy.get(this.homePage_cartButton).click()
    }

}