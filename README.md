**OBJECTIVES-**

CHECKOUT DETAILS VERIFICATION
You need to create a module in which the following points must be covered.
- Open Chrome/Electron browser
- Visit URL(“https://qa-practical-test.myshopify.com”)
- Enter website password: brauff
- Redirect to “Catalog” by clicking it from top/header navigation menu
- Add 1st Product to cart
- Add 2nd Product to cart
- Cart Page: Verify Product Price, and Total Price
- Proceed to checkout
- Checkout Page: Verify Product Price, and Total Price

CART VERIFICATION WITH OFFER
You need to create a module in which the following points must be covered.
- Open Chrome/Electron(if cypress) browser
- Visit URL(“https://qa-practical-test.myshopify.com”)
- Enter website password: brauff
- Redirect to “Catalog” by clicking it from top/header navigation menu
- Add 1st Product to cart
- Cart Page: Verify Product Price (Without Offer)
- Increase Quantity to eligible for discount offer
- Verify Product Price (With discount Applied)

**SOLUTION-**
I divided the entire process into a set of 5 pages-
    1- LoginPage
    2- HomePage
    3- CatalogPage
    4- ProductPage
    5- CartPage

With all the required actions and identifiers in the beginning of the code

Then i designed the featurefile that can be easily understood by non-technical personell, and can also be easily customised by them (eg the code will run for first 'n' products)

Following that a stepdefinition file was created which had lines of code corresponding to each step in the feature file

There isn't anything extra that needs to be downloaded and configured to run this test apart from the regular vsCode and cypress setup, as i have already run "npm install --save-dev cypress-cucumber-preprocessor" and edited packaje.json and cypress.json appropriately
