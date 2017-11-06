describe('clicking the button', function() {
  it('should toggle the qa-red/qa-blue class to the main-div ', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost:8080');
    expect(browser.getCurrentUrl()).toBe('http://localhost:8080/');
    const mainDiv = element(by.className('qa-main-div'));
    expect(mainDiv.getAttribute('class')).toContain('qa-blue');
    element(by.buttonText('Submit')).click();
    expect(mainDiv.getAttribute('class')).toContain('qa-red');
    expect(mainDiv.getAttribute('class')).not.toContain('qa-blue');
  });
});
