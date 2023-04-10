
alert('Hola mundo');

let nombre = prompt('Cual es tu nombre?', 'sin nombre...');


let confirmUser =  confirm('Estas seguro de borrar esto');

if(confirmUser){
    nombre = null;
    alert('Se borro el nombre correctamente');
    document.write('El nombre: ----');
}else{
    alert('Tu nombre se conservo');
    console.log(nombre);
    document.write('El nombre es: ' + nombre);
}