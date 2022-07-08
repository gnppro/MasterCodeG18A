/* Escribe un programa que responda a un usuario que quiere comprar un helado
en una conocida marca de comida rápida
cuánto le costará en función del topping que elija.
  2 El topping de oreo cuesta 10 MXN.
  3 El topping de KitKat cuesta 15 MXN.
  4 El topping de brownie cuesta 20 MXN.
  5 El topping de coco cuesta 18 MXN.
  1 El helado sin topping cuesta 50 MXN.
 */

// oreo, KitKat, brownie, coco
var topping = prompt('¿Qué topping quieres?')

// SANITIZAR DATOS
// convertir texto a minusculas (toLowerCase) y luego quitar espacios al inicio y al final (trim)
topping = topping.toLowerCase().trim()

var precio = 50;

/* if (topping === "oreo") {
  // precio = precio + 10
  precio += 10
}
else if (topping === "kitkat") {
  precio += 15
}
else if (topping === "brownie") {
  precio += 20
}
else if (topping === "coco") {
  precio += 18
}
else {
  precio += 0
} */

switch (topping) {
  case 'oreo':
    precio += 10
    break;
  case 'kitkat':
    precio += 15
    break;
  case 'brownie':
    precio += 20
    break;
  case 'coco':
    precio += 18
    break;
  default:
    precio += 0
}

document.write(`Tu helado cuesta: $${precio}`);


