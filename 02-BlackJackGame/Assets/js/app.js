
let deck = [];
let tipos = ['C','D','H','S'];
let especiales = ['A','J','K','Q']

let ptsJugador = 0;
let ptsComputadora = 0;


//referencia a botones 
const btnNuevoJuego = document.querySelector('#nuevo-juego');
const btnPedir = document.querySelector('#pedir-cartas');
const btnTerminar = document.querySelector('#Terminar');


// const ptsJugadorHtml = document.querySelector('.pts-jugador');
// const ptsComputadoraHtml = document.querySelector('.pts-computadora');

let ptsHtml = document.querySelectorAll('small');

const divCartasJugador = document.querySelector('#cartas-jugador');

function crearDesk(){

    //crear cartas normales
   for(let i = 2; i < 10;i++){
        for(let cartas of tipos){
            deck.push(i + cartas);
        }
   }

   //Crear cartas especiales
   for(let tipo of tipos ){
    for(let especial of especiales){
        deck.push(especial + tipo);
    }
   }

   //mezclar las cartas
  deck = _.shuffle(deck);
  return deck;
}

const getCard = () => {
    let carta;
    if (deck.length != 0) {
        carta = deck.pop();
    }else{
        console.log('Ya no quedan mas cartas');
    }
    return carta;
}

//Continuar
function valueCard(carta) {
  let value = carta.substring(0, carta.length -1);
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
// crearDesk();
// console.log(deck);
// console.log(getCard());
// console.log(deck)



btnPedir.addEventListener('click', () =>{
    crearDesk();
    const carta = getCard();    
    ptsJugador += valueCard(carta);
    ptsHtml[0].innerHTML = ptsJugador;

    const imgCarta = document.createElement('img');
    imgCarta.classList.add('cartas');
    imgCarta.src = `/Assets/cartas/${carta}.png`;

    divCartasJugador.append(imgCarta);

    console.log(carta + ' ' + ptsJugador);
});


btnNuevoJuego.addEventListener('click', function(){
    crearDesk();
});