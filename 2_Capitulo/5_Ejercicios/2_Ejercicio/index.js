/*
    
    UN JOVEN MUY AFORTUNADO LOGRO GANAR EL PRIMERO PREMIO DE LA LOTERIA...EXACTO, ESTAMOS HABLANDO DE UN VAGABUNDO, AL QUE COFLA LE DIO UNA MANO, ESTE POBRE DECIDE HACER UNA FIESTA PARA FESTEJAR QUE SALIO DE LA POBREZA CON ESTE MILLONARIO COMPRO UNA MAQUINA QUE DEJA PARAR A LOS MAYORES DE EDAD, ENTRE OTRA COSAS

    SOLUCIONES
    1.  DEJAR PASAR A SOLOS MAYORES DE EDAD
    2.  LA PRIMER PERSONA QUE ENTRE DESPUES DE LAS 2AM, NO PAGA
*/


let gratis = false;

const entradas = (time) => {
    let edad = prompt("Cual es tu edad?");
    if (edad >= 18){
        if (time >= 2 && time < 7 && gratis == false){
            document.write("Hola, Eres la primer persona en llegar a las 2:00 puedes entrar gratis" + "<br>");
            free = true;
        }else{
            document.write("Hola, La entrada cuesta 10€" + "<br>");
        }
    }else{
        document.write("No puedes entrar, eres menor de edad" + "<br>");
    }
}

entradas(12);
entradas(1);
entradas(2);
entradas(3);
entradas(2);