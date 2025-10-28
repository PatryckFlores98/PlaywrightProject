Feature: Listar celular por ID
  Scenario: Buscar celular de ID 7
    When realizo uma requisição para buscar o celular de id 7
    Then a resposta deve conter os dados do celular
