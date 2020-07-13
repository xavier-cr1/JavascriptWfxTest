var LoginPage = function() {
  const emailInput = element(by.css('[t-selector="login-username-input"]'));
  const passwordInput = element(by.css('[t-selector="login-password-input"]'));
  const loginButton = element(by.css('[t-selector="login-submit"]'));

  this.goTo = async function() {
    await browser.get('https://my.wefox.de/login');
  };

  this.enterCredentials = function (email, password) {
    emailInput.sendKeys(protrator.Key.chord(protrator.Key.CONTROL, 'a'));
    emailInput.sendKeys(email);

    passwordInput.sendKeys(protrator.Key.chord(protrator.Key.CONTROL, 'a'));
    passwordInput.sendKeys(password);

    loginButton.click();
  }
};
module.exports = new LoginPage();