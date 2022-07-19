// inmutabilidad
// spread o rest operator

const arrayOriginal = [
  {},
  {},
  {},
  {},
];

Object.freeze(arrayOriginal);

const copiaDelArrayOrigial = [...arrayOriginal];
// metodos mutan el array original

// push, pop, unshift, shift, splice
const miObjeto = {};

Object.freeze(miObjeto)

const otroObjeto = {...miObjeto}
