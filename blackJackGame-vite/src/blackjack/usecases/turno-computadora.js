import {getCard,valueCard,gameNotification,createCard} from './index.js';


/**
 * 
 * @param {number} ptsMinimos - what are the minimun point th pc need to win
 * @param {HTMLElement} ptsHtml - it represents the html elements to display the points
 * @param {Array<string>} deck - array of cards
 * @param {HTMLElement} divCartasComputadora - represent the space where we are going to display de cards
 */
function turnoComputadora(ptsMinimos, ptsHtml, deck, divCartasComputadora){
    if (!ptsMinimos || ptsMinimos <= 0) throw new Error('ptsMinimos is required and can not be emty');
    let ptsComputadora = 0;
    

    do {
        const carta = getCard(deck);
        ptsComputadora += valueCard(carta);
        ptsHtml[1].innerHTML = ptsComputadora;
        divCartasComputadora.append(createCard(carta));

    } while (ptsComputadora < ptsMinimos && ptsMinimos <= 21);

    setTimeout(() => {
    if(ptsComputadora === ptsMinimos){
        gameNotification('Nadie gana','info');
    }
    else if (ptsMinimos > 21) {
        gameNotification('Computadora Gana','success');
    }
    else if (ptsComputadora > 21) {
        gameNotification('Jugador Gana','success');
    }
    else if (ptsComputadora === 21) {
        gameNotification('Computadora Gana','success');
    }else if (ptsMinimos < ptsComputadora && ptsComputadora < 21) {
        gameNotification('Jugador  Gana','success');
    }
    else if (ptsMinimos > ptsComputadora && ptsComputadora < 21) {
        gameNotification('Computadora Gana','success');
    }
    }, 1000);
}

export default turnoComputadora;