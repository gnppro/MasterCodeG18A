const arrayDeNumeros = [
  1,2,3,4,5,6,7,8,9,10
];

const callback = (acumulador, numeroActual) => {
  return acumulador + numeroActual;
};

const valorInicial = 0;

const sumatoria = arrayDeNumeros.reduce(callback, 0);

console.log("🚀 ~ file: reduce.js ~ line 12 ~ sumatoria", sumatoria);
