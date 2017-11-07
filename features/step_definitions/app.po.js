let protractor = require('protractor')

class AppPage {

  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/');
  }

  clickButton() {
    return element(by.className('qa-button')).click();
  }

  getClickResults() {
    return element(by.className('qa-main-div'))
  }
}

module.exports = AppPage;
