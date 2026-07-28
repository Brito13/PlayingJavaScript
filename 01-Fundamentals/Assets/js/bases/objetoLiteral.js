const personaje = {
    nombre: 'Peter Parker',
    edad: 23,
    codeName: 'Spiderman',
    vivo: true,
    coord: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Spiderman', 'Spiderman Negro', 'Spiderman Amarillo'],
    'ultima-pelicula': 'Spiderman No Way Home'
};

console.log(personaje.nombre);
console.log(personaje);


console.log('Coord');
console.log('Lat:', personaje.coord.lat);
console.log('Lng:', personaje.coord.lng);

console.log('Longitud del arreglo', personaje.trajes.length);
console.log('Ultimo Traje:', personaje.trajes[personaje.trajes.length-1]);

const vivoValue = 'vivo';

console.log(personaje[vivoValue]);
console.log('Ultima Pelicula:', personaje["ultima-pelicula"]);

delete personaje.edad;
console.log(personaje);

const entryPare = Object.entries(personaje);
console.log(entryPare);

for(var [key, value] of entryPare){
    console.log(key + ": " + value)
}


Object.freeze(personaje);

personaje.casado = true;
console.log(personaje);

personaje.codeName = 'Raidy';
console.log(personaje.codeName);







