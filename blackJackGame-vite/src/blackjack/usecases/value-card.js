


/**
 * 
 * @param {string} card - card to get the value
 * @returns {number} value - returns the value of the card
 */

function valueCard(card) {
  let value = card.substring(0, card.length -1);
    if (isNaN(value)) {
        value = (value === 'A') ? 11 
        : (value === 'K') ? 10 
        : (value === 'J') ? 10 
        : (value === 'Q') ? 10
        : console.warn('Este valor no es valido');
    }else{
        value = value * 1;
    }
    return value;
}

export default valueCard;