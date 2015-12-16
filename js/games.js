"use strict";
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
