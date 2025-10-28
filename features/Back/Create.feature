Feature: Criar celular
  Scenario: Cadastrar novo celular
    When envio os dados de um novo celular
    Then o celular deve ser cadastrado com sucesso
