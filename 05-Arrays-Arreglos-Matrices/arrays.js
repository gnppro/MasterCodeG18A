var frutas = [
  "Pera", // index 0
  "Manzana", // index 1
  "Melon", // index 2
  "Sandia", // index 3
  "Piña" // index 4
];

console.log(frutas[2]) // "Melon"
console.log(frutas[4]) // "Piña"
console.log(frutas[10]) // undefined

frutas[0] = "Guayaba";

console.log(frutas[0])

frutas.length

frutas.push("Pera")
frutas.push("Fresa")

var frutaPodrida = frutas.pop();

frutas.unshift("Mandarina")
frutas.unshift("Uvas")

var otraFrutaPodrida = frutas.shift();


var otrasFrutas = ['Mandarina', 'Guayaba', 'Manzana', 'Melon', 'Sandia', 'Piña', 'Pera'];

var corte = otrasFrutas.slice(1,6)

console.log(corte) // ['Guayaba', 'Manzana', 'Melon', 'Sandia', 'Piña']


var verduras = ["Cebolla", "Perejil", "Tomate", "Calabaza", "Brocoli"]

// Agregar Aguacate, Lechuga después de Calabaza sin borrar nada

verduras.splice(4, 0, "Aguacate", "Lechuga");

var encabezado = "Nombre ApellidoPaterno ApellidoMaterno Edad Domicilio";

var array = encabezado.split(" ")

console.log("array", array)

var texto = "Lorem Ipsum is simply dummy text of the printing and. typesetting industry. Lorem Ipsum has been the industry's standard dummy. text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

var arrayTexto = texto.split(".")


var fechaGringa = "2022-12-30"
var fecha = fechaGringa.split("-").reverse().join('-')
console.log(fecha)
