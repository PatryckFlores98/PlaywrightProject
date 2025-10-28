Feature: Listar todos os celulares
  Scenario: Obter todos os celulares disponíveis
    When realizo uma requisição para listar todos os celulares
    Then a resposta deve conter uma lista de celulares
