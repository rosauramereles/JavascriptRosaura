//Actividas8-Arreglo de notas 
const notas = [7, 9, 8, 6, 5]; // Arreglo para almacenar las notas de los estudiantes
let suma = 0; // Variable para almacenar la suma de las notas

//For para recorrer el arreglo de las notas y calcular la suma total
for (let i = 0; i < notas.length; i++) {
    suma += notas[i]; // Suma acumulada de las notas, es decir se va sumando cada nota al resultado anterior
}
const promedio = suma/ notas.length; // Calculando el promedio dividiendo la suma total entre la cantidad de notas

console.log ("Notas: " + notas); // Mostrando las notas almacenadas en el arreglo
console.log ("Promedio: " + promedio); // Mostrando el resultado del promedio calculado a partir de las notas del arreglo
console.log (promedio >= 6 ? "Aprobado" : "Desaprobado"); // Condicional para determinar si el promedio es aprobado o desaprobado, utilizando el operador ternario para simplificar la estructura condicional