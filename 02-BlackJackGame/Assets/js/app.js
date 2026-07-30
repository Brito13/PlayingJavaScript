
let deck = [];
let tipos = ['C','D','H','S'];
let especiales = ['A','J','K','Q']

function crearDesk(){

   for(let i = 2; i < 10;i++){
        for(let cartas of tipos){
            deck.push(i + cartas);
        }
   }

   for(let tipo of tipos ){
    for(let especial of especiales){
        deck.push(especial + tipo);
    }
   }

  deck = _.shuffle(deck);
  return deck;
}

const getCard = () => {
    let carta;
    if (deck.length != 0) {
        carta = deck.pop();
        console.log(carta);
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
crearDesk();
const valor = valueCard(getCard())
console.log(valor);