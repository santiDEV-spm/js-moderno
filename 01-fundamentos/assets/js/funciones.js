function saludar(nombre){
    console.log(arguments);
    console.log('Hola ' + nombre);
}

const saludar2 = function (nombre){
    console.log('Hola ' + nombre);
}

const saludar3 = (nombre) => console.log('Hola ' + nombre);


const saludar4 = (nombre) => {
    console.log('Hola ' + nombre);
}

saludar('Santiago', 22, true, 'Michoacan');
saludar2('Yaneth');
saludar3('Alejandra');
saludar4('Iker');