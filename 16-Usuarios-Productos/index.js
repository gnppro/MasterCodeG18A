const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

const obtenerUUID = () => ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
);

// 1.- Cree una función llamada "registrarse" que permita agregar al array de usuarios un nuevo usuario.
const registrarse = (
  username,
  email,
  password
) => {
  const payload = {
    _id: obtenerUUID(), // TODO: obtenerUUID
    username,
    email,
    password,
    createdAt: new Date().toISOString(),
    isLoggedIn: false,
  };

  users.push(payload)

  return payload;
};

registrarse('gnppro', 'hola@gerardo.id', 'qwerty');

console.log(users);

// 1.1.- Reto Adicional: Si el usuario existe, informe al usuario que ya tiene una cuenta.

// 2.- Cree una función llamada ingresar que permita al usuario iniciar sesión en la aplicación.
const ingresar = (correo, contrasena) => {
  const usuarioFiltrado = user.filter((el) => {
    const email = el.email // TODO: destructuración;
    return email === correo // TODO: retornalo en la flecha
  });

  const usuarioActual = usuarioFiltrado[0];

  // En caso de que no exista un usuario con el email regresar el error
  if (!usuarioActual) {
    console.log("El email o contraseña es incorrecto");
    return;
  }

  const password = usuarioActual.password; // TODO: destructuración;
  if (contrasena === password) {
    users[user.findIndex(({ email }) => email === correo)].isLoggedIn = true;
    console.log("Ingresaste");
  } else {
    console.log("El email o contraseña es incorrecto");
    return;
  }
};

ingresar('asdf@asdf.com', 'asdfzxcv');
ingresar('brook@brook.com', 'zwf8md');
console.log(users);

// 2.1.- Reto Adicional: Si el usuario ya ingreso a su cuenta (isLoggedIn: true), informe al usuario que ya esta loggeado.


// 3.0 Sustituir con valores del DOM los parametros de las funciónes => ingresar y registrarse
