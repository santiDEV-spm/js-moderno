const elMayor = (a, b)=> (a > b) ? a: b;

const tieneMembresia = (miembro) => miembro ? '2 dolares' : '10 dolares';

console.log(elMayor(10, 15));
console.log(tieneMembresia(true));

const amigo = true;

const amigos = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor': 'Loki',
    (()=> 'Nick')(), //funcion anonima auto invocada
    elMayor(10, 30),
];

console.log({amigos});