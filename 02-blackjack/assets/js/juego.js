/** 2C = Two of Clubs
 *  2D = Two of diamonds
 *  2H = Two of hearts
 *  2S = Two of Spades
*/

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];


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

    console.log(deck);

    _.
};

crearDeck();
