/* 
    COFLA VUELVE DE LA COMISARIA EXAUSTO Y POR LO TANTO CANSADO QUE ESTABA SE FUE A DORMIR... AL OTRO DIA COMIENZAN LAS CLASES DEL CICLO BASICO DE LA UNIVERSIDAD (PORQUE COFLA QUIERE SER PROGRAMADOR Y SE INSCRIBIO EN LA FACULTDADDE INGENIERA PARA ESTUDIAR EL DESARROLLO DE SOFTARE). EN SU CURSO EN TOTAL SON 19 ALUMNOS, PERO SUGRIO UN PROBLEMA QUE COMPLICO UN POCO LA FACULTAD: SE ROMPIO EL REGISTRO DEL SISTEMA DE ASISTENCIA Y DURANTE LOS PROXIMOS 30 DIAS NO SE PODRAN HACER REGISTRO DE DATOS DE NINGUN TIPO, POR ENDE LAS CLASES NO PODRAN COMENAR HASTA QUE ESO SE SOLICIONE

    SOLUCIONES
    1.  CREAR UN MINI SISTEMA QUE NOS PERMITA REGISTRAR LOS ALUMNOS QUE ESES PRESENTE Y AUSENTES (P) && (A)
    2.  PASADO LOS 30 DIAS MOSTRAR LA SITUACION FINAL DE TODOS LOS ALUMNOS (NUMERO TOTAL DE P Y A)
    3.  SE PUEDE MAS DE UN MAXIMO DE 10% DE AUSENCIA POR SEMESTRE, SE TIENEN MAS QUE ACLARAR QUE ESTA REPROBADO
*/

let estudiantes = prompt("Cuantos estudiantes hay aca?");
let estudiantesTotal = [];

for (let i = 0; i < estudiantes; i++){
    estudiantesTotal[i] = [prompt("Nombre del alumno " + (i+1)),0]  //  INICIE POR 0
    console.table(estudiantesTotal);
}

const asistencia = (nombre, presentes) => {
    let asistentes = prompt(nombre);
    if (asistentes == "p" || asistentes == "P"){
        estudiantesTotal[presentes][1]++;
        console.table(estudiantesTotal);
    }else{
        return presentes;
    }
}

for (let i = 0; i < 30; i++){
    for(alumnos in estudiantesTotal){
        asistencia(estudiantesTotal[alumnos][0],alumnos);
    };
}

for (alumnos in estudiantesTotal){
    let resultado = `
        <b>Nombre del alumno: </b> ${estudiantesTotal[alumnos][0]} <br>
        <b style='color:green'>Asistencia: </b> ${estudiantesTotal[alumnos][1]} <br>
        <b style='color:#f00'>Faltas de asistencia: </b> ${30 - estudiantesTotal[alumnos][1]} <hr> <br>
    `
    if (30 - estudiantesTotal[alumnos][1] > 18){
        resultado += "<b style='color:#f00'>Has suspendido por faltar mucho</b>";
    }else{
        resultado += "";
    }

    document.write(resultado);
}