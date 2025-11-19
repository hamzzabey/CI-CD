import Login2 from "../../pages/login";
describe("Hooks", () => {
    // before bütün testlerden önce 1 kez çalışır
    // after bütün testlerden sonra 1 kez çalışır
    // beforeEach her testen önce 1 kez çalışır
    // afterEach her testen sonra 1 kez çalışır
    
    let userData;
    
    before(() => {
        cy.log("::::::: before method çalisti")
     cy.fixture("data")
    });
    
    
    after(() => {
         cy.log("::::::: after method çalisti")

    });

    beforeEach(() => {
        cy.log("::::::: beforeEach method çalisti")

    });



    afterEach(() => {
        cy.log("::::::: afterEach method çalisti")

    });
    
    it("TC_01",() => {
        cy.log("::::::: TC_01 method çalisti")


        });


     it("TC_02", () => {
        cy.log("::::::: TC_02 method çalisti")

});


});   