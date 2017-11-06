describe('clicking the button', function() {
  it('should add the qa-red class to the main-div ', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost:8080');
    expect(browser.getCurrentUrl()).toBe('http://localhost:8080/');
    element(by.buttonText('Submit')).click();
    let mainDiv = element(by.className('qa-main-div'));
    expect(mainDiv.getAttribute('class')).toContain('qa-red');
  });
});
