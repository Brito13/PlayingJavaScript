import {shuffle } from 'underscore';

/**
 * Crea un mazo de cartas mezcladas
 * @param {string} normalCards - normalCards de cartas ejemplo: ['C','D','H','S']
 * @param {string} especialCards - cartas especialCards ejemplo: ['A','J','K','Q']
 * @returns {array} deck - retorna un arreglo de cartas mezcladas
 */


 function createDeck(normalCards, especialCards){
     if(!normalCards || normalCards.length === 0) 
        throw new Error('the especialCards and normalCards are required to create the deck');
    if (!especialCards || especialCards.length == 0){
        throw new Error('the especialCards and normalCards are required to create the deck');
    }

   let deck = [];

   for(let i = 2; i < 10;i++){
        for(let cartas of normalCards){
            deck.push(i + cartas);
        }
   }

    //Crear cartas especialCards
   for(let tipo of normalCards ){
    for(let especial of especialCards){
        deck.push(especial + tipo);
        }
    }
    //crear cartas normales
   
   //mezclar las cartas
  return shuffle(deck);
}
 export default createDeck;