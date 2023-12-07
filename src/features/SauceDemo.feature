Feature: Login Functionality for SauceDemo

  Scenario Outline: Performing a login on to SauceDemo page
    Given I navigate to the sauceDemo page
    And I should be on the "Swag Labs" page
    When I login using "<username>" and "<password>"
    Then I should be on the inventory page with "Products"

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |
