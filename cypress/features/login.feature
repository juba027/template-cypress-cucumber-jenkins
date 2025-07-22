Feature: Login with cridentials

  @tc-001 @integration @recette
  Scenario Outline: Valide cridentials
    Given je visite le lien "<url>"
    When je saisis le username "<username>"
    And je saisis le password "<password>"
    And je clique sur le bouton Login
    Then j acced a mon dashboard

    @integration
    Examples:
      | url                            | username       | password           |
      | http://192.168.1.95:8000/admin | qa_integration | logwire-consulting |
      # | http://192.168.1.95:8001/admin | qa_recette | efi-academy |

    @recette
    Examples:
      | url                            | username   | password    |
      | http://192.168.1.95:8001/admin | qa_recette | efi-academy |
