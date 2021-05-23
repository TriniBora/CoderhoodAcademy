/*2) Contador
Sea una variable numerica entera y positiva 'limite':
Recorrer desde 0 hasta limite
Imprimir al final del programa la cantidad de numeros impares
Imprimir al final del programa la cantidad de numeros menores de limite / 2*/

let numeros = function(limite) {

    let contadorDeImpares = 0;
    let contadorDeMenores = 0;

    for (i = 0; i <= limite; i++) {
        if (i % 2 != 0) {
            contadorDeImpares++;
        }
        if (i < limite / 2) {
            contadorDeMenores++;
        }
    }

    console.log(`La cantidad de números impares es: ${ contadorDeImpares }`);
    console.log(`La cantidad de números menores a ${limite/2} es: ${contadorDeMenores}`);
}



//main
let limite = parseInt(prompt("Ingrese un número entero mayor que cero: "));
numeros(limite);