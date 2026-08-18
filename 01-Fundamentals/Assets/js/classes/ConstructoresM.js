class Persona {

    static personaObject({nombre,apellido,pais}){
        return new Persona(nombre,apellido,pais)
    }

    constructor(nombre, apellido, pais) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    get getInfo(){
        console.log(`Info of ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}


const nombre = 'Raidy',
      apellido = 'Brito',
      pais = 'Dominican Republic';


const Raidy = new Persona(nombre,apellido,pais);
Raidy.getInfo;

const fernando = {
    nombre: 'Fernando',
    apellido: 'Suero',
    pais: 'Dominican Republic'
}

const Persona1 = Persona.personaObject(fernando);
Persona1.getInfo;