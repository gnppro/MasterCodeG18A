var edad;
var municipioFronterizo;
var embarazada;
var esMujer;
var semanasDeGestion;
var treintaEsteAnio;

edad = prompt('¿Cuál es tu edad?') // number
municipioFronterizo = prompt('¿Resides en un municipio fronterizo? (Sí/No)') // string Sí/No
esMujer = prompt('¿Cuàl es tu genero? (M/H)') // string

if (esMujer === "M") {
  embarazada = prompt('¿Estas embarazada?') // string
  semanasDeGestion = prompt('¿Cuántas semanas tines de gestión?') // number
}

treintaEsteAnio = prompt('¿Cumples 30 años este año?') // string

var resideEnMunicipioFronterizo = municipioFronterizo == "Sí";
var esMayorDeEdad = Number(edad) > 18;
var esEmbarazada = embarazada === "Sí";
var seMueveElFeto = Number(semanasDeGestion) >= 9;
var esTreintianiero = treintaEsteAnio === "Sí";

if (esMayorDeEdad && resideEnMunicipioFronterizo) {
  document.write("Sí puedes vacunarte");
} else if (esMayorDeEdad && esEmbarazada && seMueveElFeto) {
  document.write("Sí puedes vacunarte");
} else if (esTreintianiero) {
  document.write("Sí puedes vacunarte");
} else {
  document.write("No puedes vacunarte");
}
