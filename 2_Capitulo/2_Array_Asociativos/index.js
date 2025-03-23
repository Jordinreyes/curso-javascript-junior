
//  ARRAY ASOCIATIVO

let coches = {
    "Marca" : "Kia",
    "Modelo" : "Picanto",
    "Año" : 2025
};

let marca = coches["Marca"];
let modelo = coches["Modelo"];
let año = coches["Año"];

let resultado = `
    <b>Marca: </b> ${marca} <br>
    <b>Modelo: </b> ${modelo} <br>
    <b>Año: </b> ${año}
`;

document.write(resultado);