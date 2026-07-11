function saludar (nombre){
    console.log(`Hola ${nombre}`);
}


const Saludar1 = (nombre) => {
    console.log(`Hola ${nombre}`);
    return [1,2,3];
    console.log('Raidy RAUL bRITO REYES');
};

//Terminan las funciones

let juegos = ['Mega man', 'pixel gun', 'Minecraft'];

juegos.forEach(elements => {
    console.log(elements);
});


const Saludar2 = function(){
   console.log(arguments);
}

saludar('Raidy');
Saludar2('Raidy', 23, true, 'Dominican Republic');


const retornoSaludar1 = Saludar1('Fernando');
console.log(retornoSaludar1);


const sumar = (a,b) => {
  return a + b;
}

const sumar1 = (a,b) => a + b;

console.log(sumar(3,3));
console.log(sumar1(4,4));

function getAleatorio(min,max){
    const minValue = Math.ceil(min);
    const maxValue = Math.floor(max);
    return Math.floor(Math.random() * (maxValue - minValue) * minValue);
}

console.log(getAleatorio(5,10));

const getAleatorio1 = () => Math.random();

console.log(getAleatorio1());


