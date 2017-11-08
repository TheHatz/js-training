class AppPage {

  constructor(){
    this.submit = element(by.className('qa-button'));
  }


  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('/');
  }

  clickSubmit() {
    return this.submit.click();

  }

  getClickResults() {
    return element(by.className('qa-main-div'))
  }
}

module.exports = AppPage;
