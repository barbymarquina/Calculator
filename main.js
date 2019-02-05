var nuevaCal;
class Calculadora {
    constructor() {
        this.resultado = "";
        this.numero1 = "";
        this.numero2 = "";
        this.operador = "";

    }

    suma() {
         this.resultado = this.getNum1 + this.getNum2;
    }
    resta() {
         this.resultado = this.getNum1 - this.getNum2;
    }
    multiplica() {
         this.resultado = this.getNum1 * this.getNum2;
    }
    divide() {
         this.resultado = this.getNum1 / this.getNum2;
    }
    igualar() {
        switch (this.getOperador) {
            case '+':
                this.suma();
                break;
            case '*':
                this.multiplica();
                break;
            case '-':
                this.resta();
                break;
            case '/':
                this.divide();
                break;
            default:
                break;
        }
        this.setNum1= " ";
        this.setNum2= " ";

    }

    get getResul() {
        return this.resultado;
    }

    set setResul(resultado) {
        this.resultado = resultado;
    }

    get getNum1() {
        return parseInt(this.numero1);
    }

    set setNum1(valor1) {
        this.numero1 = valor1;
    }

    get getNum2() {
        return parseInt(this.numero2);
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
    nuevaCal.setResul = (nuevaCal.numero1 + nuevaCal.operador + nuevaCal.numero2).toString();
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

function botonIgualar() {
    nuevaCal.igualar();
    console.log(nuevaCal.getResul);
}
