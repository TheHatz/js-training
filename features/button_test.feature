#features/test.feature
Feature: Running Cucumber with Protractor
  Hello World Test
  Verify that I can run a cucumber protractor test
  To verify that my simple button click page is working correctly

  Scenario: Protractor and Cucumber Test
    Given I go to "http://localhost:8080/"
    When I click the "Submit" button
    Then the div should change color