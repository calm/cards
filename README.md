# cards
ReadMe

Instructions (demo):

1)  download the main folder and double click on the index.html file.
2)  each button leads to an implemented method.


Instructions (library):

1)  create an object deckOfCards (line 50 in index.html demo file)
2)  define game rules creating a gameType,
    default values are 3 cards until 21 points (line 51 in index.html demo file)
3)  add players calling fn_addPlayer method, two parameters:
        P1) name of the player, string.
        P2) id of the DOM element to print the cards, string.  
    (line 52 in index.html demo file)
4)  the method fn_countCards takes no parameters and returns an integer
    with the number of cards in the deck
5)  the method fn_countRemainingCards takes no parameters and returns an integer
    with the number of cards remaining in the deck not being served yet.
6)  the method fn_serveFullHand takes no parameters and serves an equal number
    of cards to each player when it is possible,
    at first serves the number of cards defined in gameType, and then one card
    to each player.
7)  the object containing the cards has this properties:
    served: at first is undefined, when served is set to true.
    player: at first is undefined, when served is set to the player's name
    name: the name of the card, retrieved by the json object.
    value: the value of the card, retrieved by the json object.
    id: unique identification number for each card, retrieved by the json object.

Implemented methods in demo buttons:

1)  Total Cards: it displays inside a text box the number of cards in the deck.
2)  Remaining Cards: it displays inside a text box the number of remaining cards.
3)  Serve to all: it serves N number of cards to the players included in the script.
3)  Reset: reloads the page.


Dependencies:

1)  jquery-1.11.3, included in the js/ folder,
    used in order to deal with browser compatibility.

2)  after jquery this scripts: games.js, cardsPackage.js, and cards.js


Whys:

1)  Why Javascript?

    Javascript was not the easiest choice in order to create objects,
    it has no native support for interfaces, neither dependency injection.
    Beside that, it is the easiest to develop and try without a server engine.

2)  Why Dependencies between files?

    the main idea was to create a single file called bundle.js
    and place all the scripts references inside in the right order,
    but again that needed a server engine,
    and that was out of the self-defined guidelines.

3)  Why used prototype to add methods?

    that is in order to tag what must be in oop an interface.

4)  Why a class called cards with data?

    just for the demo, in a real scenario with a server engine
    the data will be a Json file.
