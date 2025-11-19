class Login {
     

    // URL'e gitmek için method - parametreli hali
   navigateUrl() {
  cy.visit("https://www.edu.goit.global/account/login");
    cy.url().should('include', '/login');

}

    // Sayfa başlığını kontrol et
    checkTitle(title = "Login") {
        cy.get(".next-10stgr7 > .next-c1vj7d")
            .should("be.visible")
          .and("have.text", title);
    }

    // Email alanını kontrol et
    checkEmailField() {
        cy.get("#user_email").should("be.visible").and("exist");
    }

    // Şifre alanını kontrol et
    checkPasswordField() {
        cy.get('#user_password')
            .should("be.visible")
            .and("exist");
    }

    // Giriş butonunu kontrol et
    checkLoginButton() {
        cy.get('.next-1jphuq5')
            .should("be.visible")
            .and("exist");
    }

    // Şifremi unuttum link kontrolü
    forgetPassword(text) {
        cy.get(".next-1f1fv1i > .next-1qrvie4")
            .should("be.visible")
            .and("have.text", text);
    }
}

export default new Login();