Feature: Listar celulares por range
  Scenario: Obter celulares com ids específicos
    When realizo uma requisição para listar celulares com ids 3, 5 e 10
    Then a resposta deve conter os objetos solicitados
