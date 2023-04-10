/** 
 * Dias de semana abrimos a las 11
 * pero los fines de semana abrimos a las 9
 * 
 **/

const dia = 0;
const horaActual = 10;


let horaApertura;
let mensaje; //Esta abierto, esta cerrado, hoy abrimos a las XX

if(dia === 0 || dia === 6){
    console.log('Fin semana');
    horaApertura = 9;
}else{
    console.log('Dia de semana');
    horaApertura = 11;
}

if(horaActual >= horaApertura){
    mensaje = 'Esta abierto';
}else{
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
}

console.log({horaApertura, mensaje});

//optimizacion de la rutina anterior

horaApertura = ([0,6].includes(dia)) ? 9 : 11;
mensaje = horaActual >= horaApertura ? 
         'Esta abierto' : 
         `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});         