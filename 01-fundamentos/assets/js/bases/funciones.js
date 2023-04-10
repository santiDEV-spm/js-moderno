function saludar(nombre){
    console.log(arguments);
    console.log('Hola ' + nombre);
    return 1;
}

const saludar2 = function (nombre){
    console.log('Hola ' + nombre);
}

const saludar3 = (nombre) => console.log('Hola ' + nombre);


const saludar4 = (nombre) => {
    console.log('Hola ' + nombre);
}

const retornoSaludar = saludar('Santiago', 22, true, 'Michoacan');
console.log(retornoSaludar);
saludar3('Alejandra');
saludar4('Iker');

function sumar(a,b){
    return a + b;
}

const sumar2 = (a,b) =>{
    return a+b;
};

const sumar3 = (a,b) => a+b;

function getAleatorio(){
    return Math.random();
}

let getAleatorio2 = () => Math.random();

console.log(sumar(3,5));
console.log(getAleatorio());
console.log(getAleatorio2());