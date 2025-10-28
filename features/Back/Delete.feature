Feature: Deletar celular
  Scenario: Criar e depois deletar um celular
    When crio um celular temporário
    And deleto o celular criado
    Then o celular deve ser removido com sucesso
