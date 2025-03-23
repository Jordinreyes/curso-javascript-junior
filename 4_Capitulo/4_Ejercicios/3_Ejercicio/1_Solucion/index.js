/*
    Cofla ya vio las 12 materias y se decicio en cual se va a inscribir asi que en tres dias lo hara, el problema es que se rompio el sistema de inscripciones
    
    CREAR SOLUCIONES
    1.  Crear una funcion para preguntarle a cofla en que materia se quiere inscribir
    2.  Si hay mas de 20 alumnos anotadsos en la materia negargle la inscripcion
    3.  Si hay menos de 20 alumnos inscribir a cofñas y añadirlo a la lista de alumnos
    
*/
let asignaturas = {
    LAW :  ["Andreu Rig", "Jordin", "Pedro", "Christian", "Cofla"],
    SXIN : ["Juanra", "Jordin", "Pedro", "Jorge"],
    SGBD : ["Jordi", "Jordin", "Pedro", "Cofla"],
    SAD :  ["Nicolau", "Jorge", "Marc", "Miguel"],
    ASO :  ["Nicolau", "Jordin", "Marc", "Miguel", "Cofla"],
    EIE :  ["Marcos", "Pedro", "Miguel", "Cofla"]
}

const inscribir = (estudiantes, asignatura) => {
    let alumnos = asignaturas[asignatura];

    if (alumnos.length >= 20){
        document.write(`Lo siento <b>${estudiantes}</b>, La clase de <b>${asignatura}</b> estan completas`);
    }else{
        alumnos.push(estudiantes)
        if (asignatura == "LAW"){
            asignaturas = {
                LAW :  alumnos,
                SXIN : asignaturas["SXIN"],
                SGBD : asignaturas["SGBD"],
                SAD :  asignaturas["SAD"],
                ASO :  asignaturas["ASO"],
                EIE :  asignaturas["EIE"]
            };
        }else if (asignatura == "SXIN"){
            asignaturas = {
                LAW :  asignaturas["LAW"],
                SXIN : alumnos,
                SGBD : asignaturas["SGBD"],
                SAD :  asignaturas["SAD"],
                ASO :  asignaturas["ASO"],
                EIE :  asignaturas["EIE"]
            };
        }else if (asignatura == "SGBD"){
            asignaturas = {
                LAW :  asignaturas["LAW"],
                SXIN : asignaturas["SXIN"],
                SGBD : alumnos,
                SAD :  asignaturas["SAD"],
                ASO :  asignaturas["ASO"],
                EIE :  asignaturas["EIE"]
            };
        }else if (asignatura == "SAD"){
            asignaturas = {
                LAW :  asignaturas["LAW"],
                SXIN : asignaturas["SXIN"],
                SGBD : asignaturas["SGBD"],
                SAD :  alumnos,
                ASO :  asignaturas["ASO"],
                EIE :  asignaturas["EIE"]
            };
        }else if (asignatura == "ASO"){
            asignaturas = {
                LAW :  asignaturas["LAW"],
                SXIN : asignaturas["SXIN"],
                SGBD : asignaturas["SGBD"],
                SAD :  asignaturas["SAD"],
                ASO :  alumnos,
                EIE :  asignaturas["EIE"]
            };
        }else if (asignatura == "EIE"){
            asignaturas = {
                LAW :  asignaturas["LAW"],
                SXIN : asignaturas["SXIN"],
                SGBD : asignaturas["SGBD"],
                SAD :  asignaturas["SAD"],
                ASO :  asignaturas["ASO"],
                EIE :  alumnos
            };
        }
        let tutor = asignaturas[asignatura][0];
        console.log(tutor);
        alumnos.shift();
        let resultado = `
        Felicidades <b>${estudiantes}</b>, Te has podido inscribir en <b style='color:green'>${asignatura}</b> correctamente. <br>
        El tutor de la asignatura <b style='color:green'>${asignatura}</b> es <b style='color:#f00'>${tutor}</b><br> 
        La lista de tus compañeros son:  <b style='color:#48e'>${alumnos.join(" - ")}</b>`;

        document.write(resultado + "<br>" + "<br>");
    }
}

inscribir("Juan", "LAW");
inscribir("Jorge", "SXIN");
inscribir("Marc", "SGBD");
inscribir("Cofla", "SAD");
inscribir("Jorge", "ASO");
inscribir("Jorge", "EIE");