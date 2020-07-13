var HomePage = function() {

  this.getAgentImage = function() {
     return element(by.className('wf-c-agent-card__image'));
  };

};
module.exports = new HomePage();