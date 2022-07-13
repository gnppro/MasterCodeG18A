//Contexto: Hacer un programa que solicite la cantidad de ingredientes para preparar un platillo
// y los ingredientes para su preparacion, por ultimo impimir en pantalla la lista de ingredientes.

//1. Variables
var cantIngredientes, nombrePlatillo;
var arrayIngredientes = [];

//2. Capturar los datos necesarios
nombrePlatillo = prompt('Ingresa el nombre de tu platillo');
cantIngredientes = Number(prompt('Ingresa la cantidad de ingredientes para tu platillo'));

//3. Procesamiento de datos
for(var i = 1; i <= cantIngredientes; i++){
    arrayIngredientes.push(prompt(`Ingresa el nombre del ingrediente ${i}`));
    //arrayIngredientes.push(prompt('Ingresa el nombre del ingrediente ' + i));
}

document.write(`<b>Ingredientes para hacer ${nombrePlatillo}</b> <br>`);

for(var j = 0; j < arrayIngredientes.length; j++){
    document.write(`${j + 1}. ${arrayIngredientes[j]} <br>`);
}



