Feature: Redirect Link
  Scenario: Seguir o redirecionamento
    Given que acesso a página de redirect
    When clico no link de redirecionamento
    Then devo ser redirecionado para nova página
