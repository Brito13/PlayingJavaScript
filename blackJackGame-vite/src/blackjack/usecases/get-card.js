

/**
 *@param {array<string>} deck - get the deck of cards
 * @returns {string} carta - returns the las element of the array deck and removes it from the array
 */

const getCard = (deck) => {
    let carta;
    if (!deck || deck.length === 0){ 
          throw new Error('the deck can not be empty');
    }else {
      carta = deck.pop();
    }
    return carta;
}
export default getCard;