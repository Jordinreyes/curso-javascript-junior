/*
    La facultad de cofla esta por comensar y ya las 12 materias de la carrera tienen asignado un profesor y todos los  alumnos que se anotaron en dicha clase, pero necesitamos ver esto mas ordenadamente

    SOLUCIONES
    1.  Crear una funcion que al pasarle como parametro la materia nos devuelva:
    2.  Profesor Asignado
    3.  El nombre de todos los alumnos
*/
let asignaturas = {
    LAW :  ["Andreu Rig", "Jordin", "Pedro", "Christian", "Cofla"],
    SXIN : ["Juanra", "Jordin", "Pedro", "Jorge"],
    SGBD : ["Jordi", "Jordin", "Pedro", "Cofla"],
    SAD :  ["Nicolau", "Jorge", "Marc", "Miguel"],
    ASO :  ["Nicolau", "Jordin", "Marc", "Miguel", "Cofla"],
    EIE :  ["Marcos", "Pedro", "Miguel", "Cofla"]
}
console.table(asignaturas);



const informacion = (materias) => {
    if (asignaturas[materias] !== undefined){
        return [asignaturas[materias], materias, asignaturas];
    }else{
        return materias;
    }
}

const obtenerInformacion = (materias) => {
    let information = informacion(materias)
    let asignaturas = information[1];
    let profesor = information[0][0]
    let estudiantes = information[0]
    estudiantes.shift();

    let resultado1 = `
    <b>Asignatura: </b> ${asignaturas} <br>
    <b style='color:#f00'>______________Profesor: </b> ${profesor} <br>
    <b style='color:#48e'>_______________________Alumnos: </b> ${estudiantes.join(" - ")}
    `

    document.write(resultado1 + "<br>" + "<br>");
}


//  Crear funcion que nos diga en cuantas clase esta cofla
//  Nombrar las clase en la que esta 

const cantidad = (alumno) => {
    let cantidadTotal = 0;
    let clasestotal = [];
    for (materia in asignaturas){
        if (asignaturas[materia].includes(alumno)){
            cantidadTotal++;
            clasestotal.push(materia);
        }
    }
    let resultado2 = `
    <b>${alumno}</b> esta en <b>${cantidadTotal}</b> clases. <br>
    <b>Las asignaturas son: </b> ${clasestotal.join(" - ")}
    `
    document.write(resultado2 + "<br>" + "<br>");
}


obtenerInformacion("LAW");
obtenerInformacion("SXIN");
obtenerInformacion("SGBD");
obtenerInformacion("SAD");
obtenerInformacion("ASO");
obtenerInformacion("EIE");

cantidad("Jordin");
cantidad("Cofla");
cantidad("Christian");
cantidad("Miguel");
cantidad("Jorge");



