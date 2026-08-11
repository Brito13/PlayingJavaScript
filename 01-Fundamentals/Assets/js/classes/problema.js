const fher = {
    nombre: 'Fernando',
    edad: 30,
    imprimir() {
        console.log(`nombre: ${this.nombre}, edad: ${this.edad}`);
    }
}



const pedro = {
    nombre: 'Pedro',
    edad: 25
}


fher.imprimir(pedro); // nombre: Pedro, edad: 25

function Persona(nombre,edad){

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`nombre: ${this.nombre}, edad: ${this.edad}`);
    }
}

const maria = new Persona('Maria', 24);
const raidy = new Persona('Raidy', 23);
maria.imprimir(); 
raidy.imprimir();