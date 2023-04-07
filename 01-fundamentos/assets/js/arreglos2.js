let juegos = ['Zelda', 'Mario', 'Metroid'];
console.log('Largo: ', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length -1];
console.log({primero, ultimo});

juegos.forEach((value, index, arr)=>console.log({value,index,arr}));

let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

juegos.unshift('Juego1');
let juegoBorrado =  juegos.pop();
console.log({juegoBorrado ,nuevaLongitud, juegos});

let pos = 1;

let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados ,juegos});

let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});

//TODO: Referencia