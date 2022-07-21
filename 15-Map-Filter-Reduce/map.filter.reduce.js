var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

const luke = personnel[0];
/*
const id = luke.id;
const name = luke.name;
const pilotingScore = luke.pilotingScore;
const shootingScore = luke.shootingScore;
const isForceUser = luke.isForceUser;
*/
const {
  id,
  name,
  pilotingScore,
  shootingScore,
  isForceUser,
} = luke;

console.log(name, shootingScore, isForceUser);

const filtrarJedis = (persona) => persona.isForceUser;

// Array de Objetos
const jedis = personnel.filter(filtrarJedis)
console.log("🚀 ~ file: map.filter.reduce.js ~ line 61 ~ jedis", jedis)

const sumarPuntajesDeHabilidades = function(jedi) {
  return jedi.pilotingScore + jedi.shootingScore;
}

// Array de Números
const puntajesDeJedis = jedis.map(sumarPuntajesDeHabilidades);
console.log("🚀 ~ file: map.filter.reduce.js ~ line 69 ~ puntajesDeJedis", puntajesDeJedis)

function fuerzaTotalDeJedis(acumulador, puntajeActual) {
  return acumulador + puntajeActual
}

// Número
const resultado = puntajesDeJedis.reduce(fuerzaTotalDeJedis, 0) // Result: 420
console.log("🚀 ~ file: map.filter.reduce.js ~ line 73 ~ resultado", resultado)

console.log("line 79", personnel.filter(filtrarJedis).map(sumarPuntajesDeHabilidades).reduce(fuerzaTotalDeJedis, 0))
