
let a = 5;

if(a >= 10){ //undefina, null, asignacion
    console.log('A es mayor o igual a 10');
}else{
    console.log('A es menor a 10');   
}

console.log('Fin de programa');


const hoy = new Date();
let dia = hoy.getDay(); //0:Domingo, 1:lunes, ... 6:Sabado

console.log({dia});

if(dia === 0){
    console.log('Domingo');
}else{
    if(dia === 1){
        console.log('Lunes');
    }else if(dia == 2){
        console.log('Martes');
    }else{
        console.log('No es lunes ni domingo');
    }
}

dia = 3;
const diasLetras = {
    0 :()=> 'domingo - 1',
    1 :()=> 'lunes - 2',
    2 :()=> 'martes - 3',
    3 :()=> 'miercoles -4',
    4 :()=> 'jueves - 5',
    5 :()=> 'viernes - 6',
    6 :()=> 'sabado- 7',
};

console.log(diasLetras[dia]() || 'Dia no definido');