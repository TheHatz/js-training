var myStepDefinitionsWrapper = function () {

    this.Given(/^I go to "http:\/\/localhost:8080\/"$/, function (arg1, callback) {
        callback.pending();
    });

    this.When(/^I click the "([^"]*)" button$/, function (arg1, callback) {
        callback.pending();
    });

    this.Then(/^the div should change color$/, function (callback) {
        callback.pending();
    });
};
module.exports = myStepDefinitionsWrapper;