Feature: Login
  Scenario: Login com credenciais válidas
    Given que acesso a página de login
    When preencho usuário e senha corretamente
    Then devo ver a mensagem de sucesso
