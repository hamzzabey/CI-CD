import Login from "../../pages/login";
import Login2 from "../../pages/login";
describe("Page Object Model - POM", () => {

    it("TC_02 Page Object Pattern", () => {
Login.navigateUrl();
Login.checkTitle("Login")
Login.checkEmailField();
Login.checkPasswordField();
Login.checkLoginButton();
Login.forgetPassword("I can't remember the password")

        });
     it("TC_03 Page Object Pattern", () => {
Login2.navigateUrl();
Login2.checkTitle("Login")
Login2.checkEmailField();
Login2.checkPasswordField();
Login2.checkLoginButton();
Login2.forgetPassword("I can't remember the password")

});


});   
