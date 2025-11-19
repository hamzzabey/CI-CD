class Login2 {

     url="https://www.edu.goit.global/account/login"
     title=".next-10stgr7 > .next-c1vj7d"
     email="#user_email"
     password='#user_password'
     loginButton='.next-1jphuq5'
     forgetPassword=".next-1f1fv1i > .next-1qrvie4"

    // URL'e gitmek için method - parametreli hali
   navigateUrl(url) {
    cy.visit(this.url);
    cy.url().should('include', '/login');

}

    // Sayfa başlığını kontrol et
    checkTitle(title = "Login") {
        cy.get(this.title)
            .should("be.visible").
            and("have.text", title);
    }

    // Email alanını kontrol et
    checkEmailField() {
        cy.get(this.email).should("be.visible").and("exist");
    }

    // Şifre alanını kontrol et
    checkPasswordField() {
        cy.get(this.password)
            .should("be.visible")
            .and("exist");
    }

    // Giriş butonunu kontrol et
    checkLoginButton() {
        cy.get(this.loginButton)
            .should("be.visible")
            .and("exist");
    }

    // Şifremi unuttum link kontrolü
    forgetPassword(text) {
        cy.get(this.forgetPassword)
            .should("be.visible")
            .and("have.text", text);
    }
}

export default new Login2();