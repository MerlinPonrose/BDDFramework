@RegisterMultipleData
Feature: Registration with Multiple data

@Regression
Scenario Outline: Validation of Registration form with multiple data
When User click the firstname and enter the value "<FirstName>"
And User click lastname and enter "<LastName>" in lastname field
And User click Address field and enterthe address "<Address>"
And User click email and enter "<Email>"
And User click phonenumber and enter the value "<PhoneNum>"
Then User validate the page title is "Register"


Examples:
| FirstName     | LastName     | Address     | Email         | PhoneNum |
| TestFirstName | TestLastname | TestAddress | abc@gmail.com | 124555   |
| Kokila        | testLastname | Perungudi   | xyz@gmail.com |8899      |
| aaa           | testt        | saidapet    | yyy@gmail.com | 7679     |
