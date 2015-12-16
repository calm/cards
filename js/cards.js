"use strict";
/*
Please develop a deck of cards library to be used by casinos.
Show us how you would model a standard deck of cards,
including the typical actions one might perform on them (while playing poker, etc.).
It can be in Ruby or the language of your choice.
I'm not looking for a game or simulation, but just a library that another developer could use and reasonably trust.
A few notes:
·         Feel free to apply any development best practices you feel are warranted
          for a prospective user of the library to trust or want to use it.
·         Please use Github for your revision control and email a link to the work when you’re ready.
·         There's no set time limit for this, but we'll need a few hours before your interview to review it.
*/

//this object is used to store the rules of the game.
function gameType(nCardsPerPlayer, nPointsToWin){
      this.cardsPerPlayer = nCardsPerPlayer;
      this.pointsToWin = nPointsToWin;
};
      gameType.prototype.fn_getNCards = function(){
        return this.cardsPerPlayer;
      };
      gameType.prototype.fn_getNPoints = function(){
        return this.pointsToWin;
      };
//end of the gameType...


//each card has its own identity that's why we'll have 52 items
//cards are listed this way for development, in a real scenario this must be json file
function cardsPackage(){
    this.cards = [{
          	"id": 1,
          	"name": "ace_clubs",
          	"value": 1
          }, {
          	"id": 2,
          	"name": "2_clubs",
          	"value": 2
          }, {
            "id": 3,
          	"name": "3_clubs",
          	"value": 3
          }, {
            "id": 4,
          	"name": "4_clubs",
          	"value": 4
          }, {
            "id": 5,
          	"name": "5_clubs",
          	"value": 5
          }, {
            "id": 6,
          	"name": "6_clubs",
          	"value": 6
          }, {
            "id": 7,
          	"name": "7_clubs",
          	"value": 7
          }, {
            "id": 8,
          	"name": "8_clubs",
          	"value": 8
          }, {
            "id": 9,
          	"name": "9_clubs",
          	"value": 9
          }, {
            "id": 10,
          	"name": "10_clubs",
          	"value": 10
          }, {
            "id": 11,
          	"name": "jack_clubs",
          	"value": 11
          }, {
            "id": 12,
          	"name": "quenn_clubs",
          	"value": 12
          }, {
            "id": 13,
          	"name": "king_clubs",
          	"value": 13
          },{
          	"id": 14,
          	"name": "ace_diamonds",
          	"value": 1
          }, {
          	"id": 15,
          	"name": "2_diamonds",
          	"value": 2
          }, {
            "id": 16,
          	"name": "3_diamonds",
          	"value": 3
          }, {
            "id": 17,
          	"name": "4_diamonds",
          	"value": 4
          }, {
            "id": 18,
          	"name": "5_diamonds",
          	"value": 5
          }, {
            "id": 19,
          	"name": "6_diamonds",
          	"value": 6
          }, {
            "id": 20,
          	"name": "7_diamonds",
          	"value": 7
          }, {
            "id": 21,
          	"name": "8_diamonds",
          	"value": 8
          }, {
            "id": 22,
          	"name": "9_diamonds",
          	"value": 9
          }, {
            "id": 23,
          	"name": "10_diamonds",
          	"value": 10
          }, {
            "id": 24,
          	"name": "jack_diamonds",
          	"value": 11
          }, {
            "id": 25,
          	"name": "quenn_diamonds",
          	"value": 12
          }, {
            "id": 26,
          	"name": "king_diamonds",
          	"value": 13
          },{
          	"id": 27,
          	"name": "ace_hearts",
          	"value": 1
          }, {
          	"id": 28,
          	"name": "2_hearts",
          	"value": 2
          }, {
            "id": 29,
          	"name": "3_hearts",
          	"value": 3
          }, {
            "id": 30,
          	"name": "4_hearts",
          	"value": 4
          }, {
            "id": 31,
          	"name": "5_hearts",
          	"value": 5
          }, {
            "id": 32,
          	"name": "6_hearts",
          	"value": 6
          }, {
            "id": 33,
          	"name": "7_hearts",
          	"value": 7
          }, {
            "id": 34,
          	"name": "8_hearts",
          	"value": 8
          }, {
            "id": 35,
          	"name": "9_hearts",
          	"value": 9
          }, {
            "id": 36,
          	"name": "10_hearts",
          	"value": 10
          }, {
            "id": 37,
          	"name": "jack_hearts",
          	"value": 11
          }, {
            "id": 38,
          	"name": "quenn_hearts",
          	"value": 12
          }, {
            "id": 39,
          	"name": "king_hearts",
          	"value": 13
          },{
          	"id": 40,
          	"name": "ace_spades",
          	"value": 1
          }, {
          	"id": 41,
          	"name": "2_spades",
          	"value": 2
          }, {
            "id": 42,
          	"name": "3_spades",
          	"value": 3
          }, {
            "id": 43,
          	"name": "4_spades",
          	"value": 4
          }, {
            "id": 44,
          	"name": "5_spades",
          	"value": 5
          }, {
            "id": 45,
          	"name": "6_spades",
          	"value": 6
          }, {
            "id": 46,
          	"name": "7_spades",
          	"value": 7
          }, {
            "id": 47,
          	"name": "8_spades",
          	"value": 8
          }, {
            "id": 48,
          	"name": "9_spades",
          	"value": 9
          }, {
            "id": 49,
          	"name": "10_spades",
          	"value": 10
          }, {
            "id": 50,
          	"name": "jack_spades",
          	"value": 11
          }, {
            "id": 51,
          	"name": "quenn_spades",
          	"value": 12
          }, {
            "id": 52,
          	"name": "king_spades",
          	"value": 13
          }];
        };
cardsPackage.prototype.fn_open = function(){
    return this.cards;
};



//this is the main class:
class deckOfCards{
    constructor(){
      //here we set default value for a valid game.
      if (this.game === undefined)
        this.game = new gameType(3,21);

      if (this.cards === undefined)
        this.cards = new cardsPackage().fn_open();

    }

    fn_addPlayer(name,idDom){
      //this method adds a player to the table
        if (this.players === undefined)
            this.players = [];

        this.players.push({
            name: name,//name of the player
            idDom: idDom//Dom element to list the cards served
        });
    }

    fn_countPlayers(){
       //this method return the number of players added
      return this.players.length;
    }

    fn_countCards(){
       //this method return the number of cards in the deck
      return this.cards.length;
    }


    fn_serveCard(playerName){
      //here we get the number of cards
      var limit = this.fn_countCards();
      //we loop until we find a card that is not served yet
      var safeEnd = 0;
      do {
        safeEnd++;
        var i = Math.floor((Math.random() * limit));
        if(safeEnd>(limit+1))
          {
          return "emptyDeck";
          }
      }
      while (this.cards[i].served != undefined);

      //here we serve de card and return the value to be added to the dom
      this.cards[i].served = true;
      this.cards[i].player = playerName;

      return this.cards[i].name;
    }


};
