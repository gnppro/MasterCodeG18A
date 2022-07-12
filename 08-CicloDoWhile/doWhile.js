//Contexto: Jugar la loteria con numeros entre 1 y 100, mostrar el ganador una vez caiga el 77.
//El auditor ingresara el numero ganador.

//1. Variables
var numero;
var contador = 0;
var numeroGanador;

//2. Obtener los datos
numeroGanador = Number(prompt('Ingrese el numero que será el ganador'));

//if normal------ if(condicion){codigo si true}else{codigo si false}

//condicion ternario---- condicion ? codigo si true : codigo si false

if(!isNaN(numeroGanador)){
    //3. Determinar el ganador.
    do{
        numero = Math.round(Math.random() * 100);
        contador ++;

        console.log(numero);

        if(numero === numeroGanador)
            alert('Ganaste');

    }while(contador < 50)
    
}else{
    alert('Ingresa un numero válido');
}




