const carros = ['Ford', 'Mazda', 'Honda', 'Toyota'];

let i = 0;

while(i < carros.length){
    console.log(carros[i]);
    // i = i +1;
    // i+=1
    i++;
}

i=0;

while(carros[i]){
    if(i === 1){
        break;
        //continue;
    }
    console.log(carros[i]);
    i++;
}

console.log('Do while');
let j = 0;
do{
    console.log(carros[j]);
    j++;
}while(carros[j]); 