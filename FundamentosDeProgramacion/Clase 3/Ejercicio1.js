/*1) Pares
Sea una variable numerica entera y positiva 'limite':
- Recorrer desde 0 hasta `limite`
- Imprimir en pantalla los numeros pares (No la cantidad de nume*/


let pares = function(limite) {
    for (i = 0; i <= limite; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}



//main
let limite = parseInt(prompt("Ingrese un número entero mayor que cero: "));
pares(limite);