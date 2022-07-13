//funcion sin parametros y sin return
function Suma(){
    alert(`La suma es ${2+2}`);
}

//ejecutamos la funcion
Suma();

//funcion con parametros sin return
function SumaParametros(num1, num2){
    alert(`La suma es ${num1 + num2}`);
}

SumaParametros(2,5);
SumaParametros(10,20);

//funcion con parametros y con return
function SumaReturn(num1, num2){
    SumaParametros(40,50);
    return num1 + num2;
}

var mensaje = `La suma es ${SumaReturn(3, 6)}`;
alert(mensaje);

//funciones anonimas
var mensaje = function (num1, num2){
    return `La suma es ${num1 + num2}`
}

alert(mensaje(2,3));

var mensaje1 = (num1, num2) => `La suma es ${num1 + num2}`;

alert(mensaje1(1,1));

