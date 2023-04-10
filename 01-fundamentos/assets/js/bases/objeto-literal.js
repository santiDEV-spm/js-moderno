let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    coords:{
        lat : 34.034,
        lng: -118.70,
    },
    trajes: ['Mark 1', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    }
};

console.log({personaje});
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);

console.log('Coords:', personaje.coords.lat);
console.log('No.trajes:', personaje.trajes.length);

console.log('Ultimo traje', personaje.trajes[ personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo:', personaje[x]);

//Más detalles
delete personaje.edad;
console.log(personaje);

personaje.casado = true;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);


Object.freeze(personaje);
personaje.dinero = 13455554535;

//delete personaje.edad;
personaje.direccion.ubicacion = 'Costa Rica';
console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});

