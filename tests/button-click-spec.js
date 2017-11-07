describe('clicking the button', () => {
  it('should toggle the qa-red/qa-blue class on the main-div ', () => {
    browser.waitForAngularEnabled(false);
    browser.get('http://localhost:8080');
    expect(browser.getCurrentUrl()).toBe('http://localhost:8080/');
    const mainDiv = element(by.className('qa-main-div'));
    const button = element(by.buttonText('Submit'));

    expect(mainDiv.getAttribute('class')).toContain('qa-blue');
    button.click();
    expect(mainDiv.getAttribute('class')).toContain('qa-red');
    expect(mainDiv.getAttribute('class')).not.toContain('qa-blue');
    button.click();
    expect(mainDiv.getAttribute('class')).toContain('qa-blue');
    expect(mainDiv.getAttribute('class')).not.toContain('qa-red');
  });
});
