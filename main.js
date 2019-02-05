var nuevaCal;
class Calculadora {
    constructor() {
        this.resultado = "";
        this.numero1 = "";
        this.numero2 = "";
        this.operador = "";

    }

    suma() {
        return this.resultado = this.numero1 + this.numero2;
    }
    resta() {
        return this.resultado = this.numero1 - this.numero2;
    }
    multiplica() {
        return this.resultado = this.numero1 * this.numero2;
    }
    divide() {
        return this.resultado = this.numero1 / this.numero2;
    }
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

    set setNum2(valor2) {
        this.numero2 = valor2;
    }

    get getOperador() {
        return this.operador;
    }
    set setOperador(valor) {
        this.getOperador = valor;
    }
}

function botonNumerico(numero) {
    /*     nuevaCal.numero1 += numero.toString();
        console.log("El numero1 es: " + nuevaCal.getNum1);
        nuevaCal.numero2 += numero.toString();
        console.log("El numero2 es: " + nuevaCal.getNum2); */

    if (nuevaCal.getOperador == "") {
        nuevaCal.numero1 += numero.toString();
        console.log("El numero1 es: " + nuevaCal.getNum1);
    } else {
        nuevaCal.numero2 += numero.toString();
        console.log("El numero2 es: " + nuevaCal.getNum2);
    }
    nuevaCal.setResul = (nuevaCal.numero1 + nuevaCal.operador + nuevaCal.numero2);
    console.log("El resultado: " + nuevaCal.getResul);

}

function botonOperador(operador) {
    nuevaCal.operador = operador;
    console.log("El operador es " + nuevaCal.getOperador);
}

function nuevaCalculada() {
    nuevaCal = new Calculadora("");
    console.log(nuevaCal);
}

