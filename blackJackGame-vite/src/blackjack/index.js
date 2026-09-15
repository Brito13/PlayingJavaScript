import {createDeck,getCard ,valueCard,turnoComputadora,gameNotification, createCard } from './usecases/index.js';

(() => {
    'use strict'
let deck = [];

const normalCards = ['C','D','H','S'],
      especialCards = ['A','J','K','Q'];

let ptsJugador = 0,
    ptsComputadora = 0;

//referencia a botones 
const btnNuevoJuego = document.querySelector('#nuevo-juego'),
      btnPedir = document.querySelector('#pedir-cartas'),
      btnTerminar = document.querySelector('#Terminar');

let ptsHtml = document.querySelectorAll('small');

const divCartasJugador = document.querySelector('#cartas-jugador'),
      divCartasComputadora = document.querySelector('#cartas-cpu');

deck = createDeck(normalCards, especialCards);



btnPedir.addEventListener('click', () =>{
    const carta = getCard(deck);    
    ptsJugador += valueCard(carta);
    ptsHtml[0].innerHTML = ptsJugador;
    const cardImg = createCard(carta);
    divCartasJugador.append(cardImg);

    if (ptsJugador > 21) {
        gameNotification('Lo siento mucho, perdiste','error');
        turnoComputadora(ptsJugador, ptsHtml, deck, divCartasComputadora);
        btnPedir.disabled = true;
        btnTerminar.disabled = true;
        btnNuevoJuego.disabled = false;
        
    } else if (ptsJugador === 21) {
        gameNotification('Felicidades, Ganaste','success');
        turnoComputadora(ptsJugador, ptsHtml, deck, divCartasComputadora);
        btnPedir.disabled = true;
        btnTerminar.disabled = true;
        btnNuevoJuego.disabled = false;
    };
});


btnTerminar.addEventListener('click', () => {
    if (ptsJugador === 0) {
        gameNotification('No puedes terminar sin pedir cartas','error');
        return;
    }else{
        btnPedir.disabled = true;
        btnTerminar.disabled = true;
        btnNuevoJuego.disabled = false;
        turnoComputadora(ptsJugador, ptsHtml, deck, divCartasComputadora);
    }
}); 

btnNuevoJuego.addEventListener('click', () => {
    deck = [];
    deck = createDeck(normalCards, especialCards);
    btnNuevoJuego.disabled = true;
    ptsJugador = 0;
    ptsComputadora = 0;
    ptsHtml[0].innerHTML = ptsJugador;
    ptsHtml[1].innerHTML = ptsComputadora;
    divCartasJugador.innerHTML = '';
    divCartasComputadora.innerHTML = '';
    btnPedir.disabled = false;
    btnTerminar.disabled = false;
});
})();