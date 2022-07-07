// if (condicion) { intrucciones }
var cosas = "algo";

if (4 == 4) console.log("Truthy");

var validacion = 0;

if (validacion) {
  console.log("Truthy/Verdadero")
} else {
  console.log("Falsy/Falso")
}

var edad = prompt('¿Cuál es tu edad?');
var esFronterizo = prompt('Resides en un municipio fornterizo'); // Sí/No
// TODO
// validar si no es un número (string)
// validar si el valor esta vacío

if (edad >= 18) {
  console.log("Eres mayor de edad")
} else {
  console.log("No eres mayor de edad")
}
