class Rectangulo {

    #area = 0;
    constructor(base,altura) {
        this.#area = base * altura;
    }

    area(){
        console.log(`El area es ${this.#area}`);
    }
}


const rectangulo = new Rectangulo(10,15);

rectangulo.area();