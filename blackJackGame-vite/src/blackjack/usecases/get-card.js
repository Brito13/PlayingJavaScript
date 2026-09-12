

/**
 *@param {array<string>} deck - get the deck of cards
 * @returns {string} carta - returns the las element of the array deck and removes it from the array
 */


const getCard = (deck) => {
    let carta;
    if (deck.length != 0) {
        carta = deck.pop();
    }else{
        console.log('Ya no quedan mas cartas');
    }
    return carta;
}


export default getCard;