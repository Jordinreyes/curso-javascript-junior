let range = document.querySelector(".range"); //  OBTENEMOS EL OBJETO CON LA CLASE .RANGE, EL INPUT ES RANGE
range.setAttribute("type", "number"); //  CAMBIAMOS EL TIPO DE INPUT A TEXT O TAMBIEN LO CREA
console.log(range.getAttribute("type"))  //  OBTENEMOS EL TIPO DE INPUT
range.removeAttribute("type") //    ELIMINAR EL TIPO DE INPUT

/* 


*/

let names = document.querySelector(".name");
names.setAttribute("contenteditable", "TRUE");  //  NOS PERMITE EDITAR EL CONTENIDO, DEL OBJETO CON LA CLASE .NAMES
names.setAttribute("dir","lft"); //  EL OBJETO SE PONE DE IZQUIERDA A DERECHA
names.setAttribute("dir", "rtl");    //  EL OBJETO SE PONE DE DERECHA A IZQUIERDA
names.setAttribute("hidden", "false");    //  OCULTA EL OBJETO


//  CON EL TABULADOR VAMOS SELECCIONANDO LOS ELEMENTO DEL HTML
//  let focus = document.querySelector(".focus");
//  focus.setAttribute("tabindex", "3");

//  TITILE
let jordin = document.querySelector(".focuse");
jordin.setAttribute("title", "JORDIN REYES");   //  LE PONEMOS TITULO AL ELEMENTO CON LA CLASE .jordin
