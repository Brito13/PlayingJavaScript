
const crearPersona = (nombre,edad) =>{
    return {
        nombre,
        edad
    };
};

const crearPersona1 = (nombre,Apellido) => ({nombre,Apellido});

// console.log(crearPersona('Raidy','23'));
// console.log(crearPersona1('Raidy','23'));

function imprimirArguments(){
    return arguments
};

//const [nombre,edad,cree] = imprimirArguments('Raidy Brito','23','Dios');

// console.log({edad,nombre,cree});





const imprimirAgumentos1 = (...arg) => {
 return arg;
}

let argumentos = imprimirAgumentos1(10,'Lino Brito',45)

console.log(argumentos);



const {nombre: nombreEmpleado} = crearPersona1('Raidy','Brito Reyes');
console.log({nombreEmpleado});


//destructuracion de objetos

const personaje = {
    nombre: 'Peter Parker',
    edad: 23,
    codeName: 'Spiderman',
    vivo: true,
};


const imprimirPersonajes = ({nombre,edad,codeName,vivo}) => {
    console.log({nombre});
    console.log({edad});
    console.log({codeName});
    console.log({vivo});
};

imprimirPersonajes(personaje)