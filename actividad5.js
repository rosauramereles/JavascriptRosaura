//Actividad5-Suma Acumulada del 1 al 100

let suma = 0; // Variable para almacenar la suma acumulada

//For: bucle para sumar los numeros del 1 al 100 
for (let i = 1; i <=100; i++){
    suma += i; // Suma acumulada, es decir se va sumando cada numero al resultado anterior
    console.log (`La suma acumulada hasta el numero ${i} es: ${suma}`); // Mostrando el resultado de la suma acumulada en cada iteración del bucle
}