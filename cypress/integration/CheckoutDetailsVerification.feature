Feature: Checkout Details Verification

  Background: prerequisites

    Given the browser is open with the website 'https://qa-practical-test.myshopify.com'
    When user enters the password 'brauff' and click Enter
    Then user should be navigated to the Homepage
    And user clicks on Catalog button
    Then user should be navigated to CatalogPage

  Scenario: Validate the sum of prices of individual products is equal to the total price on cart page
    Given the user adds first 2 products from the products grid on CatalogPage to cart
    Then the cart should display counter as 2
    And user opens the cart, the CartPage opens
    Then the sum of prices of all products is equal to the total price of products on the cart page