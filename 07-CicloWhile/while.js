//Contexto: Calcular la edad de una persona e imprimir los numero del 1 hasta la edad de persona.

//1. Variables
var edad, anioActual, anioNacimiento;
var contador = 0;

//2. Solicitar datos al usuario
anioActual = Number(prompt('Ingresa el año actual'));
anioNacimiento = Number(prompt('Ingresa tu año de nacimiento'));

//3. Procesamiento de los datos
edad = anioActual - anioNacimiento;

while(contador < edad){
    contador ++; //solo permite contadores que va de a 1 por vez
    //contador += 5; //incrementa de a 1 o mas por vez
    //contador = contador + 1; contador base de antaño
    console.log(contador);
    
}

console.log(`Tu edad es ${edad}`);
