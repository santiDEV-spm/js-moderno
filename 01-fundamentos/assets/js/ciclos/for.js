const heroes = ['Batman', 'Superman', 'Mujer maravilla', 'Aquaman'];

console.warn('For tradicional');

for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}

console.log('For in');
for(let index in heroes){
    console.log(heroes[index]);
}

console.log('For of');
for(let heroe of heroes){
    console.log(heroe);
}