/*2) La tienda de ropa
Una tienda de ropa desea tener un programa que le permita calcular los aumentos a sus
prendas, para eso se tienen los datos
precioDePrenda (que ronda entre los 1500 y 3000 pesos)
porcentajeDeAumento (que ronda entre el 25-100% )
precioFinal (precioDePrenda con el aumento agregado)
Ademas, implementar las siguiente funcionalidades:
El programa debe informar en pantalla el precio final
El programa debe informar en pantalla 'Precio excedido' cuando el precio final supere los
$4000*/

let precioDePrenda = parseFloat(prompt("Ingrese el precio de la prenda de ropa: "));
let porcentajeDeAumento = parseFloat(prompt("Ingrese el porcentaje de aumento: "));

let precioMinDePrenda = 1500;
let precioMaxDePrenda = 3000;
let porcentajeMinDeAumento = 25;
let porcentajeMaxDeAumento = 100;
let precioMaxFinal = 4000;
let precioFinal;

if (precioDePrenda >= precioMinDePrenda && precioDePrenda <= precioMaxDePrenda) {
    if (porcentajeDeAumento >= porcentajeMinDeAumento && porcentajeDeAumento <= porcentajeMaxDeAumento) {
        precioFinal = precioDePrenda * (1 + porcentajeDeAumento / 100);
        if (precioFinal > precioMaxFinal) {
            console.log(`Precio excedido.`);
        } else {
            console.log(`Precio final: $${ precioFinal.toFixed(2)}`);
        }
    } else {
        console.log("Debe ingresar un porcentaje que esté entre 25 y 100");
    }
} else {
    console.log("Debe ingresar un precio que esté entre 1500 y 3000 pesos");
}