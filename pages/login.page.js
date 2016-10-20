'use strict'
// LoginPageObject
let LoginPage = (function () {
  /**
   * Contructor
   */
  function LoginPage() {
    this.userNameElement = element(by.model('loginController.loginUserInput.username'));
    this.passwordElement = element(by.model('loginController.loginUserInput.password'));
    this.loginBtnElement = element(by.id('loginButton'));
  }

  /**
   *
   */
  function MissingUserNameException() {
    this.message = "User Name is missing...";
  }

  /**
   *
   */
  function MissingPasswordException() {
    this.message = "Password is missing...";
  }


  /**
   *
   */
  LoginPage.prototype.fillUserName = function (userName) {
    if (userName == null) {
      throw MissingUserNameException();
    }
    this.userNameElement.sendKeys(userName);
  };

  /**
   *
   */
  LoginPage.prototype.fillPassword = function (password) {
    if (password == null) {
      throw MissingPasswordException();
    }
    this.passwordElement.sendKeys(password);
  };

  /**
   *
   */
  LoginPage.prototype.login = function (userName, password) {
    this.userNameElement.sendKeys(userName);
    this.passwordElement.sendKeys(password);
    this.loginBtnElement.click();
  };

  /**
   *
   */
  LoginPage.prototype.userNameElement = function () { return this.userNameElement; }

  /**
   *
   */
  LoginPage.prototype.passwordElement = function () { return this.passwordElement; }

  /**
   *
   */
  LoginPage.prototype.loginButtonElement = function () { return this.loginBtnElement; }

  return LoginPage;

})();

module.exports = LoginPage;
