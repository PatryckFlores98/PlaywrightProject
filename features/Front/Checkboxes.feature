Feature: Checkboxes
  Scenario: Marcar e desmarcar checkboxes
    Given que acesso a página de checkboxes
    When eu marco o primeiro checkbox
    And eu desmarco o segundo checkbox
    Then os checkboxes devem estar nas posições corretas
