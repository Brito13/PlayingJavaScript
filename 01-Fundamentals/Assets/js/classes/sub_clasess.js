class Persona {
    nombre;
    apellido;
    edad;
    pesoLibras;

    constructor(nombre,apellido,edad,pesoLibras) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.pesoLibras = pesoLibras;
    }

    quienSoy(){
        console.log(`Hello my name is ${this.nombre} im ${this.edad} years old`);
    }
}


class Estudiante extends Persona{
    scores = [];
    carrera = 'sin carrera'
    Institucion;
    constructor(nombre,apellido,edad,pesoLibras){
        super(nombre,apellido,edad,pesoLibras);
        this.scores = [90,95,100];
        this.carrera = 'Software';
        this.Institucion = 'MIT';
    }


   quienSoy(){
    console.log(`Hola ${this.nombre}`);
    super.quienSoy();
   }
}

const Raidy = new Estudiante('Raidy','Brito',23,150);
console.log(Raidy);

Raidy.quienSoy();

