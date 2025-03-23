//  TERMINO EL PRIMER SEMESTRE Y COFLA NO SABE SI APROBARA O NO LAS MATERIAS, PARA LOGRARLO NECESITARA CONTAR CON AL MENOS EL 90% DE ASISTENCIA, EL PROMEDIO POR LA MATERIA DEBE SER DE AL MENOS 7 DEBE TENER AL MENOR EL 70% DE LOS TRBAJOS PRACTICOS ENTREGADOS

//  SOLICITAR LOS DATOS Y DECIRLE SI APRUEBA O NO
//  MOSTRAR TODO ESTO CON COLORES REPRESENTATIVO
//  TODO ESTO ESTRUCTURADO COMO TABLA   


let asignaturas = {
    LAW : [80, 5, 7, "LAW"],
    SXIN : [70, 7, 5, "SXIN"],
    SGBD : [90, 7, 9, "SGBD"],
    ASO : [60, 8, 9, "ASO"],
    SAD : [80, 10, 5, "SAD"],
    EIE : [80, 5, 2, "EIE"]
};
console.table(asignaturas);

const promedio = () => {
    for (materia in asignaturas){
        let porcentaje = asignaturas[materia][0];
        let promedio = asignaturas[materia][1];
        let trabajos = asignaturas[materia][2];
        console.log(asignaturas[materia][3])
        if (porcentaje >= 90){
            console.log("%c   Asistencia en orden", "background: green; padding: 20px; border-radius: 20px")
        }else{
            console.log("%c   Falta de asistencia", "background: red; padding: 20px; border-radius:20px");
        }

        if (promedio >= 7){
            console.log("%c   Promedio en orden","background:green; padding: 20px; border-radius: 20px");
        }else{
            console.log("%c   Promedio Suspendido","background:red; padding: 20px; border-radius: 20px");
        }

        if (trabajos >= 3){
            console.log("%c   Trabajos practicos en orden ","background:green; padding: 20px; border-radius: 20px");
        }else{
            console.log("%c   Trabajos practicos suspendido ","background:red; padding: 20px; border-radius: 20px");
        }
    }
}

promedio();