Feature: Upload de Arquivo
  Scenario: Fazer upload de um arquivo com sucesso
    Given que acesso a página de upload
    When faço upload de um arquivo de teste
    Then a mensagem de sucesso deve ser exibida
