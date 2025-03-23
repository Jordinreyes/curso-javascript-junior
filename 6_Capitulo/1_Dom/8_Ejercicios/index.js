
/* 

    COFLA SE QUEDO ENCERRADO EN SU CASA PORQUE SE LE ROMPIO LA LLAVE, PERO NECESITA IR URGENTE A LA FACULTAD PORQUE NO PUEDE FALTAR NI UNA SOLA VEZ, SI QUIERES APROBAR LAS MATERIAS QUE LE FALTAN YA QUE ESTA AL LIMITE DE ASISTENCIA, ENTONCES TIENE QUE LLAMAR AL CERRAJERO Y PPEDIRLE QUE TRAIGA LA LLAVE INDICADA, NO HAY TIEMPO SUFICIENTE COMO PARA EL CERRAJERO VEA CUAL ES LA LLAVE INDICADA, SOLO PUEDE TRAER UNA Y PROBAR, ENTONCES COFLA SE DA CUENTA QUE ES UNA LLAVE ANTIGUA, POR ENDE NO HACE FALTA AFILARLA, SOLO NECESITA DECIRLE EL MODELO DE LLAVE PARA QUE EL CERRAJERO VENGA, PERO COFLA TIENE TANT MALAS SUERTE QUE NISIQUIERA INTERNET PARA PODER BUSCAR, LO QUE SI TIENE ES A UN PROGRAMADOR QUE LE HARA UN SISTEMA PARA MOSTRARLE LAS LLEVES POSIBLES Y DETERMINAR CUAL ES LA INDICAS, HAY SOLO 10 MODELOS POSIBLES, PERMITIR QUE COFLA SELECCIONA EL INDICADO.


    SOLUCION
    1-  CREAR SISTEMA QUE LE MUESTRE A COFLA LAS 1 LLAVES POSUBLES, CON SUS 4 IMAGENES Y COFLA DEBE SELECCIONAR CUAL LLAVE ELEGIR, UNA VEZ QUE COFLA SELECCIONO LA LLAVE, ENVIA LOS DATOS AL SERVIDOR, OTRO PROGRAMADOR SE ENCARGARA DE EL RESTO

*/

const contenedor = document.querySelector(".flex-container")

function crearLLave(nombre, modelo, precio){
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<b>${precio}€</b>`;
    img = "<img class='llave-img' src='llave.png'>";
    return [nombre, modelo, precio, img];
}

const changeHidden = (number) => {
    document.querySelector(".key-data").value = number;
}   


for (let i = 1; i <= 10; i++){
    let Modelorandom = Math.round(Math.random()*10000);
    let preciorandom = Math.round(Math.random()*10+30);
    let llave = crearLLave(`Llave ${i}`, `Modelo ${Modelorandom}`, `Precio ${preciorandom}`)

    let div = document.createElement("div");
    div.addEventListener("click" , () => {changeHidden(Modelorandom)});
    div.tabIndex = i;   //  tabIndex ES PARA QUE EL ELEMENTO QUEDE MARCADO
    div.classList.add(`flex-item${i}`, `flex-item`);
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    contenedor.appendChild(div);
}
