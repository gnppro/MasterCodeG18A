//declaracion de un objeto literal
let computador = {
    marca:"Asus",
    procesador:"Core i3",
    cantidadRam: 8,
    enciende: true,
    puertos: ["usb Tipo A","hdmi","usb Tipo C","Jack 3mm"],
    encenderApagar : function(onOff){
        if(onOff === 1)
            return "Encendio";
        else
            return "Apago";
    }
};

//acceder a los valores de un objeto
alert(`El computador de Marca ${computador.marca} tiene una memora Ram de ${computador['cantidadRam']}`);

//acceder a los metodos del objeto
alert(`El computador ${computador.encenderApagar(1)}`);

//como sobreescribir valores de las propiedades
computador.marca = "Apple";
alert(`El computador de Marca ${computador.marca} tiene una memora Ram de ${computador['cantidadRam']}`);

//desestruturacion de un objeto
computador.marca = "Lenovo";
const {cantidadRam, marca, enciende} = computador;
alert(`El computador de Marca ${marca} tiene una memora Ram de ${cantidadRam}`);



