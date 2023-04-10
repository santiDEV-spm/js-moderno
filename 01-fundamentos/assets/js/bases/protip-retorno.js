function crearPersona(nombre, apellido){
    return {
        nombre: nombre,
        apellido: apellido,
    }
}

const crearPersona2 = (nombre, apellido) => ({nombre, apellido});


const persona = crearPersona('Santiago', 'Moncada');
console.log(persona);

function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = (edad,...args) => {
   // console.log({edad,args});
   return args;
};

imprimeArgumentos(10, true, false, 'Sntiago', 'hola');
const [casado, vivo, edad, nombre] = imprimeArgumentos2(10,3,true,null,'Santiago');
console.log({casado, vivo, edad, nombre});


const {apellido: nuevoApellido} = crearPersona('Santiago', 'Moncada');
console.log(nuevoApellido);


let tony = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    //edad: 40,
    trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],
};

const imprimePropiedades = ({nombre, codeName, vivo, edad = 15, trajes}) => {
  console.log({nombre});
  console.log({codeName});
  console.log({vivo});
  console.log({edad});
  console.log({trajes});
};

imprimePropiedades(tony);

