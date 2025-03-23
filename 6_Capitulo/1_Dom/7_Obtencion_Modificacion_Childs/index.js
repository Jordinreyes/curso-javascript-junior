
let contenedor = document.querySelector(".contendor");
let primerHijo = contenedor.firstChild; //  NOS DEVUELVE EL PRIMER ELEMENTO DEL LA CLASE .contendor, MIRA LOS ESPACIOS EN BLANCO
console.log(primerHijo);

let ultimoHijo = contenedor.lastChild;  //  NOS DEVUELVE EL ULTIMO HIJO DEL LA CLASE .contenedor, MIRA LOS ESPACIOS EN BLANCO
console.log(ultimoHijo);


/*

    MEJORAR USAS ESOS, PARA IGNORAR LOS ESPACIOS EN BLANCO DE NUESTRO CODIGO HTML

*/

let primero = contenedor.firstElementChild; //  NOS DEVUELVE EL PRIMER HIJO, E IGNORA LOS ESOPACIOS EN BLANCO
console.log(primero);

let ultimo = contenedor.lastElementChild;   //  NOS DUELVE EL ULTIMO HIJO, E IGNORA LOS ESPACIOS EN BLANCOS
console.log(ultimo);

/* 

    DEVUELVE TODOS LOS HIJOS DEL ELEMENTO PADRE

*/

//  SE PUEDE RECORRER PORQUE ES UN OBJETO CON UN FOREACH
let allNodes = contenedor.childNodes;   //  NOS DEVUELVE TODOS LOS NODOS HIJOS INCLUYENDOS LOS ESPACIOS
console.log(allNodes);


//  NO LO PODEMOS RECORRER CON UN FORECH, TIENE QUE SER CON UN FOR OF
let hijos = contenedor.children;    //  NOS DEVUELVE TODOS LOS NODOS HIJOS, PERO NO INVOLUCRA LOS ESPACIOS
console.log(hijos);

/* 

    METODOS DE CHILDS

*/

let h1_Antiguo = document.querySelector(".nombre")
let parrafo = document.querySelector(".fecha")

const h1_Nuevo = document.createElement("h1")
h1_Nuevo.innerHTML = "Jordin Reyes Perez";  

contenedor.replaceChild(h1_Nuevo, h1_Antiguo);  //  REMPLAZA EL CONTENIDO DE UN H1 ANTIGUO, POR EL NUEVO CREADO

contenedor.removeChild(parrafo) //  ELIMINA UN HIJO, DEL PADRE, ME HA ELIMINADO LA ETIQUETA 

let respuesta = contenedor.hasChildNodes(); //  MIRA SI EL PADRE TIENE HIJOS CREADOS
if (respuesta){
    console.log("El elemento si tiene hijos");
}else{
    console.log("El elemento no tiene hijos")
}

/*

    PROPIEDADES DEL PADRE

*/

console.log(h1_Nuevo.parentElement)   //  NOS DEVUELVE EL ELEMENTO PADRE DE ESE ELEMENTO
console.log(contenedor.parentElement)


/* 

    PROPIEDADES DE SIBLINGS
    HACER PRUEBA SIN CODIGOS QUE LOS ELIMINE O COSAS ASI

*/

console.log(h1_Nuevo.nextSibling)   //  NOS DEVUELVE EL SIGUIENTE HERMANO, TIENE EN CUENTA LOS ESPACIOS EN BLANCO

console.log(h1_Nuevo.previousSibling)   //  NOS DEVUELVE EL ULTIMO HERMANO, TIENE EN CUENTA LOS ESPACIOS EN BLANCO

console.log(h1_Nuevo.nextElementSibling)    //  NOS DEVUELVE EL SIGUIENTE HERMANO, Y NOS DEVUELVE EL ELEMENTO

console.log(h1_Nuevo.previousElementSibling)    //  NOS DEVUELVE EL PRIMER HERMANO QUE EXISTE


/* 



*/

const div = document.querySelector(".div-3")
console.log(div.closest(".div"))    //  NOS SELECCIONA EL ELEMENTO ACCEDENTE DEL ELEMENTO MAS CERCANO