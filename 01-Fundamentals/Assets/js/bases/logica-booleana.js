
function regresaTrue(){
    console.log('Regresa true');
    return true;
};

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
};


console.warn('Negation operator');
console.log(!true);
console.log(!false);

console.warn('And operator');
console.log( regresaFalse() && regresaTrue());
console.log( !regresaFalse() && regresaTrue());


console.warn('OR');

console.log(true || false);

console.log(regresaTrue() || regresaFalse());
console.log(regresaFalse() || regresaTrue());

console.log(true && true && true && false);

const persona = {
     nombre: 'raidy',
     edad: 23,
     carrera: 'software engenieer',
};

console.log(persona.nombre);

console.error('Pro tips');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola Raidy' && 120;
const a2 = 'hola' && 'mundo';

console.log({a1,a2});


