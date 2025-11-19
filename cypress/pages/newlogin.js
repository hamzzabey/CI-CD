const Login = {
  navigateUrl() {
    cy.visit('https://www.edu.goit.global/account/login');
  },

  checkTitle(title) {
    cy.title().should('include', title);
  },

  checkEmailField() {
    cy.get('#user_email').should('be.visible');
  },

  checkPasswordField() {
    cy.get('#user_password').should('be.visible');
  },

  checkLoginButton() {
    cy.get('.next-1jphuq5').should('be.visible');
  },

  forgetPassword(text) {
    cy.contains(text).should('be.visible');
  }
};

export default Login;