

const dia = new Date();
const horaActual = 9;

let horaApertura;

let mensaje;

// if ([0,6].includes(dia.getDay())) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

horaApertura = ([0,6].includes(dia.getDay())) ? 9 : 11;

//(condicion) ? valor1 : valor 2

// if (horaActual >= horaApertura) {
//     mensaje = "Estamos abiertos";
// }else{
//     mensaje = `Esta cerrado hoy abrimos a las ${horaApertura}`;
// }

mensaje = (horaActual >= horaApertura) ? 'Estamos abiertos' : `Estamos cerrados hoy abrimos a las ${horaApertura}`;

console.log({horaApertura,mensaje});