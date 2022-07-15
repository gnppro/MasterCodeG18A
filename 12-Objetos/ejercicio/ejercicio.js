//una clase es el molde de un objeto para poder reutilizarlo haciendo copias del mismo
class Alumno {
    constructor(nombre, promedio){
        this.nombre = nombre,
        this.promedio = promedio
    }
}

let arregloAlumnos = [];

for(let i=1; i<=3; i++){
    let nombre = prompt(`Ingresa el nombre del alumno ${i}`);
    let promedio = prompt(`Ingresa el promedio del alumno ${i}`);

    let alumno = new Alumno(nombre, promedio);

    arregloAlumnos.push(alumno);
}

console.log(arregloAlumnos);
