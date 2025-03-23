
let titulo = document.querySelector(".titulo");
let valor = titulo.textContent; //  NOS DEVUELVE EL VALOR DE LA ETIQUETA O CLASE .titulo, LAS ETIQUTAS HTML DENTRO DE ESA CLASE, NO LAS DEVUELVE 
document.write(valor + "<br>"); //  SIEMPRE MOSTRARA EL VALOR, AUNQUE TENGA VISIBILY HIDDEN

let valor2 = titulo.innerText;  //  YA NO SE USA
document.write(valor2 + "<br>") //  NOS DEVUELVE EL VALOR DE LA ETIQUETA O CLASE .titulo, LAS ETIQUTAS HTML DENTRO DE ESA CLASE, NO LAS DEVUELVE

let valor3 = titulo.innerHTML;
document.write(valor3 + "<br>") //  NOS DEVUELVE EL VALOR DE LA ETIQUETA O CLASE .titulo, DEVUELVE LAS ETIQUTAS HTML DENTRO DE ESA CLASE

let valor4 = titulo.outerHTML;  //  NOS DEVUELVE LA ETIQUETA Y EL VALOR DE LAS ETIQUETA SI LO HACEMOS CON UN ALERT
document.write(valor4); //  NOS DEVUELVE EL VALOR DE LA ETIQUETA O CLASE .titulo, DEVUELVE LAS ETIQUTAS HTML DENTRO DE ESA CLASE

