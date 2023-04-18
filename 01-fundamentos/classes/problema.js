const santiago = {
    nombre: 'Santiago',
    edad: 22,
    imprimir(){
        console.log('Nombre: ', this.nombre)
    }
};


const pedro = {
    nombre: 'Pedro',
    edad: 15
};

const juan = {
    nombre: 'juan',
    edad: 20,
}

santiago.imprimir();

function Persona(nombre, edad){
    console.log('Se ejecuto esta linea');
    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function (){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const yaneth = new Persona('Yaneth', 36);
console.log({yaneth});
yaneth.imprimir();