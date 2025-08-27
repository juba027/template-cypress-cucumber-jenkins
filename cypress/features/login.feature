Feature: Login SauceDemo

  Background:
    Given je suis sur la page de login SauceDemo

  @valide
  Scenario Outline: Connexion valide
    When je saisis le username "<username>"
    And je saisis le password "<password>"
    And je clique sur le bouton Login
    Then je suis redirigee vers la liste des produits

    Examples:
      | username         | password      |
      | standard_user    | secret_sauce  |
      | problem_user     | secret_sauce  |
      | performance_glitch_user | secret_sauce |

  @invalide
  Scenario Outline: Connexion invalide
    When je saisis le username "<username>"
    And je saisis le password "<password>"
    And je clique sur le bouton Login
    Then je vois un message d erreur de login

    Examples:
      | username        | password     |
      | locked_out_user | secret_sauce |
      | standard_user   | bad_pass     |
