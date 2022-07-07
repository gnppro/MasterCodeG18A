var mesActual = 7;
var esDiciembre = mesActual == 12;
var esEnero = mesActual == 1;
var esAgosto = mesActual == 8;
var esJulio = mesActual == 7;

if (esDiciembre || esEnero) {
  console.log("Diciembre")
}
else if (esAgosto) {
  console.log("Agosto")
}
else if (esJulio) {
  console.log("Julio")
}
else {
  console.log("No es un mes bonito")
}
