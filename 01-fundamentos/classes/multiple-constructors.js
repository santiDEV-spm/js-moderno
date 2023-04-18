class Persona{

    static porObjeto({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    getInfo(){
        console.log(this.nombre, this.apellido, this.pais);
    }
}


const yaneth = {
    nombre: 'Yaneth',
    apellido: 'Dominguez',
    pais: 'Mexico',
};

const nombre = 'Santiago',
      apellido = 'Moncada',
      pais = 'Mexico';

const persona1 = new Persona(nombre, apellido, pais) ;     
const persona2 = Persona.porObjeto(yaneth);

console.log({persona1});
console.log({persona2});