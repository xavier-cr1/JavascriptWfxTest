var LoginPage = function() {
  const emailInput = element(by.css('[t-selector="login-username-input"]'));
  const passwordInput = element(by.css('[t-selector="login-password-input"]'));
  const loginButton = element(by.css('[t-selector="login-submit"]'));

  this.goTo = async function() {
    await browser.get('https://my.wefox.de/login');
  };

  this.typeEmail = async function(name) {
    await this.emailInput.sendKeys(name);
  };

  this.typePassword = async function(name) {
    await passwordInput.clear().sendKeys(name);
  };

  this.confirmCredentials = function () {
    loginButton.click();
  }
};
module.exports = new LoginPage();