
class Persona{

    nombre;
    edad;
    frase;

    constructor(nombre,edad,frase){
        this.nombre = nombre;
        this.edad = edad;
        this.frase = frase;
    }
}


const raidy = new Persona('Raidy Brito',23,'La fe existe');
const fernando = new Persona('Fernando Suero', 28, 'oh oh oh');
console.log(raidy);
console.log(fernando);
