var wefoxHomePage = require('./page-object-models/homePage');

describe('Is in Wefox home page', function () {
  it('should have loaded the agent image', function() {

    expect(wefoxHomePage.getAgentImage().isPresent()).toBeFalsy('agent image not loaded properly.');
  });
});