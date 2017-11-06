describe('home page', function() {
  it('should add a todo', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost:8080');
    expect(browser.getCurrentUrl()).toBe('http://localhost:8080/');
    element(by.buttonText('Submit')).click();
    let box = element(by.className('qa-main-div'));
    expect(box.getAttribute('class')).toContain('qa-red');
  });
});
