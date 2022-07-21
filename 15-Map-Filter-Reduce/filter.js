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

// filtrar piña, pera, manzana
const callback = function (fruta) {
  let esValido;

  switch (fruta) {
    case 'Piña':
    case 'Pera':
    case 'Manzana':
      esValido = true;
      break;
    default:
      esValido = false;
      break;
  }

  return esValido;
}

const pinasPerasManzanas = frutas.filter(callback);

console.log("🚀 ~ file: filter.js ~ line 34 ~ pinasPerasManzanas", pinasPerasManzanas);
