
class Persona{

    static _conteo = 0;

    static get getConteo(){
        return 'Conteo:',  Persona._conteo;
    }
    nombre;
    edad;
    frase;
    comida;

    constructor(nombre,edad,frase){
        this.nombre = nombre;
        this.edad = edad;
        this.frase = frase;
        Persona._conteo++;
    }

    set setComida(comida){
        this.comida = comida;
    }

    get getComida(){
        return `the favority food of ${this.nombre} is ${this.comida}`
    }



    quiensoy(){
        console.log(`this is ${this.nombre} and my frase is ${this.frase}`);
    }

    myAgeIs(){
        console.log(`My name is ${this.nombre} and i am ${this.edad}`);
    }

}



const raidy = new Persona('Raidy Brito',23,'La fe existe');
const fernando = new Persona('Fernando Suero', 28, 'oh oh oh');
raidy.setComida = 'Espaguetti';
fernando.comida = 'Sancocho';

console.log('Conteo', Persona._conteo);
console.log('Conteo method:', Persona.getConteo);

Persona.propiedadExterna = 'Hola Mundo';

console.log(Persona.propiedadExterna);

console.log(fernando.getComida);
console.log(raidy.getComida);

console.log(raidy);
console.log(fernando);

raidy.quiensoy();
fernando.myAgeIs();

