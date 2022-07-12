//Entradas de datos
var nombre = prompt('Ingresa tu nombre');

//Salidas de datos
console.log('Tu nombre es: ' + nombre); //sirve para el desarrollador
document.write(`Tu nombre es ${nombre}`); //sirve para escribir en el DOM
alert(`Tu nombre es ${nombre}`); //popup para mostrar informacion

//Tipos de datos basicos
var string = 'Mauricio';
var numero = 32;
var booleanos = true;
var array = [];
var camelCase = '';

//Condicionales
if(numero === 32){
    true;
}else if(numero == '32'){
    true;
}else{
    true;
}

switch(numero){
    case 32:{
        true;
        break;
    }  
    case 35:{
        true;
        break;
    }
    default:
        false;
}

//Array
var cantidad = array.length;
array.push('Lo que quiera');
array.push(3);
array[0];


