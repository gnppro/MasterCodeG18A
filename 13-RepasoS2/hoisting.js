// funciones
saludar('Gerardo')

function saludar(nombre) {
  console.log('Hola' + ' ' + nombre)
}

// variables
console.log(gato);

var gato = 'Bolay';

console.log(gato);

// const y let no tienen hoisting
const perro = 'choco';
console.log(perro);

// const let scope de bloque {}

for (let index = 0; index < array.length; index++) {}

console.log(miVariable) // undefined

if (true) {
  var miVariable = 'valor';
}

console.log(miVariable) // valor

console.log(hola); // ReferenceError: no esta definida

const saludar2 = function () {
  var hola = "Bienvenido"
}

console.log(hola); // ReferenceError: no esta definida
