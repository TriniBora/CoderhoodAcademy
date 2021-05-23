/*4) La secuencia de Fibonacci
En matemáticas, la sucesión o serie de Fibonacci es la
siguiente sucesión infinita de números naturales:

0 , 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21

La sucesión comienza con los números 0 y 1,  a partir de estos
cada término es la suma de sus dos anteriores
Sea una variable numerica entera y positiva 'limite':
Recorrer desde 0 hasta limite
Imprimir tantos terminos de la secuencia como repeticiones de 0 hasta limite
Ejemplo: si limite = 6, imprimir 0, 1, 1, 2, 3, 5*/

let numeros = function(limite) {

    let anteriorAnterior = 0;
    let anterior = 1;
    let terminoFibonacci = 0;

    for (i = 0; i < limite; i++) {
        console.log(terminoFibonacci)
        anteriorAnterior = anterior;
        anterior = terminoFibonacci;
        terminoFibonacci = anteriorAnterior + anterior;
    }
}

//main
let limite = parseInt(prompt("Ingrese la cantidad de términos de Fibonacci que desea visualizar: "));
numeros(limite);