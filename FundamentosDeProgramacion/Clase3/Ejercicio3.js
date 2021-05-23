/*3) Contador 2: La venganza del contador
Sea una variable numerica entera y positiva 'limite':
Recorrer desde 0 hasta que se cumpla una de las siguientes condiciones:
*Se llega a limite
*La cantidad de numeros pares desde 0 hasta limite es mayor a una variable
anteriormente creada llamada final
Al final del recorrido imprimir la cantidad de numeros multiplos de 3
Al final del recorrido imprimir la suma de todos los numeros entre el 0 hasta que se
termine el recorrido*/

let numeros = function(limite, final) {

    let contadorDeMultiplos = 0;
    let contadorDePares = 0;
    let i = 0;
    let suma = 0;

    while (i <= limite && contadorDePares <= final) {

        if (i % 3 === 0) {
            contadorDeMultiplos++;

        }
        if (i % 2 === 0) {
            contadorDePares++;

        }
        suma = suma + i;
        i++;
    }

    return console.log(`La cantidad de números múltiplos de 3 es: ${ contadorDeMultiplos } y la suma de los números desde 0 hasta que termina el recorrido es ${suma}`);

}

//main
let limite = parseInt(prompt("Ingrese un número entero mayor que cero: "));
let final = parseInt(prompt("Ingrese otro número entero mayor que cero: "));
numeros(limite, final);