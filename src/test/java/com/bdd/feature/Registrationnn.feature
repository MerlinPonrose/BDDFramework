@Register
Feature: Registration Page

Background:
Then User validate the page title is "Register"

@Test
Scenario: Validation of text fields
When User click the firstname and enter the value "TestFirstName"
And User click lastname and enter "TestLastname" in lastname field
And User click Address field and enterthe address "TestAddress"
And User click email and enter "abc@gmail.com"
And User click phonenumber and enter the value "124555"

@Regression
Scenario: Validate RadioButton
When User clicks the Female radio button
Then User validates radio button is selected

