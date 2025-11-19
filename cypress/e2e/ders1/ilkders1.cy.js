describe('Test №1', function () {
  it("TC01 - Test №1", function () {
    cy.visit('https://www.edu.goit.global/account/login');

    cy.get('#user_email').type('user888@gmail.com')
    cy.get('#user_password').type('1234567890')
    cy.get('.next-1jphuq5').click();
    cy.wait(12000);
    cy.get('#open-navigation-menu-mobile').click()
    cy.wait(5000)
    cy.scrollTo('bottom');
    cy.wait(5000)
    cy.get(':nth-child(12) > .next-bve2vl').click()




    



  });
});


describe('Test №2', function (){
  it('TC02  - Test №2',function(){
  cy.visit('https://www.edu.goit.global/account/login');

    cy.get('#user_email').type('testowyqa@qa.team')
    cy.get('#user_password').type('QA!automation-1')
    cy.get('.next-1jphuq5').click();
    cy.wait(12000)
    cy.get('#open-navigation-menu-mobile').click()
    cy.scrollTo('bottom');
    cy.get(':nth-child(8) > .next-bve2vl').click();






  });



});