
// let raidy = {nombre: 'Raidy Raul'};
// let xiorimar = {raidy};
// xiorimar.nombre = 'Xiorimar Malena';

// console.log(xiorimar,raidy);
let juan = {nombre: 'Juan'};
let ana = {...juan};
ana.nombre = 'Ana';

console.log({juan,ana});

const cambiarNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'peter'};
let tony = cambiarNombre({...peter})

console.log({peter,tony});



const frutas = ['chinola','limon','aguacate']


console.time('slice');
const otrasFrutas = [...frutas]
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas]
console.timeEnd('spread');

frutas.push('Mango');

console.table({otrasFrutas,otrasFrutas2});
