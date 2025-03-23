/*
    1-  MOSTRAR LAS PARTICULARIDADES DE LOS CELULARES
    2-  CADA UNO DEBE DE TENER COLOR, PESO, RESOLUCION DE PANTALLA, CAMARA Y MEMORIA RAM
    3-  DEBEN DE PODER ENCENDER, REINICIAR, TOMAR FOTO Y GRABAR
*/

class movil {
    constructor(marca, color, peso, rsPantalla, camara, ram){
        this.marca = marca
        this.color = color;
        this.peso = peso;
        this.rsPantalla = rsPantalla;
        this.camara = camara;
        this.ram = ram;
    };

    encender (){
        document.write(`El ${this.marca} se ha encendido` + "<br>");
    };

    reiniciar () {
        document.write(`El ${this.marca} se ha reiniciado` + "<br>");
    };

    apagar () {
        document.write(`El ${this.marca} se ha apagado` + "<br>");
    };

    tomarFotos (){
        document.write(`El ${this.marca} ha tomado fotos` + "<br>");
    };

    grabar (){
        document.write(`El ${this.marca} ha grabado un video` + "<br>" + "<br>");
    }

    info () {
        let resultado = `
        <b>Marca: </b> ${this.marca} <br>
        <b>Color: </b> ${this.color} <br>
        <b>Peso: </b> ${this.peso} <br>
        <b>Resolucion de pantalla: </b> ${this.rsPantalla} <br>
        <b>Camara: </b> ${this.camara} <br>
        <b>Memoria ram: </b> ${this.ram} <br>`

        document.write(resultado);
    };
}

const samsung = new movil("Samsung", "Blanco", "1kg", "2k", "16px", "2TB");
samsung.encender()
samsung.reiniciar();
samsung.apagar();
samsung.tomarFotos();
samsung.grabar();
samsung.info();