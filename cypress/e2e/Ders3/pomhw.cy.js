import Login from "../../pages/newlogin";
import HomePage from "../../pages/homepage";

describe("Page Object Model - POM", () => {

  it("TC_01 - Page Object Pattern", () => {
    Login.navigateUrl();
    Login.checkTitle("Login");
    Login.checkEmailField();
    Login.checkPasswordField();
    Login.checkLoginButton();
    Login.forgetPassword("I can't remember the password");

    HomePage.openMenu();
    HomePage.scrollToBottom();
    HomePage.clickProfile();
  });

  it("TC_02 - Page Object Pattern", () => {
    Login.navigateUrl();
    Login.checkTitle("Login");
    Login.checkEmailField();
    Login.checkPasswordField();
    Login.checkLoginButton();
    Login.forgetPassword("I can't remember the password");

    HomePage.openMenu();
    HomePage.scrollToBottom();
    HomePage.clickSettings();
  });
});