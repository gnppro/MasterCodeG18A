/*Crear una aplicacion que permita a un profesor, indicar cuantos alumnos tiene en su materia y cuantas
notas recogio para cada estudiante y calcular el promedio individual y grupal.*/

//variables globales
let cantidadAlumnos, cantidadNotas, promedioGrupal;
let datosGrupo = [];

//solicitamos los datos
cantidadAlumnos = Number(prompt('Ingresa la cantidad de alumnos en tu grupo'));
cantidadNotas = Number(prompt('Ingresa la cantidad de notas a promediar por alumno'));

//Funcion que realiza la solicitud de datos al usuario para cada alumno
function SolicitarAlumnos(){
    //variables
    let grupo = [];

    //iteramos para solicitar los datos por alumno
    for(let i=1; i<=cantidadAlumnos; i++){
        //variables
        let alumno = [];
        let nombre = prompt(`Ingresa el nombre del alumno ${i}`);

        //guardo datos del alumno
        alumno.push(nombre);
        alumno.push(SolicitarNotas(nombre));

        grupo.push(alumno);
    }

    function SolicitarNotas(nombre){
        //variables
        let notas = [];

        for(let j=1; j<=cantidadNotas; j++){
            let nota = Number(prompt(`Ingresa la nota ${j} del estudiante ${nombre}`))

            notas.push(nota);
        }
        
        return notas;
    }

    return grupo;
}

datosGrupo = SolicitarAlumnos();

//Funcion que realiza el promedio indivudual y grupal
function Promedio(){
    let sumaGrupal = 0;
    let grupoTexto = "";
    let alumno, nombre, notas, promedio;

    //iteramos el array de datos grupo
    for(let i=0; i<datosGrupo.length; i++){
        alumno = datosGrupo[i];

        nombre = alumno[0];
        notas = alumno[1];        

        //calculamos el promedio individual
        promedio = SumaNotas(notas) / cantidadNotas;

        //concatenamos texto
        grupoTexto += Concatenar(nombre, i + 1, promedio);

        sumaGrupal += promedio;
    }

    promedioGrupal = sumaGrupal / cantidadAlumnos;

    return grupoTexto;
}

//Funcion que realiza la sumatoria de notas dentro de un array
function SumaNotas(notas){
    let suma = 0;

    for(let n=0; n < notas.length; n++){
        suma += notas[n];
    }

    return suma;
}

//Funcion que realiza la concatenacion del texto de cada alumno
function Concatenar(nombre, posicion, promedio){
    return `${posicion}. Nombre: ${nombre} - Promedio: ${promedio} <br>`
}

//imprimimos el resultado
document.write(`Promedios Grupo <br><br> ${Promedio()} <br><br> Promedio Grupal: ${promedioGrupal}`);