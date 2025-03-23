let contenedor = document.querySelector(".contenedor");
let items = document.createElement("li");   //  CREA UN ELEMENTO LI EN EL ELEMENTO CON CLASE .contenedor
let nodo = document.createTextNode("Inicio");   //  LE AÑADIMOS UN TEXTO AL ELEMENTO LI
items.appendChild(nodo);    //  LO AÑADIMOS AL ELEMENTO LI
contenedor.appendChild(items)   //  AÑADIMOS EL LI AL ELEMENTO .contenedor
console.log(items);

/* 
    OTRA FORMA DE HACERLO CON EL LI
    NORMALMENTE SE USA ESTA
*/

let parrafo = document.createElement("h2");
parrafo.innerHTML = "About Us";
contenedor.appendChild(parrafo);
console.log(contenedor);

/*
    CREAR MUCHOS ELEMENTO DENTRO DE UN DIV O UN ELEMENTO
*/

let fragmentos = document.createDocumentFragment();
for (let i = 0; i < 5; i++){
    const li = document.createElement("li");
    li.innerHTML = "Contact Us";
    fragmentos.appendChild(li);
};
contenedor.appendChild(fragmentos);