// declara un objeto literal vacío
const miObjeto = {};

// declara un objeto con dos propiedades de tu animal favorito
const gatito = {
  nombre: "Bolay",
  color: "negro",
  estaEsterilizado: true,
};

// accede a una propiedad de tu objeto anterior
gatito.color;
console.log("line 13 ~ gatito.color", gatito.color);

// reasigna el valor de una propiedad del objeto anterior
console.log("gatito.nombre", gatito.nombre);
gatito.nombre = "Gato Bola";
console.log("gatito.nombre", gatito.nombre);

// agrega dos propiedades a tu objeto anterior, una de tipo array y otra numerica
gatito.edad = 4;
gatito.vacunas = ["triplefelina", "rabia"];

console.log(gatito);
