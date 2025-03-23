//  WHILE

document.write("While" + "<br>");
// GENERAR LOS NUMEROS DEL 1 AL 20 
let num1 = 1;
while (num1 <= 20){
    document.write(num1 + " ");
    num1++
};
document.write("<br>");

//  GENERAR LOS NUMEROS DEL 20 AL 1
let num2 = 20;
while (num2 >= 1){
    document.write(num2 + " ");
    num2--;
}
document.write("<br>");

//  GENERAR LA TABLA DE MULTIPLICAR INCREMENTANDO
let tabla1 = 10;
let num3 = 1;
while (num3 <= 12){
    document.write(`${tabla1} * ${num3} = ` + (tabla1*num3) + "<br>");
    num3++;
};
document.write("<br>");

//  GENERAR LA TABLA DE MULTIPLICAR DECREMENTO
let tabla2 = 12;
let num4 = 12;
while (num4 >= 1){
    document.write(`${tabla2} * ${num4} = ` + (tabla2*num4) + "<br>");
    num4--;
};
document.write("<hr>");
document.write("<br>");

/*


*/

//  WHILE + BREAK + CONTINUE
document.write("While + break" + "<br>");
let num5 = 1;
while (num5 <= 20){
    if (num5 == 12){
        break
    };
    document.write(num5 + " ");
    num5++;
}
document.write("<br>");

document.write("While + continue" + "<br>");
let num6 = 1;
while (num6 <= 20){
    num6++;
    if (num6 == 12){
        continue
    }
    document.write(num6 + " ");
}
document.write("<hr>");
document.write("<br>");

/* 


*/

//  FOR 
// GENERAR LOS NUMEROS DEL 1 AL 20 
document.write("For" + "<br>");
for (let i = 1; i <= 20; i++){
    document.write(i + " ");
};
document.write("<br>");

// GENERAR LOS NUMEROS DEL 20 AL 1 
for (let i = 20; i >= 1; i--){
    document.write(i + " ");
};
document.write("<br>");

//  GENERAR LA TABLA DE MULTIPLICAR INCREMENTANDO
let tabla3 = 5;
for (let i = 1; i <= 12; i++){
    document.write(`${tabla3} * ${i} = ` + (tabla3*i) + "<br>")
};
document.write("<br>");

//  GENERAR LA TABLA DE MULTIPLICAR DECREMENTO
let tabla4 = 60;
for (let i = 12; i >= 1; i--){
    document.write(`${tabla4} * ${i} = ` + (tabla4*i) + "<br>")
};


document.write("<hr>");
document.write("<br>");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  FOR + BREAK + CONTINUE
document.write("For + Break" + "<br>");
for (let i = 1; i <= 20; i++){
    if (i == 12){
        break;
    };
    document.write(i + " ");
};
document.write("<br>");

document.write("For + Continue" + "<br>");
for (let i = 1; i <= 20; i++){
    if (i == 12){
        continue;
    };
    document.write(i + " ");
}
document.write("<hr>");
document.write("<br>");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  FOR IN
//  DEVUELVE INDICE
document.write("For in" + "<br>");
let nombres = ["Jordin", "Jose", "Reyes", "Perez"];
for (let informacion in nombres){
    document.write(informacion + " ");
};
document.write("<br>");
//  SI QUIERO TRABAJAR CON LOS VALORES DEL ARRAY, PERO PARA USARLO ASI, PODEMOS HACER CON UN OFF
for (let informacion in nombres){
    document.write(nombres[informacion] + " ");
}
document.write("<hr>");
document.write("<br>");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  FOR OFF
//  DEVUELVE LOS VALORES
document.write("For off" + "<br>");
let informacion = ["Jordin", "Jose", "Reyes", "Perez"];
for (let datos of informacion){
    document.write(datos + " ");
}
document.write("<hr>");
document.write("<br>");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  RECORRER 2 ARRAY
document.write("Recorrer 2 array" + "<br>")
let array1 = ["Jordin", "Pedro", "Marcelo"];
let array2 = ["Marc", "Miguel", "Juan", array1];

for (let array in array2){
    if (array == 3){
        for (let array of array1){
            document.write(array + " ");
        };
    }else{
        document.write(array2[array]+ " ");
    }
}
document.write("<hr>");
document.write("<br>")
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//  LABEL
document.write("Label" + "<br>");
//  ES ASOCIAR UN BUCLE A UN NOMBRE
//  USAMOS LABEL CUANDO QUEREMOS TERMINAR TODO EL BUCLE
forbucle:
for (let array in array2){
    if (array == 3){
        for (let array of array1){
            document.write(array + " ");
            break forbucle;
        };
    }else{
        document.write(array2[array]+ " ");
    }
}

//  NO USAMOS LABEL, CUANDO QUEREMOS DETENER UN BUCLE ADENTRO DE OTRO BUCLE PERO LO QUEREMOS SEGUIR RECORRIENDO
