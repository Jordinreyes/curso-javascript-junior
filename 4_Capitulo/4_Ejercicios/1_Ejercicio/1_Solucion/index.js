
/*

    EJERCICIO 1
    
    Cofla ya esta terminando el primer semestre del cilo, la tarea que le debe realizar es mucho mas avanzada, de la que tenia antes ademas de sumar, resta, multiplicacion, division ahora tambien calcular potencias, raizes cuadrada y cubicas.

*/


class calculadora{
    constructor(sumar, restar, multiplicar, dividir, potenciacion, raizCuadrada, raizCubica){
        this.sumar = sumar;
        this.restar = restar;
        this.multiplicar = multiplicar;
        this.dividir = dividir;
        this.potenciacion = potenciacion;
        this.raizCuadrada = raizCuadrada;
        this.raizCubica = raizCubica
    };

    suma(numero1, numero2){
        return  numero1 + numero2;
    };

    resta(numero1, numero2){
        return numero1 - numero2;
    };

    multiplicion(numero1, numero2){
        return numero1 * numero2;
    };

    division(numero1, numero2){
        return numero1 / numero2;
    };

    potencia(numero1, numero2){
        return numero1 ** numero2
    };

    raizCuadradaa(numero1){
        return Math.sqrt(numero1)
    };

    raizCubicaa(numero1){
        return Math.cbrt(numero1)
    }
}

const Calculadora = new calculadora();
let opcion = prompt("1.SUMAR, 2.RESTAR, 3.MULTIPLICAR, 4.DIVIDIR, 5.POTENCIA, 6.RAIZ CUADRADA, 7.RAIZ CUBICA");

if (opcion == 1){
	let numero1 = parseFloat(prompt("Escribe el primer numero para sumar?"));
	let numero2 = parseFloat(prompt("Escribe el segundo numero para sumar?"));
	let sumar = Calculadora.suma(numero1,numero2);
    document.write(`${numero1} + ${numero2} = ${sumar}`);
}else if (opcion == 2){
    let numero1 = parseFloat(prompt("Escribe el primer numero para restar"));
    let numero2 = parseFloat(prompt("Escribe el segundo numero para restar"));
    let resta = Calculadora.resta(numero1,numero2);
    document.write(`${numero1} - ${numero2} = ${resta}`);
}else if (opcion == 3){
    let numero1 = parseFloat(prompt("Escribe el primer numero para multiplicar"));
    let numero2 = parseFloat(prompt("Escribe el segundo numero para multiplicar"));
    let multiplicar = Calculadora.multiplicion(numero1,numero2)
    document.write(`${numero1} * ${numero2} = ${multiplicar}`);
}else if (opcion == 4){
    let numero1 = parseFloat(prompt("Escribe el primer numero para dividir"));
    let numero2 = parseFloat(prompt("Escribe el segundo numero para dividir"));
    let dividir = Calculadora.division(numero1,numero2)
    document.write(`${numero1} / ${numero2} = ${dividir}`);
}else if (opcion == 5){
    let numero1 = parseFloat(prompt("Escribe el primer numero"));
    let numero2 = parseFloat(prompt("Escribe la potencia"));
    let potenciaa = Calculadora.potencia(numero1,numero2)
    document.write(`${numero1} ** ${numero2} = ${potenciaa}`);
}else if (opcion == 6){
    let numero1 = parseFloat(prompt("Escribe el numero para sacarle raiz cuadrada"));
    let raiz = Calculadora.raizCuadradaa(numero1);
    document.write(`La raiz cuadrada de ${numero1} es: ${raiz}`)
}else if (opcion == 7){
    let numero1 = parseFloat(prompt("Escribe el numero para sacarle raiz cubica"));
    let raizC = Calculadora.raizCubicaa(numero1);
    document.write(`La raiz cubica de ${numero1} es: ${raizC}`)
}else{
    document.write("OPCION INVALIDA");
}