const esMayor = (a,b) => (a > b) ? a : b;

console.log(esMayor(20,15));

const esMiembro = (miembro) => (miembro) ? '2 dolares' : '15 dolares';

console.log(esMiembro(false));

const amigo = true;
const amigosarr = [
    'Peter',
    'jossi',
    'Jolki',
    amigo ? 'thor' : 'loki',
    (() => 'Nick Fury')()
];

console.log(amigosarr)

let nota = 100;
const grade = nota >= 90 ? 'Execelente' : nota >= 80 && nota < 90 ?  'Regular' : nota >= 70 && nota < 80 ? 'Necesita Mejorar' : 'Reprobado'

console.log(grade);


