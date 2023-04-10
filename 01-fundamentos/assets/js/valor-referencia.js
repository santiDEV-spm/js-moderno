
let a = 10;
let b = a;
a = 30;

console.log({a,b});

let juan = { nombre: 'Juan'};
let ana = {...juan};
ana.nombre = 'Ana';
console.log({juan, ana});

const cambiaNombre = ({...persona}) =>{
    persona.nombre = 'Tony';
    return persona;
}

let peter =  {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log({peter, tony});

//areglos
const frutas = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas = [...frutas];
otrasFrutas.push('Mango');

console.time('slice');
const otrasFrutas2 = frutas.slice();
console.timeEnd('slice');


otrasFrutas2.push('Melón');
otrasFrutas2.push('Sandia');

console.time('spread');
const otrasFrutas3 = [...frutas];
console.timeEnd('spread');

console.table({frutas, otrasFrutas, otrasFrutas2});