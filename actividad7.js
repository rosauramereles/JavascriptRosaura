//Actividad7-Objeto Estudiante 
const estudiante = {
    nombre: "Rosaura",
    apellido: "Mereles",
    nota : 8,
}
// Condicional para determinar si el estudiante aprobó o desaprobó 
const estado= estudiante.nota >= 6 ? "Aprobado" : "Desaprobado";

console.log(`El estudiante ${estudiante.nombre} ${estudiante.apellido} `);
console.log(`Nota: ${estudiante.nota} `);
console.log(`Estado: ${estado} `);