//  ATRIBUTOS DE INPUTS

let input = document.querySelector(".input-normal");
console.log(input.className + "<br>");   //  OBTENEMOS EL NAME DEL INPUT
console.log(input.value + "<br>");   //  OBTENEMOS EL VALUE DEL INPUT
console.log(input.type = "number");  //  CAMBIAMOS EL TYPE DEL INPUT
input.type = "text";

let files = document.querySelector(".files")
files.accept = "image/png"; //  QUE SOLO ACEPTE IMAGEN PNG

//  FORM => NOS PERMITE HEREDAR EL BUTTON DE SUBMIT FUERA DEL FORM

//  MINLENGTH
let pepe = document.querySelector(".minimo");
pepe.setAttribute("minlength", "4");    //  MINIMO DE CARACTERES


//  PLACEHOLDER
pepe.placeholder = "Money";

//  REQUIRED
pepe.require = "required";