//variables globales
let nombre = 'Mauricio';
let anioNacimiento = 1990, anioActual = 2022;

//variables de ambito local
function CalculaEdad(anioNacimiento, anioActual){
    let edad = anioActual - anioNacimiento;

    return edad;
}

alert(`Hola ${nombre}, tu edad es ${CalculaEdad(anioNacimiento, anioActual)}`);