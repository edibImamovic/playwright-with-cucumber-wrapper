Feature: This feature file is used to show how to create Gherkin-style scenarios. I've used the SauceDemo page as an example.

  Scenario Outline: Performing a login on to SauceDemo page
    Given I navigate to the sauceDemo page
    And I should be on the "Swag Labs" page
    When I login using "<username>" and "<password>"

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
