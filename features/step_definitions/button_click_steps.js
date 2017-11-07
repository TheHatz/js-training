var expect = require('chai').expect;
var defineSupportCode = require('cucumber').defineSupportCode;
var AppPage =  require('./app.po');

defineSupportCode(({Given, When, Then, Before}) => {

  Before(() => {
    app = new AppPage();
  });

  Given('I am on the test site',
    () => app.navigateTo());

  When('I click the submit button',
    () => app.clickButton());

  Then('I should see the div change color',
    () => app.getClickResults((ele) => {
      expect(ele.getAttribute('class')).to.contain('qa-red')
    }))
});
