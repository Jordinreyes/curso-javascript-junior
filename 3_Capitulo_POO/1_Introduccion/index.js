//  UNA CLASE ES PARA CREAR OBJETO

//  UN OBJETO SON LOS RESULTADO CUANDO CREAMOS LA CLASE

//  LOS ATRIBUTOS SON LAS PROPIEDADES QUE TIENE NUESTRO OBJECTO

//  EL METODO SON LAS COSAS QUE PUEDEN HACER NUESTRO OBJETO

//  CONSTRUCTOS NOS AYUDAR A CONTRUIR LAS PROPIEDADES DE UN OBJETO

//  CUANDO TERMINAS TODO SE LLAMA INSTANCIACION

//  ABSTRACION ES INTENTAR REDUCIR EL OBJETO;

//  MODULARIDAD ES RESOLVER LOS PROBLEMAS EN PEDAZOS PEQUEÑOS

//  ENCAPSULAMIENTO ES ENCAPSULAR LOS DATOS PARA QUE EL USUARIO NO ACCEDA A EL, FACILMETNE

//  POLIMORFISMO CONSISTE ES VER COMO SE COMPORTA UN OBJETO DIFERENTE POR SUS PROPIEDADES

//  HERENCIA EXTENDS

//  ESTATICO STATIC

//  getter para obtener un valor

//  setter para modificarlo o definirlo

class Animal {
    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
    }
}

class Perro extends Animal {
    constructor(especie, edad, color, raza) {
        super(especie, edad, color);
        this.raza = raza;
    }

    verInfo() {
        const informacion = `Soy ${this.especie}, tengo ${this.edad} años, soy de color ${this.color} y mi raza es ${this.raza} <br>`;
        document.write(informacion);
    }

    set setRaza(newName) {
        this.raza = newName;
    }

    get getRaza() {
        return this.raza;
    }
}

class Gato extends Animal{
    constructor(especie, edad, color, tamaño){
        super(especie, color, edad);
        this.tamaño = tamaño;
    };

    verInfo (){
        const informacion = `Soy ${this.especie}, tengo ${this.edad} años, soy de color ${this.color} y mi tamaño es de ${this.tamaño} <br>`;
        document.write(informacion);
    }

    set setTamaño (newTamaño){
        this.tamaño = newTamaño
    };

    get getTamaño (){
        return this.tamaño
    };
}

const perro = new Perro("Perro", 21, "Negro");
perro.setRaza = "Pitbull";
perro.verInfo();

const gato = new Gato("Gato", 2, "Blanco");
gato.setTamaño = "Pequeño";
gato.verInfo();