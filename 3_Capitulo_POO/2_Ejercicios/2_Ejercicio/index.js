/*
    CREAR UN SISTEMA PARA DECIDIR QUE APP DESCARGAR
    DEBE DE CONTENER LA CANTIDAD DE DESCARGAS, PUNTUACION Y PESO
    SE DEBEN DE PODER INSTALAR, ABRIR, CERRAR Y DESINTALAR
*/

class aplicacion{
    constructor(app, descargar, puntuacion, peso){
        this.app = app
        this.descargar = descargar;
        this.puntuacion = puntuacion;
        this.peso = peso;
    };

    instalar (){
        document.write(`La aplicacion ${this.app} se ha instalado` + "<br>");
    };

    abrir(){
        document.write(`La aplicacion ${this.app} se ha abierto` + "<br>");
    };

    cerrar(){
        document.write(`La aplicacion ${this.app} se ha cerrado` + "<br>");
    };

    desintalar(){
        document.write(`La aplicacion ${this.app} se ha desintalado` + "<br>" + "<br>");
    };

    info(){
        let resultado = `
            <b>App: </b> ${this.app} <br>
            <b>Decargar: </b> ${this.descargar} <br>
            <b>Puntuación: </b> ${this.puntuacion} <br>
            <b>Peso: </b> ${this.peso} <br>
        `;
        document.write(resultado);
    }
}

const facebook = new aplicacion("Facebook", "500 millones", "4.5 estrellas", "1GB");
facebook.instalar()
facebook.abrir();
facebook.cerrar();
facebook.desintalar();
facebook.info();