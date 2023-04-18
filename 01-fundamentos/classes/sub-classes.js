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
        //if(!nombre) throw Error('Necesitamos el nombre');
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


class Heroe extends Persona{
    clan = '';

    constructor(nombre, codigo, frase, clan){
        super(nombre, codigo, frase);
        this.clan = clan;
    }

    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter Parker', 'Spiderman', 'Soy amigable', 'Avengers');
console.log({spiderman});
spiderman.quienSoy();
