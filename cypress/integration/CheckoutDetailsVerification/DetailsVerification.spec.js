import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage';
import { CatalogPage } from '../Pages/CatalogPage';
import { ProductPage } from '../Pages/ProductPage';
import { CartPage } from '../Pages/CartPage';

const loginPage = new LoginPage;
const homePage = new HomePage;
const catalogPage = new CatalogPage;
const productPage= new ProductPage;
const cartPage= new CartPage;

Given('the browser is open with the website {string}', url => {
    loginPage.navigateTo(url)
    // LoginPage.navigateTo(url);
});

When('user enters the password {string} and click Enter', password => {
    loginPage.enterPasswordAndClickEnter(password);
});

Then('user should be navigated to the Homepage', () => {
    homePage.validateNavigationToHomepage()
});

And('user clicks on Catalog button', () => {
    homePage.clickOnCatalogTab();
});

Then('user should be navigated to CatalogPage', () => {
    catalogPage.validateNavigationToCatalogpage();
});

When('the user adds first {int} products from the products grid on CatalogPage to cart', n => {
    for (let i = 1; i <= n; i++) {
        catalogPage.clickOnIthProduct(i);
        productPage.clickOnAddToCart();
        cy.go('back');
    }
})

Then('the cart should display counter as {int}', productCountInCart =>{
    productPage.validateCartCounter(productCountInCart);
})

And('user opens the cart, the CartPage opens', ()=>{
    homePage.clickOnCartButton();
    cartPage.validateNavigationToCartpage();
})

Then('the sum of prices of all products is equal to the total price of products on the cart page', () =>{
    cartPage.validateTotalPrice()
})