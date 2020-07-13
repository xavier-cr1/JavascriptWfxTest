// spec.js
var wefoxLoginPage = require('./page-object-models/loginPage');
var wefoxHomePage = require('./page-object-models/homePage');

describe('Go to Wefox login page', function () {
  it('should have a title', function() {
    wefoxLoginPage.goTo();

    expect(browser.getTitle()).toEqual('Anmeldung - wefox', 'landed in a unexpected page.');
  });

  it('should let the user login with valid credentials', function() {
    
    wefoxLoginPage.enterCredentials('aqawefox+testtecnico@wefoxgroup.com', 'qwertyasdf');

    browser.sleep(20000);
  });
});

describe('Is in Wefox home page', function () {
  it('should have loaded the agent image', function() {

    expect(wefoxHomePage.getAgentImage().isPresent());
  });
});