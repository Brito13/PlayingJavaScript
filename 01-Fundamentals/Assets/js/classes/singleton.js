class Sinleton {
    static instancia;
    nombre = '';
    constructor(nombre) {
        if (!!Sinleton.instancia) {
            console.log('si')
            return Sinleton.instancia;
        }
        Sinleton.instancia = this;
        this.nombre = nombre;
    }
}



const instancia1 = new Sinleton('Raidy Raul');
const instancia2 = new Sinleton('Lino Brito');
const instancia3 = new Sinleton('Vianny Reyes');

console.log(instancia1);
console.log(instancia2);
console.log(instancia3);