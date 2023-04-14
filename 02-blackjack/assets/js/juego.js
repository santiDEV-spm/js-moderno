
/** 2C = Two of Clubs
 *  2D = Two of diamonds
 *  2H = Two of hearts
 *  2S = Two of Spades
*/

const miModulo = (()=>{
    'use strict'
    
    let deck = [];
    const tipos = ['C','D','H','S'],
          especiales = ['A','J','Q','K'];
 
    let puntosJugadores = [];

    //referencias html
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');
    
    const marcadores = document.querySelectorAll('small'),
          divCartasJugadores = document.querySelectorAll('.divCartas');



    const inicializarJuego = (numJugadores = 2)=>{
       deck = crearDeck();
       puntosJugadores = [];
       for(let i =0; i < numJugadores; i++){
            puntosJugadores.push(0);
       }

       marcadores.forEach((element)=>element.innerText = 0);
       divCartasJugadores.forEach((element)=>element.innerHTML = '');
       btnPedir.disabled = false;
       btnDetener.disabled = false;

    };

    //funcion crea un nuevo deck
    const crearDeck = ()=>{
        
        deck = [];
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

        return _.shuffle(deck);;
    };


    //funcion permite crar una carta
    const pedirCarta = () => {
        if(deck.length === 0){
            throw 'No hay cartas';
        }
        return deck.pop();;
    };



    const valorCarta = (carta) => {
        const valor = carta.substring(0, carta.length-1);
        let puntos = isNaN(valor) ?
                        (valor === 'A') ? 11 : 10 
                        : valor * 1;

        return puntos;
    };


    //Turno: 0 = primer jugador y el ultimo sera la computadora
    const acumularPuntos = (carta ,turno) =>{
        puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
        marcadores[turno].innerText = puntosJugadores[turno];
        return puntosJugadores[turno];
    };


    const crearCarta = (carta, turno) => {
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add('carta');
        divCartasJugadores[turno].append(imgCarta);
    }

    const turnoComputadora = (puntosJugador) => {
        let puntosComputadora = 0;
        do{
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1);
            crearCarta(carta, puntosJugadores.length - 1);

            if(puntosJugador > 21){
                break;
            }

        }while((puntosComputadora < puntosJugador) && (puntosJugador <= 21));
   
        determinarGanador();

    }

    const determinarGanador = ()=>{
        const [puntosJugador, puntosComputadora] = puntosJugadores;
        setTimeout(()=>{
            if(puntosComputadora === puntosJugador){
                swal("Oops!", "Nadie gana!!!", "warning");
            }else if(puntosJugador > 21){
                swal("Oops!", "Computadora gana!!!", "error");
            }else if(puntosComputadora > 21){
                swal("Felicidades!", "Eres un ganador!!!", "success");
            }else{
                swal("Oops!", "Computadora gana!!!", "error");
            } 
        });
    }


    //Eventos
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta();
        const puntosJugador = acumularPuntos(carta, 0);
        crearCarta(carta, 0);
 
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
        turnoComputadora(puntosJugadores[0]);
    });

    btnNuevo.addEventListener('click', ()=>{
        inicializarJuego(); 
    });


    return {
        nuevoJuego: inicializarJuego
    };

})();




