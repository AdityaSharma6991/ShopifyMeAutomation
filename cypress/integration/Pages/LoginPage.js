export class LoginPage {
 
    loginPage_PasswordTextBox= '#password'
    loginPage_EnterButton= 'button'

 
    navigateTo(url){
        cy.visit(url)
        cy.title().should('eq','QA-Practical-Test')
    }
 
    enterPasswordAndClickEnter(pwd){
        cy.get(this.loginPage_PasswordTextBox).type(pwd)
        cy.get(this.loginPage_EnterButton).click()
    }
 
}