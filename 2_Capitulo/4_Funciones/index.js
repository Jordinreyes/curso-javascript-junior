
function saludar(){
    let respuesta = prompt("Hola, Como estas");
    if (respuesta == "Bien"){
        document.write("Me alegro mucho");
    }else{
        document.write("Lo siento mucho");
    };
};
saludar();

document.write("<br>");

function saludar2(){
    let respuesta = prompt("Hola, Todo bien?")
    if (respuesta == "Bien"){
        return "Me alegro mucho por ti";
    }else{
        return "Lo siento mucho";
    };
};

let saludarr = saludar2();
document.write(saludarr);

document.write("<br>");

function calculadora (){
    let opcion = prompt("Que operacion quieres hacer, (+, -, *, /)");
    let num1 = prompt("Escribe el primer Numero");
    let num2 = prompt("Escribe el segundo numero");
    
    if (opcion == "+"){
        let suma = num1 + num2;
        document.write(`${num1} + ${num2} = ` + suma);
    }else if (opcion == "-"){
        let resta = num1 - num2;
        document.write(`${num1} - ${num2} = ` + resta);
    }else if (opcion == "*"){
        let multiplicacion = num1 * num2
        document.write(`${num1} * ${num2} = ` + multiplicacion);
    }else if (opcion == "/"){
        let division = num1 / num2;
        document.write(`${num1} / ${num2} = ` + division);
    }else{
        document.write("Opcion invalida");
    }
}

calculadora()

const calculadora2 = () => {
    let opcion = prompt("Que operacion quieres hacer, (+, -, *, /)");
    let num1 = prompt("Escribe el primer Numero");
    let num2 = prompt("Escribe el segundo numero");
    
    if (opcion == "+"){
        let suma = num1 + num2;
        document.write(`${num1} + ${num2} = ` + suma);
    }else if (opcion == "-"){
        let resta = num1 - num2;
        document.write(`${num1} - ${num2} = ` + resta);
    }else if (opcion == "*"){
        let multiplicacion = num1 * num2
        document.write(`${num1} * ${num2} = ` + multiplicacion);
    }else if (opcion == "/"){
        let division = num1 / num2;
        document.write(`${num1} / ${num2} = ` + division);
    }else{
        document.write("Opcion invalida");
    }

}

calculadora2();