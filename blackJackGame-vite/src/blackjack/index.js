import { createDeck,getCard ,valueCard } from './usecases/index.js';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

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



// console.log(deck);
// console.log(getCard());
// console.log(deck)

function gameNotification(mensaje,tipo){
    if(tipo === 'error'){
    Toastify({
            text: mensaje,
            duration: 3000,
            style: {
                background: "#FF0000",
                color: "#fff"
            }
        }).showToast();
    }else if(tipo === 'success'){
        Toastify({
            text: mensaje,
            duration: 3000,
            style: {
                background: "#008000",
                color: "#fff"
            }
        }).showToast();
    }else if (tipo === 'info'){
        Toastify({
            text: mensaje,
            duration: 3000,
            style: {
                background: "#f7de00",
                color: "#fff"
            }
        }).showToast();
    }
}

function turnoComputadora(ptsMinimos){
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

btnPedir.addEventListener('click', () =>{
    console.log(deck);
    const carta = getCard(deck);    
    ptsJugador += valueCard(carta);
    ptsHtml[0].innerHTML = ptsJugador;

    const imgCarta = document.createElement('img');
    imgCarta.classList.add('cartas');
    imgCarta.src = `/Assets/cartas/${carta}.png`;

    divCartasJugador.append(imgCarta);

    if (ptsJugador > 21) {
        gameNotification('Lo siento mucho, perdiste','error');
        turnoComputadora(ptsJugador);
        btnPedir.disabled = true;
        btnTerminar.disabled = true;
        btnNuevoJuego.disabled = false;
        
    } else if (ptsJugador === 21) {
        gameNotification('Felicidades, Ganaste','success');
        turnoComputadora(ptsJugador);
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
        turnoComputadora(ptsJugador);
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