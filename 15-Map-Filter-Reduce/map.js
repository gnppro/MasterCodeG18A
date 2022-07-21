const frutas = [
  "Pera",
  "Manzana",
  "Melon",
  "Sandia",
  "Piña",
  "Mandarina",
  "Guayaba",
  "Manzana",
  "Melon",
  "Sandia",
  "Piña",
  "Pera",
];

function callback(el) {
  return el.toUpperCase();
};

const frutasEnMayusculas = frutas.map(callback);
// const frutasEnMayusculas = frutas.map(() => el.toUpperCase());

console.log("🚀 ~ file: map.js ~ line 20 ~ frutasEnMayusculas", frutasEnMayusculas);

const arrayDeNumeros = [
  1,2,3,4,5,6,7,8,9,10
];

function exponenciarNumerosAlCuadrado(numero) {
  return numero ** 2
}

const numerosAlCuadrado = arrayDeNumeros.map(exponenciarNumerosAlCuadrado)
console.log("🚀 ~ file: map.js ~ line 33 ~ numerosAlCuadrado", numerosAlCuadrado)
