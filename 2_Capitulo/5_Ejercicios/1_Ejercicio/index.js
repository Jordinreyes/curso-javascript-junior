//  Ejercicio 1

//  Suma de números del 1 al 10
//  resultado esperado: 55
let suma=0
for (let i = 1; i <= 10; i++){
    suma+=i
};
document.write(suma);
document.write("<br>");


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  Ejercicio 2
//  Números pares entre 1 y 20
for (let i = 1; i <= 20; i++){
    if (i % 2 == 0){
        document.write(i + " ");
    }
}
document.write("<br>");


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Ejercicio 3

//  Imprimir elementos de un array
let nombre = ["Jordin", "Marc", "Rachael"];
nombre.forEach(nombres => document.write(nombres + " "));
document.write("<br>");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  Ejercicio 4
//  Propiedades de un objeto

//  Resultado esperado:
//  nombre: Juan
//  edad: 30
//  ciudad: Madrid

let informacion = {
    name: "Juan",
    edad: 21,
    ciudad: "Madrid"
};

let name = informacion["name"];
let edad = informacion["edad"];
let ciudad = informacion["edad"];
let resultado = `
    <b>Nombre: </b> ${name} <br>
    <b>Edad: </b> ${edad} <br>
    <b>Ciudad: </b> ${ciudad}
`;
document.write(resultado);
document.write("<br>");


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  Ejercicio 5
//  Romper un bucle con break
//  resultado esperado: numero 7 encontrado
for (let i = 1; i <= 10; i++){
    if (i == 7){
        document.write("Numero " + i + " encontrado")
        break;
    }
}
document.write("<br>");
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//  Ejercicio 6
//  Saltar iteraciones con continue
//  resultado esperado que no salga el 6
for (let i = 1; i <= 10; i++){
    if (i == 6){
        continue;
    };
    document.write(i + " ");
};
document.write("<br>");


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  Ejercicio 7
//  7: Bucle anidado con label
//  i = 0, j = 0
//  i = 0, j = 1
//  i = 0, j = 2
//  i = 1, j = 0
//  i = 1, j = 1

for (let i = 0; i <= 1; i++){
    for (let j = 0; j <= 2; j++){
        document.write("i = " + i + ", " + "j = " + j + "<br>");
        if (i == 1 && j == 1){
            break;
        };
    } 
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  EJERCICIO 8
//  Invertir un array
//  Dado un array ["a", "b", "c", "d", "e"], utiliza un bucle para imprimirlo en orden inverso.
let letras = ["a", "b", "c", "d", "e"];
let numero = letras.length;
for (let i = numero; i >= 0; i--){
    document.write(letras[i] + " ");
};
document.write("<br>");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  EJERCICIO 9
//  Encontrar el número mayor en un array
//  Dado un array de números [45, 78, 12, 89, 34], encuentra el número más grande usando un bucle.
let numeros = [45, 78, 12, 89, 34,90];
let primerNumero = numeros[0];
let mayor = "";

for (let i = 1; i <= numeros.length; i++){
    if (primerNumero < numeros[i]){
        mayor = numeros[i];
    }else if (primerNumero > numeros[i]){
        mayor = primerNumero;
    };
};
document.write(mayor + "<br>");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  EJERCICIO 10
//  Invertir un número
//  Dado un número, inviértelo. Ejemplo: si el número es 1234, el resultado debe ser 4321
for (let i = 4; i >= 1; i--){
    document.write(i);
}
document.write("<br>");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  EJERCICIO 12
//  Sumar dígitos de un número
//  Dado un número como 54321, usa un bucle para sumar sus dígitos (5 + 4 + 3 + 2 + 1 += 15).
let suma2 = 0;
for (let i = 5; i >= 1; i--){
    document.write(i + "+")
    suma2+=i
};
document.write("=" + suma2);
document.write("<br>");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
    EJERCICIO 13
    Generar un triángulo de asteriscos

    *
    **
    ***
    ****
    *****

*/

for (let i = 1; i <= 5; i++){
    for (let j = 2; j <= i; j++){
        document.write("*");
    }
    document.write("*" + "<br>");
}
document.write("<br>");


/* 

    EJERCICIO 14
    Generar un cuadrado de asteriscos

    ***********
    ***********
    ***********
    ***********

*/
for (let i = 1; i <= 4; i++){
    for (let j = 1; j <= 10; j++){
        document.write("*");
    }
    document.write("*" + "<br>");
}

document.write("<br>");

/*

    EJERCICIO 15
    Generar un rectangulo de asteriscos

    **************************************************
    **************************************************
    **************************************************

*/
for (let i = 1; i <= 3; i++){
    for (let j = 1; j <= 50; j++){
        document.write("*");
    }
    document.write("*" + "<br>");
}
document.write("<br>");


/* 
    EJERCICIO 16
    Generar un triángulo de asteriscos

    *****
    ****
    ***
    **
    *

*/

for (let i = 5; i >= 1; i--){
    for(let j = i; j >= 2; j--){
        document.write("*");
    }
    document.write("*" + "<br>");
}
document.write("<br>");



/* 

    EJERCICIO 17
    Generar un diamante de asterisco

    *
    **
    ***
    ****
    *****
    *****
    ****
    ***
    **
    *

*/

for (let i = 1; i <= 5; i++){
    for (let j = 2; j <= i; j++){
        document.write("*");
    }
    document.write("*" + "<br>");
}
for (let i = 5; i >= 1; i--){
    for(let j = i; j >= 2; j--){
        document.write("*");
    }
    document.write("*" + "<br>");
}