//  FUNCIONES DE STRINGS

let name = "Jordin Jose";
let surname = " Reyes Perez";
let resultado = name.concat(surname);
document.write(resultado + "<br>");

//  Si una cadena comienza con los caracteres de otra cadena, devuelva true, si no devuelva false
//  Ambos inician con Cadena, Por eso devuelve true;
//  Solo si inician con la misma palabra
let cadena = "Cadena de prueba";
let cadena2 = "Cadena";
let resultado2 = cadena.startsWith(cadena2);
document.write(resultado2 + "<br>");


//  Si una cadena termina con los caracteres de otra cadena, devuelva true, si no devuelva false
//  Ambos terminan con prueba, Por eso devuelve true;
//  Solo si terminan con la misma palabr o letras , devuelve true
let cadena3 = "Cadena de prueba";
let cadena4 = "prueba";
let resultado3 = cadena3.endsWith(cadena4);
document.write(resultado3 + "<br>");

//  Si una cadena puede encontrarse dentro de otra cadena, devuelve true, si no false
//  No importa si estan al inicio o al final
let cadena5 = "Cadena de prueba";
let cadena6 = "de";
let resultado4 = cadena5.includes(cadena6);
document.write(resultado4 + "<br>");

//  Devuelve el indice del primer caracter de la cadena, si no existe, devuelve -1
//  Nos devuelve la posicion, donde inicia la cadena
//  Si no existe la cadena, nos devuelve -1
let cadena7 = "Cadena de prueba";
let cadena8 = "prueba";
let resultado5 = cadena7.indexOf(cadena8);
document.write(resultado5 + "<br>");

//  Devuelve el ultimo indice del primer caracter de la cadena, si no existe, devuelve-1
//  Nos da la ultima palabra, porque te lo da de atras para adelante
let cadena9 = "Pedro es un tonto tonto tonto tonto";
let resultado6 = cadena9.lastIndexOf("tonto");
document.write(resultado6 + "<br>");

//  padStart () - [Propuesta de estandar] - Rellenar cadena al principio con los caracteres deseados
//  Tienes que pasarle la longitud y una letra especifica del string
//  Resultado de esto: aaaabc
let cadena10 = "abc";
let resultado7 = cadena10.padStart(6, "a");
document.write(resultado7 + "<br>");

//  padEnd () - [Propuesta de ECMA] - Rellenar cadena al final con los caracteres deseados
//  Tienes que pasarle la longitud y una letra especifica del string
//  Resultado de esto: abcaaa
let cadena11 = "abc";
let resultado8 = cadena11.padEnd(6,"a");
document.write(resultado8 + "<br>");

//  repeat () - Devuelve la misma cadena pero repetida la cantidad que le indiquemos
//  Se repite la cadena, cuantas veces se lo digas
//  repeat(2), la cadena se repetira 2 veces
//  Resultado de esto: abcabc
let cadena12 = "abc";
let resultado9 = cadena12.repeat(2);
document.write(resultado9 + "<br>");


//  split() - Divide una cadena en un array de subcadenas.
//  STRING TO ARRAY
let cadena13 = "Hola, Como, estas";
let resultado10 = cadena13.split(",")
document.write(resultado10 + "<br>");

//  substring () - Nos retorna un pedazo de la cena que seleccionemos
//  CREA UN NUEVO STRING, INICIO Y FIN
//  Le digo que inicie en la posicion 0, y me pilla 2 caracteres
//  Resultado: AB
let cadena14 = "ABCDEFG";
let resultado11 = cadena14.substring(0,2);
document.write(resultado11 + "<br>");


//  toLowerCase () - Convierte una cadena a minuscula
let cadena15 = "JORDIN";
let resultado12 = cadena15.toLowerCase();
document.write(resultado12 + "<br>");

//  toUpperCase () - Convierte una cadena a mayuscula
let cadena16 = "jordin";
let resultado13 = cadena16.toUpperCase();
document.write(resultado13 + "<br>");

//  toString() - Convierte un array en una cadena de texto separada por comas.
let array = ["Jordin", "Pedro", "Marcelo"];
let resultado14 = array.toString();
document.write(resultado14[0] + "<br>");

//  trim() - Elimina los espacio en blanco al principio y al final de una cadena
let cadena17 = "        JORDIN          ";
let resultado15 = cadena17.trim();
document.write(resultado15 + ", Caracteres: " + resultado15.length   + "<br>");

//  trimEnd() - Elimina los espacios en blanco al final de una cadena
let cadena18 = "        Jordin          ";
let resultado16 = cadena18.trimEnd();
document.write(resultado16 + ", Caracteres: " + resultado16.length  +"<br>");

//  trimStart() - Elimina los espacios en blanco al principio de una cadena
let cadena19 = "        Jordin          ";
let resultado17 = cadena19.trimStart();
document.write(resultado17 + ", Caracteres: " + resultado17.length + "<br>");

//  valuesOf() - Retorna el valor primitivo de un objeto string