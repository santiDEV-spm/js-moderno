
/** 2C = Two of Clubs
 *  2D = Two of diamonds
 *  2H = Two of hearts
 *  2S = Two of Spades
*/

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];
let puntosJugador = 0,
    puntosComputadora = 0;

//referencias html
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');
const marcadores = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

let marcadorJugador = marcadores[0];
let marcadorComputadora = marcadores[1];


//funcion crea un nuevo deck
const crearDeck = ()=>{

    for(let i = 2; i <= 10; i++){
       for(let tipo of tipos){
            deck.push(i + tipo);
       }
    }

    for(let tipo of tipos){
        for(let especial of especiales){
            deck.push(especial + tipo);
        }
    }

   //console.log(deck);
   deck =  _.shuffle(deck);
   console.log(deck);
   return deck;
};

crearDeck();

//funcion permite crar una carta
const pedirCarta = () => {

    if(deck.length === 0){
        throw 'No hay cartas';
    }
    
    let carta = deck.pop();

    return carta;
};



const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length-1);
    let puntos = isNaN(valor) ?
                    (valor === 'A') ? 11 : 10 
                    : valor * 1;

    return puntos;
};


//turno de la computadora
const turnoComputadora = (puntosJugador) => {
    do{
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        marcadorComputadora.innerText = puntosComputadora;
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if(puntosJugador > 21){
            break;
        }

    }while((puntosComputadora < puntosJugador) && (puntosJugador <= 21));

    if(puntosComputadora === puntosJugador){
        setTimeout(()=>{
            swal("Oops!", "Nadie gana!!!", "warning");
        }, 1000);
    }else if(puntosJugador > 21){
        swal("Oops!", "Computadora gana!!!", "error");
    }else if(puntosComputadora > 21){
        swal("Felicidades!", "Eres un ganador!!!", "success");
    }else{
        swal("Oops!", "Computadora gana!!!", "error");
    }    
}


//Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    marcadorJugador.innerText = puntosJugador;
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);

    if(puntosJugador === 21){
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }else if(puntosJugador > 21){
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }

});

btnDetener.addEventListener('click', ()=>{
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click', ()=>{
    deck = [];
    deck = crearDeck();
    puntosJugador = 0;
    puntosComputadora = 0;
    marcadorComputadora.innerText = 0;
    marcadorJugador.innerText = 0;
    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';
    btnPedir.disabled = false;
    btnDetener.disabled = false; 
});





