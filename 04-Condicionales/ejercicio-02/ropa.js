// Alt + 96 ``

var hombre01 = "https://cdn-0.somosmamas.com.ar/wp-content/uploads/2021/02/shorts-para-hombres-17.jpg"
var hombre02 = "https://www.tuasesordemoda.com/wp-content/uploads/2019/12/short-con-camisa-hombre.jpg"
var hombre03 = "https://i.pinimg.com/originals/75/55/72/755572472b3149953653e512a136193e.jpg"
var hombre04 = "https://i.pinimg.com/474x/30/a4/2b/30a42bb94b2e39ea013c53e350d95cf9--red-green-red-black.jpg"
var hombre05 = "https://i.pinimg.com/originals/aa/31/ca/aa31caf0edc4ef0e72994c56919cb113.jpg"

var mujer01 = "https://ss512.liverpool.com.mx/sm/1015437304.jpg";
var mujer02 = "https://i.pinimg.com/474x/37/58/97/375897d127cb91f2ed4ba5daaf1338db.jpg";
var mujer03 = "https://www.dsigno.es/blog/wp-content/uploads/2018/10/falda-circulo.jpg";

var pregunta01 = prompt("¿Te gusta la ropa de mujer o de hombre?") // mujer/hombre

// HOMBRE
// var esFormal
var preguta02 = prompt('¿Te gustan los shorts?') // Sí/No
var preguta03 = prompt('¿Te gusta el rojo?')
var preguta04 = prompt('¿Te gusta el amarillo?')

// TODO: validar si le gustan las camisas
if (true) {
  // shorts
  if (preguta02 == "Sí") {
    if (preguta03 == "Sí") {
      document.write(`<img src="${hombre03}">`)
    };
    if (preguta04 == "Sí") {
      document.write(`<img src="${hombre02}">`)
    };
  }
  // pantalones
  else {
    if (preguta03 == "Sí") {
      document.write(`<img src="${hombre04}">`)
    };
    if (preguta04 == "Sí") {
      document.write(`<img src="${hombre05}">`)
    };
  }
}

// MUJER