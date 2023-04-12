
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
const marcadores = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');
const marcadorJugador = marcadores[0];
const marcadorComputadora = marcadores[1];


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
        swal("Llegaste a 21", "El triunfo casi es tuyo", "warning");
        btnPedir.disabled = true;
    }else if(puntosJugador > 21){
        swal("Oops!", "lo siento perdiste!!!", "error");
        btnPedir.disabled = true;
    }

});





