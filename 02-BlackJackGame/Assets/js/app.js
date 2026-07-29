
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
    if (deck.length() === 0) {
        const carta = deck.pop();
    }
    return carta;
}

//Continuar
function valorCard() {


}

console.log(crearDesk());

console.warn('deck');
console.log(deck);

console.log(getCard());

console.log(deck);

console.log(getCard());

console.log(deck);




