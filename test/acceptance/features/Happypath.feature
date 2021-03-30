Feature: Happy paths

Scenario: Use can submit a cliam
Given I open the url "/"
When I click on the button ".govuk-button--start"
And I add "Seymour Pattisson" to the inputfield "#name"
And I click on the button "#submit"
When I click on the button "#propertyType"
When I click on the button "#submit"
When I click on the button "#accessible"
When I click on the button "#submit"
And I add "01" to the inputfield "#dateOfSubsidence__day"
And I add "01" to the inputfield "#dateOfSubsidence__month"
And I add "1970" to the inputfield "#dateOfSubsidence__year"
And I click on the button "#submit"
Then  I expect that the url contains "/claim/mine-type"
When I click on the button "#mineType"
And I click on the button "#submit"
And I add "kaz.iyiola@defra.gov.uk" to the inputfield "#email"



Scenario: Use can submit a cliam (Business)
Given I open the url "/"
When I click on the button ".govuk-button--start"
And I add "Seymour Pattisson" to the inputfield "#name"
And I click on the button "#submit"
When I click on the button "#propertyType-2"
When I click on the button "#submit"
When I click on the button "#accessible-2"
When I click on the button "#submit"
And I add "01" to the inputfield "#dateOfSubsidence__day"
And I add "01" to the inputfield "#dateOfSubsidence__month"
And I add "1970" to the inputfield "#dateOfSubsidence__year"
And I click on the button "#submit"
Then  I expect that the url contains "/claim/mine-type"
When I click on the button "#mineType"
And I click on the button "#submit"
And I add "kaz.iyiola@defra.gov.uk" to the inputfield "#email"


Scenario: Use can submit a cliam (muiltiple mine)
Given I open the url "/"
When I click on the button ".govuk-button--start"
And I add "Seymour Pattisson" to the inputfield "#name"
And I click on the button "#submit"
When I click on the button "#propertyType-2"
When I click on the button "#submit"
When I click on the button "#accessible-2"
When I click on the button "#submit"
And I add "01" to the inputfield "#dateOfSubsidence__day"
And I add "01" to the inputfield "#dateOfSubsidence__month"
And I add "1970" to the inputfield "#dateOfSubsidence__year"
And I click on the button "#submit"
Then  I expect that the url contains "/claim/mine-type"
When I click on the button "#mineType"
And I click on the button "#mineType-1"
And I click on the button "#mineType-2"
And I click on the button "#mineType-3"
And I click on the button "#submit"
And I add "kaz.iyiola@defra.gov.uk" to the inputfield "#email"

