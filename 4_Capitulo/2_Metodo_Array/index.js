
//  splice() - Permite agregar o eliminar elementos en cualquier posición de un array.
//  ELIMINA EL RANGO QUE LE PONGA Y CUANDO AÑADO NUEVOS ELEMENTOS, LOS AÑADE EN ESA POSICION ES DECIR LOS REMPLAZA
let names = ["Jordin", "Pedro", "Rachael", "Juan", "Marc"];
names.splice(0,3, "Diego", "Rita", "Jorge"); //   ELIMINA JORDIN, PEDRO, RACHAEL
                            //  RESULTADO REMPLAZANDOLO:  DIEGO, RIYA, JORGE, JUAN, MARC
document.write(names + "<br>");

//  METODOS ACCESORES
//  join() - Une todos los elementos de un array en una cadena con un separador especificado.
let moviles = ["Samsung", "Huawei", "Phone", "Motorola"];
let resultado = moviles.join(" - "); //  Lo convierte a una cadena de texto, podemos usar el seperador que nosotros vayamos a usar
document.write(resultado + "<br>");

//  slice() - Devuelve una porción de un array sin modificar el original.
let numeros = [1,2,3,4,5];
let resultado2 = numeros.slice(0,2); // Elemento 2, no lo extrae
let resultado3 = numeros.slice(0); // Obtenemos todos los elementos
document.write(resultado2 + "<br>");
document.write(resultado3 + "<br>");

//  filter() - Crea un nuevo array con todos los elementos que cumplen una condición dada.
//  forEach() - Ejecuta una función sobre cada elemento del array.
let nombres = ["Jordin", "Rachael", "Diego", "Rita"];

//  FORMA 1
nombres.filter((names) => {
    document.write(names + "<br>");
});

//  DIFERENCIA DE FOREACH Y FILTER
//  FILTER NOS DEJA HACER UNA CONDICION, SI SE CUMPLE NOS DEVUELVE ALGO
//  FOREACH NO PODEMOS HACER ESTA CONDICION

//  FORMA 2 (FILTER)
//  Vamos a devolver los elementos que cumpla una condicion 
//  Nos devuelve los nombres que tengan mas de 4 letras
let resultado4 = nombres.filter(names => names.length > 4);
document.write(resultado4 + "<br>")