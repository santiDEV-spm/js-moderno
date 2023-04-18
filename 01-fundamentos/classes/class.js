class Persona{

    static _conteo = 0;
    
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje(){
        console.log('Soy un metodo statico');
    }

    nombre = '';
    codigo = '';
    frase =  '';
    _comida = '';

    constructor(nombre = '', codigo = '', frase = ''){
        if(!nombre) throw Error('Necesitamos el nombre');
        this.codigo = codigo;
        this.frase = frase;
        this.nombre = nombre;
        Persona._conteo++;
    }

    set setComidaFavorita(comida){
        this._comida = comida;
    }

    get getComidaFavorita(){
        return this._comida;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase(){
        this.quienSoy();
        console.log(`${this.codigo} dice ${this.frase}`);
    }
}


const spiderman = new Persona('Peter Parker', 'Spider', 'Soy amigable');
const ironman = new Persona('Juan');
console.log({spiderman});
console.log({ironman});

spiderman.quienSoy();
ironman.quienSoy();

spiderman.miFrase();

spiderman.setComidaFavorita = 'Hot cakes';
console.log({spiderman});
console.log(spiderman.getComidaFavorita);
console.log('Conteo statico', Persona._conteo);
console.log(Persona.conteo);

Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo';
console.log(Persona.propiedadExterna);