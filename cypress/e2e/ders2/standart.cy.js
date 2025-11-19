

describe('standart test yazma',() => {

    it('TC_01 Standart test',() => {

        cy.visit(' https://www.edu.goit.global/account/login')
        cy.wait(8000)
        cy.get('.next-10stgr7 > .next-c1vj7d').should("be.visible").and("have.text","Login")
        cy.get('#user_email').should("be.visible").and("exist");
        cy.get('#user_password').should("be.visible").and("exist");
        cy.get('.next-1jphuq5').should("be.visible").and("exist");
        cy.get('.next-1f1fv1i > .next-1qrvie4').should("be.visible").and("have.text","I can't remember the password")
        



    });



});