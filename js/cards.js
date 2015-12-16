"use strict";
//in order to use this clase it is required to have loaded cardsPackage.js right before

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

    fn_countRemainingCards(){
       //this method return the number of cards in the deck
       var n = 0;
       var l = this.fn_countCards();
       for (var i=0;i<l;i++){
         if(this.cards[i].served==undefined){
           n++;
         }
       }
       return n;
    }

    fn_isFirstService(){
      return (this.fn_countCards()===this.fn_countRemainingCards());
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

    fn_serveFullHand(){
          var nPlayers = this.fn_countPlayers();
          var elemento = "";
          var html = "";
          var cardServed = "";
          var cardsToServe = 1;

          if (this.fn_isFirstService()){//here we validate if it is the first service
            cardsToServe = this.game.cardsPerPlayer;
          }

          for(var i=0;i<cardsToServe;i++){
            for(var y=0;y<nPlayers;y++){
                elemento = "#"+this.players[y].idDom;
                cardServed = this.fn_serveCard(this.players[y].name);
                if (cardServed!=="emptyDeck"){
                  html = $(elemento).html();
                  $(elemento).html(html + " |" + cardServed + "| ");
                }else{
                  alert("no more cards");
                  y=nPlayers;//exit the loop
                }
            };
          };
          return true;
        }

};
