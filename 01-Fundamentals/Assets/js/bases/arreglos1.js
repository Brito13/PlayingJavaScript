let juegos = ['Zelda', 'Mario', 'Metroid', 'Donkey Kong'];
console.log('How many elements does the array has: ' + juegos.length);

let nombre = new Array('Raidy', 'Raul', 'Rosa');

console.log(nombre);

let first = juegos[2 - 2];
let last = juegos[juegos.length - 1];

console.log("first element: " + first);
console.log("last element: " + last);

// juegos.forEach((element) => {
//     console.log(element);
// });

juegos.forEach((array) => {
    console.log(array);
});

console.log(juegos);

let nuevaLongitud = juegos.push('GTA V');
console.log(juegos);
console.log(nuevaLongitud);

 nuevaLongitud = juegos.unshift('MLB 2026');
 console.log(juegos);
  console.log(nuevaLongitud);

 let elementoEliminado = juegos.pop();
 console.log("Juego eliminado: " + elementoEliminado);
 console.log(juegos);


 let metroidIndex = juegos.indexOf('Metroid');
console.log('Index of Metroid: ' + metroidIndex);

if(metroidIndex >= 0) {
    let elementoEliminado = juegos.splice(metroidIndex, 1);
    console.log('Elemento eliminado: ' + elementoEliminado);
    console.log(juegos);
}