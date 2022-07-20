function Registrar(){
    //variables
    let nombres, apellidos, fechaNacimiento, genero, nivelAcademico, generoTexto;

    //capturamos datos
    nombres = document.getElementById('txtNombre').value;
    apellidos = document.getElementById('txtApellidos').value;
    fechaNacimiento = document.getElementById('txtFechaNac').value;
    nivelAcademico = document.getElementById('listNivel').value;
    
    genero = document.querySelectorAll('input[name="genero"]');

    //leemos el nodelist para determinar el elemento marcado y obtener el valor
    for(let i=0; i<genero.length; i++){
        if(genero[i].checked === true && genero[i].id === 'O'){
            generoTexto = document.getElementById('txtOtro').value;
        }else if(genero[i].checked === true){
            generoTexto = genero[i].id;
        }
    }

    //creamos registro en pantalla
    CrearRegistro(nombres + ' ' + apellidos, fechaNacimiento, nivelAcademico, generoTexto);
}

//Funcion que realiza la interaccion para mostrar u ocultar el cuadro de texto para Otro
function SeleccionarGenero(){
    //variables
    let rbOtro = document.getElementById('O');

    //validamos el genero seleccionado
    if(rbOtro.checked === true){
        document.getElementById('txtOtro').classList.remove('invisible');
        document.getElementById('txtOtro').classList.add('visible');
    }else{
        document.getElementById('txtOtro').classList.remove('visible');
        document.getElementById('txtOtro').classList.add('invisible');
    }

    document.getElementById('txtOtro').value = '';
}

function AceptaTerminos(){
    //variables
    let chkAcepto = document.getElementById('chkAcepto');

    //validamos si acepta o no los terminos
    if(chkAcepto.checked === true){
        document.getElementsByTagName('button')[0].classList.remove('invisible');
        document.getElementsByTagName('button')[0].classList.add('visible');
    }else{
        document.getElementsByTagName('button')[0].classList.remove('visible');
        document.getElementsByTagName('button')[0].classList.add('invisible');
    }
}

function CrearRegistro(nombreCompleto, fechaNacimiento, nivelAcademico, generoTexto){
    //variables
    let tBody = document.getElementById('tbody');
    let tr = document.createElement('tr');
    
    //creamos elementos de texto
    let txtNombre = document.createTextNode(nombreCompleto);
    let tdNombre = document.createElement('td');
    tdNombre.appendChild(txtNombre);
    tr.appendChild(tdNombre);

    let txtFechaNac = document.createTextNode(fechaNacimiento);
    let tdFecha = document.createElement('td')
    tdFecha.appendChild(txtFechaNac);
    tr.appendChild(tdFecha);

    let txtNivelAcademico = document.createTextNode(nivelAcademico);
    let tdNivel = document.createElement('td');
    tdNivel.appendChild(txtNivelAcademico);
    tr.appendChild(tdNivel);

    let txtGenero = document.createTextNode(generoTexto);
    let tdGenero = document.createElement('td');
    tdGenero.appendChild(txtGenero);
    tr.appendChild(tdGenero);

    tBody.append(tr);
}