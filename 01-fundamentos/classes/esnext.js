

class Rectangulo {
    #area = 0;

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;

        this.#area = base * altura;
    }

    set setBase(base){
        this.base = base;
        this.#area = this.base * this.altura;
    }

    set setAltura(altura){
        this.altura = altura;
        this.#area = this.altura * this.base;
    }

    get getBase(){
        return this.base;
    }

    get getAltura(){
        return this.altura;
    }

    get getArea(){
        return this.#area;
    }
}

const rectangulo = new Rectangulo(10, 15);
rectangulo.area = 100;
console.log(rectangulo);