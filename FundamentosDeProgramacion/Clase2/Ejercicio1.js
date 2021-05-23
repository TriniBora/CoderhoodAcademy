/*1) Las galletitas de Ema
Emanuel quiere cocinar galletitas y quiere un programa que lo ayude a saber que debe
comprar y en caso que cuente con todos los ingredientes, informar que puede cocinar las
galletas. La receta pide los siguientes ingredientes
3 huevos
1 barra de chocolate
0.5 kilos de harina
5 cucharadas de azucar
Los ingredientes que tiene Ema tienen que ser variables al inicio del programa que sean
faciles de editar*/

alert("A continuación, indicar qué cantidad de cada ingrediente tiene para saber si es posible realizar las galletitas.");

let cantHuevos = parseInt(prompt("Ingrese la cantidad de huevos: "));
let cantChocolate = parseFloat(prompt("Ingrese la cantidad de barras de chocolate: "));
let cantHarina = parseFloat(prompt("Ingrese la cantidad de harina (en kilogramos): "));
let cantAzucar = parseInt(prompt("Ingrese la cantidad de cucharadas de azúcar: "));

let cantHuevosReceta = 3;
let cantChocolateReceta = 1;
let cantHarinaReceta = 0.5;
let cantAzucarReceta = 5;

if (cantHuevos >= cantHuevosReceta && cantChocolate >= cantChocolateReceta && cantHarina >= cantHarinaReceta && cantAzucar >= cantAzucarReceta) {
    document.write("<p>Tiene los ingredientes necesarios, puede preparar las galletitas.</p>");
} else {
    if (cantHuevos < 3) {
        document.write(`<p>Tiene que comprar ${ 3 - cantHuevos } huevos.</p>`);
    }
    if (cantChocolate < 1) {
        document.write(`<p>Tiene que comprar ${ 1 - cantChocolate } barras de chocolate.</p>`);
    }
    if (cantHarina < 0.5) {
        document.write(`<p>Tiene que comprar ${ 0.5 - cantHarina } kilogramos de harina.</p>`);
    }
    if (cantAzucar < 5) {
        document.write(`<p>Tiene que comprar ${ 5 - cantAzucar } cucharadas de azúcar.</p>`);
    }
}