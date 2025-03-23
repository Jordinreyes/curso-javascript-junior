
let titulo = document.querySelector(".titulo");
titulo.classList.add("titulo_Grande")   //  AÑADIR UNA CLASE AL ELEMENTO
titulo.classList.remove("titulo_Grande")    //  ELIMINA UNA CLASE DEL ELEMENTO

let valor1 = titulo.classList.item(1) // NOS DEVUELVE EL ELEMENTO QUE LE INDIQUEMOS DE LA CLASE
console.log(valor1);

let valor2 = titulo.classList.contains("Titulo");
console.log(valor2) //   El titulo tiene la clase Titulo y nos devuelve true

titulo.classList.toggle("Jordin"); //   AÑADE UNA CLASE AL ELEMENTO, SI EXISTE LA CLASE LA ELIMINA 

titulo.classList.replace("Jordin", "Rachael")  //  REMPLAZA UNA CLASE POR OTRA