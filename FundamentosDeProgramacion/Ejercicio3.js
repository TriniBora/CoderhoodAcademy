/*3) Dia de paga
En una pizzeria requieren un programa que calcule cuanto cobraran neto los repartides al
final del dia (Todos cobran igual)
Se tienen los siguientes datos obligatorios
repartidores (Cantidad de repartidores, puede ser cualquier numero entero)
esFeriado (true si es Feriado, false si no)
gananciaDelDia (Cuanto recaudo la pizzeria para distribuir a los empleados)
porcentajeParaSueldos (Un porcentaje de gananciaDelDia)
sueldoNetoDeRepartidor (Cuanto gana en bolsillo el repartidor)
gananciaDelComercioFinal (Cuanto gana el comercio una vez pagados los sueldos y
demas)
Se sabe que:
En feriados: porcentajeParaSueldos es del 80% de gananciaDelDia mientras que en
dias normales, es del 65% */


let sueldoNetoYGanancia = function(cantidadRepartidores, esFeriado, gananciaDelDia) {

    let sueldoNetoDelRepartidor;
    let porcentajeParaSueldos;
    let porcentajeDiaFeriado = 80;
    let porcentajeDiaNormal = 65;
    let gananciaFinal;

    if (esFeriado === 1) {
        porcentajeParaSueldos = gananciaDelDia * (porcentajeDiaFeriado / 100);

    } else {
        porcentajeParaSueldos = gananciaDelDia * (porcentajeDiaNormal / 100);
    }

    sueldoNetoDelRepartidor = porcentajeParaSueldos / cantidadRepartidores;

    gananciaFinal = gananciaDelDia - porcentajeParaSueldos;

    return (`El sueldo neto de cada repartidor es: ${sueldoNetoDelRepartidor} y la ganancia final del comercio es: ${gananciaFinal}`);
}


//main

let cantidadRepartidores = parseInt(prompt("Ingrese la cantidad de repartidores: "));
let esFeriado = parseInt(prompt("Ingrese '1' si es un día feriado o ingrese '2' si es un día normal"));
let gananciaDelDia = parseFloat(prompt("Ingrese la recaudación dle día: "));

console.log(sueldoNetoYGanancia(cantidadRepartidores, esFeriado, gananciaDelDia));