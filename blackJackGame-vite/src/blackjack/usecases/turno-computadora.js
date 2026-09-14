import {getCard,valueCard,gameNotification} from './index.js';

function turnoComputadora(ptsMinimos, ptsHtml, deck){
    if (!ptsMinimos || ptsMinimos <= 0) throw new Error('ptsMinimos is required and can not be emty');

    let ptsComputadora = 0;
    const divCartasComputadora = document.querySelector('#cartas-cpu');

    do {
        const carta = getCard(deck);
        ptsComputadora += valueCard(carta);
        ptsHtml[1].innerHTML = ptsComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.classList.add('cartas');
        imgCarta.src = `/Assets/cartas/${carta}.png`;
        divCartasComputadora.append(imgCarta);
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