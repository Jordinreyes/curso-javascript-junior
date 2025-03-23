/* 
    EJERCICIO 1

    3 Chavales de 23 años perfectamente normales entran a una heladera a comprar un helado pero hay un problema: Los precios estan al lado de cada estante con sus respectivo helado. Ellos quieren compran el helado mas caro que puedan con la plata que tienen, asi que.. veamos como podemos ayudarle

    Roberto tiene 1.5€
    Pedro tiene $1.7€
    Cofla tiene 3€

    Los precios de los helados son los siguientes:
    Palito de helado de agua: 0.6€
    Palito de helado de crema: 1€
    Bombón helado de marca heladix: 1.6€
    Bombón helado de marca heladovich: 1.7€
    Bombón helado de marca helardo: 1.8€
    Potecito de helado con confites: 2.9€
    Pote de 1/4KG => 2.9

    CREAR SOLUCIONES

    -   Pedirles que ingreses el monto qur tienes y mostrarle los helado mas caro que puedan comprar
    -   Si hay 2 o mas con el mismo precio, mostrar ambos.
    -   Cofla quiere saber cuanto es el vuelto


*/

let dineroRoberto = prompt("Roberto, Cuanto dinero tienes?")
let dineroPedro = prompt("Pedro, Cuanto dinero tienes?");
let dineroCofla = prompt("Cofla, Cuanto dinero tienes?")

dineroRoberto = parseFloat(dineroRoberto);
dineroPedro = parseFloat(dineroPedro);
dineroCofla = parseFloat(dineroCofla);

if (dineroRoberto >= 0.6 && dineroRoberto < 1){
    document.write("Hola Roberto, tenemos palito de helado de agua a: 0.6€" + "<br>");
    document.write("Hola Roberto, tu cambio seria " + (dineroRoberto - 0.7) + "€"  + "<br>")
}else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
    document.write("Hola Roberto, tenemos palito de helado de crema a: 1€" + "<br>");
    document.write("Hola Roberto, tu cambio seria " + (dineroRoberto - 1)  + "€" + "<br>")
}else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    document.write("Hola Roberto, tenemos bombón helado de marca heladix a: 1.6€" + "<br>");
    document.write("Hola Roberto, tu cambio seria " + (dineroRoberto - 1.6)  + "€" + "<br>")
}else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    document.write("Hola Roberto, tenemos bombón helado de marca heladovich a: 1.7€" + "<br>");
    document.write("Hola Roberto, tu cambio seria " + (dineroRoberto - 1.7)  + "€" + "<br>")
}else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    document.write("Hola Roberto, tenemos bombón helado de marca helardo a: 1.8€" + "<br>");
    document.write("Hola Roberto, tu cambio seria " + (dineroRoberto - 1.8)  + "€" + "<br>")
}else if (dineroRoberto >= 2.9){
    document.write("Hola Roberto, Tenemos 2 opciones" + "<br>")
    document.write("Opcion 1: Potecito de helado con confites" + "<br>" + "Opcion 2: Pote de 1/4" + "<br>" + "Precio: 2.9€" + "<br>");
    document.write("Hola Roberto, tu cambio seria " + (dineroRoberto - 2.9)  + "€" + "<br>")
}else{
    document.write("Error 404");
}


if (dineroPedro >= 0.6 && dineroPedro < 1){
    document.write("Hola Pedro, tenemos palito de helado de agua a: 0.6€" + "<br>");
    document.write("Hola Pedro, tu cambio seria " + (dineroPedro - 0.7) + "€"  + "<br>")
}else if (dineroPedro >= 1 && dineroPedro < 1.6){
    document.write("Hola Pedro, tenemos palito de helado de crema a: 1€" + "<br>");
    document.write("Hola Pedro, tu cambio seria " + (dineroPedro - 1)  + "€" + "<br>")
}else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
    document.write("Hola Pedro, tenemos bombón helado de marca heladix a: 1.6€" + "<br>");
    document.write("Hola Pedro, tu cambio seria " + (dineroPedro - 1.6)  + "€" + "<br>")
}else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
    document.write("Hola Pedro, tenemos bombón helado de marca heladovich a: 1.7€" + "<br>");
    document.write("Hola Pedro, tu cambio seria " + (dineroPedro - 1.7)  + "€" + "<br>")
}else if (dineroPedro >= 1.8 && dineroPedro < 2.9){
    document.write("Hola Pedro, tenemos bombón helado de marca helardo a: 1.8€" + "<br>");
    document.write("Hola Pedro, tu cambio seria " + (dineroPedro - 1.8)  + "€" + "<br>")
}else if (dineroPedro >= 2.9){
    document.write("Hola Pedro, Tenemos 2 opciones" + "<br>")
    document.write("Opcion 1: Potecito de helado con confites" + "<br>" + "Opcion 2: Pote de 1/4" + "<br>" + "Precio: 2.9€" + "<br>");
    document.write("Hola Pedro, tu cambio seria " + (dineroPedro - 2.9)  + "€" + "<br>")
}else{
    document.write("Error 404");
}

if (dineroCofla >= 0.6 && dineroCofla < 1){
    document.write("Hola Cofla, tenemos palito de helado de agua a: 0.6€" + "<br>");
    document.write("Hola Cofla, tu cambio seria " + (dineroCofla - 0.7) + "€"  + "<br>")
}else if (dineroCofla >= 1 && dineroCofla < 1.6){
    document.write("Hola Cofla, tenemos palito de helado de crema a: 1€" + "<br>");
    document.write("Hola Cofla, tu cambio seria " + (dineroCofla - 1)  + "€" + "<br>")
}else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    document.write("Hola Cofla, tenemos bombón helado de marca heladix a: 1.6€" + "<br>");
    document.write("Hola Cofla, tu cambio seria " + (dineroCofla - 1.6)  + "€" + "<br>")
}else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    document.write("Hola Cofla, tenemos bombón helado de marca heladovich a: 1.7€" + "<br>");
    document.write("Hola Cofla, tu cambio seria " + (dineroCofla - 1.7)  + "€" + "<br>")
}else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    document.write("Hola Cofla, tenemos bombón helado de marca helardo a: 1.8€" + "<br>");
    document.write("Hola Cofla, tu cambio seria " + (dineroCofla - 1.8)  + "€" + "<br>")
}else if (dineroCofla >= 2.9){
    document.write("Hola Cofla, Tenemos 2 opciones" + "<br>")
    document.write("Opcion 1: Potecito de helado con confites" + "<br>" + "Opcion 2: Pote de 1/4" + "<br>" + "Precio: 2.9€" + "<br>");
    document.write("Hola Cofla, tu cambio seria " + (dineroCofla - 2.9)  + "€" + "<br>")
}else{
    document.write("Error 404");
}