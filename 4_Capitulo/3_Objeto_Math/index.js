//  METODOS

//  sqrt() - RAIZ CUADRADA
let numero = Math.sqrt(25);;
document.write(numero + "<br>");

//  cbrt() - Devuelve RAIZ CUBICA de un numero
let numero2 = Math.cbrt(3);
document.write(numero2 + "<br>");

//  max() - Devuelve el mayor de cero o mas numeros
//  Me devuelve el numero mas grande
let numero3 = Math.max(4,1,6,12,65,90);
document.write(numero3 + "<br>");

//  min() - Devuelve el mas pequeño de cero o mas numero 
let numero4 = Math.min(1,3,2,4,0,10,20);
document.write(numero4 + "<br>");

//  random() - TE DEVUELVE UN ELEMENTO RANDON, DE RANGO QUE TU LE PONGAS
//  Forma de hacer un ramdon de 1 a 100
let numero5 = Math.random()*100;
numero5 = numero5.toString();
let num  = numero5[0] + numero5[1];
if (numero5[1] == "."){
    num = numero5[0];
}
document.write(num + "<br>");

//  round() - Devuelve el valor de un numero redondeado al numero mas cercano
//  Forma de hacer un ramdon de 1 a 100
let numero6 = Math.random()*100
numero6 = Math.round(numero6)
document.write(numero6 + "<br>");

//  floor() - Devuelve el mayor entero menor que o igual a un numero
//  siempre redondea hacia abajo
//  Forma de hacer un ramdon de 0 a 100
let numero7 = Math.random()*99;
numero7 = Math.floor(numero7+1);
document.write(numero7 + "<br>");

//  trunc() - Devuelve la parte entera del numero x, la eliminacion de los digitos fraccionarios
let numero8 = Math.trunc(10.5);
document.write(numero8 + "<br>") // ELIMINA LOS DECIMALES

//  ----------------------------------------------------------------------------------------------- 
//  PROPIEDADES

//  pi - TE DEVUELVE EL NUMERO pi
let numero9 = Math.PI;
document.write(numero9 + "<br>");

//  sqrt1_2 - RAIZ CUADEADA DE 1/2, Equivalente a 1 sobre la raiz cuadrada de 2, aproximadamente 0.707
let numero10 = Math.SQRT1_2;
document.write(numero10 + "<br>");

//  sqrt2 - Raiz cuadra de 2, aproximadamente 1.414
let numero11 = Math.SQRT2;
document.write(numero11 + "<br>");

//  ------------------------------------------------------------------------------------------------

//  E - constante de auler, la base de los logaritmo naturales, aproximadamente
let numero12 = Math.E;
document.write(numero12 + "<br>");

//  LN2 - Logaritmo nartual de 2, aproximadamente 0.693
let numero13 = Math.LN2;
document.write(numero13+ "<br>");

//  LN10 - Logaritmo nartual de 10, aproximadamente 2.303
let numero14 = Math.LN10;
document.write(numero14 + "<br>");

//  LOG2E  - logaritmo de E con base 2, aproximadamente 1.443
let numero15 = Math.LOG2E;
document.write(numero15+ "<br>");

//  LOG10E - logaritmo de E con base 10, aproximadamente 0.434
let numero16 = Math.LOG10E;
document.write(numero16);