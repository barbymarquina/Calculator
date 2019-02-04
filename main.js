class Calculadora {
    constructor(resultado, numero1, numero2) {
        this.resultado = resultado;
        this.numero1 = numero1;
        this.numero2 = numero2;
    }

    suma() {
        this.resultado = this.numero1 + this.numero2;
        console.log(resultado);
    }
    resta() { }
    multiplica() { }
    divide() { }
    igualar() { }

    get getResul() {
        return this.resultado;
    }

    set setResul(resultado) {
        this.resultado = resultado;
    }

    get getNum1() {
        return this.numero1;
    }

    set setNum1(valor1) {
        this.numero1 = valor1;
    }

    get getNum2() {
        return this.numero2;
    }

    set setNum1(valor2) {
        this.numero2 = valor2;
    }
}

function botonNumerico(numero) {
    console.log(numero);
}

function nuevaCalculada() {
    let nuevaCal = new Calculadora("");
    console.log(nuevaCal);
}

