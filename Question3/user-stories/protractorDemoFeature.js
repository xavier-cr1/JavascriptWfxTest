// spec.js
var wefoxLoginPage = require('./page-object-models/loginPage');

describe('Go to Wefox login page', function () {
  it('should have a title', function() {
    wefoxLoginPage.goTo();

    browser.sleep(5000);

    expect(browser.getTitle()).toEqual('Anmeldung - wefox', 'landed in a unexpected page.');
  });

  it('should let the user login with valid credentials', function() {
    wefoxLoginPage.typeEmail('aqawefox+testtecnico@wefoxgroup.com');

    wefoxLoginPage.typePassword('qwertyasdf');

    wefoxLoginPage.confirmCredentials();

    browser.sleep(5000);
  });
});