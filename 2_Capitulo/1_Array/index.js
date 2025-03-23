
//  DECLARACION DE ARRAY
let numeros = [1,2,3,4,5];

//  MOSTRAR UN ELEMENTO DEL ARRAY
document.write(numeros[0] + "<br>");

//  ACTUALIZAR UN CAMPO ESPECIFICO
numeros[0] = 20;
document.write(numeros + "<br>");

//  AÑADIR N ELEMENTOS A LA IZQUIERDA
numeros.unshift(100,200,300);
document.write(numeros + "<br>");

//  AÑADIR N ELEMENTOS A LA DERECHA
numeros.push(400, 500, 600);
document.write(numeros + "<br>");

//  ELIMINAR EL PRIMER ELEMENTO DEL ARRAY
numeros.shift();
document.write(numeros + "<br>");

//  ELIMINAR EL ULTIMO ELEMENTO DEL ARRAY
numeros.pop();
document.write(numeros + "<br>");

//  BORRAR UN CAMPO ESPECIFICO
numeros.splice(0,1);
document.write(numeros + "<br>");

//  CONCATENAR 2 ARRAY
let nombres = ["Jordin", "Jose"];
let apellidos = [" Reyes", "Perez"];
let concatenacion = nombres.concat(apellidos);
document.write(concatenacion + "<br>");

//  ORDENAR UN ARRAY
let numeros1 =[5,4,3,2,1];
numeros1.sort();
document.write(numeros1 + "<br>");

//  REVERTIR UN ARRAY
let numeros2 = [1,2,3,4,5];
numeros2.reverse();
document.write(numeros2 + "<br>");

//  RECORRER UN ARRAY
let numeros3 = [1,2,4,4,2,5];
numeros3.forEach(elementos => document.write(elementos));
document.write("<br>");

//  EXTRAER N ELEMENTOS DE UN ARRAY
let numeros4 = [1,2,3,4,5,6,7,8,9,10];
let extraer4Primeros = numeros4.slice(0,4);
document.write(extraer4Primeros + "<br>");

//  AÑADIR UN ELEMENTO EN LA POSICION QUE YA EXISTE ES COMO ACTUALIZARLO
let numeros5 = [10,20,30,40,60];
numeros5.splice(0,1, "Jordin");
document.write(numeros5 + "<br>");