function Logear(){
    let user = document.getElementById('user').value;
    let pass = document.getElementById('password').value;

    if(user === 'Mauricio' && pass === '123456'){
        //Guardar en Session Storage
        sessionStorage.setItem('user', user);

        //Guardar en Local Storage
        localStorage.setItem('usuario', user);

        window.location.href = "secundaria.html";
    }else{
        swal("Ups!", "Datos Incorrectos, intenta de nuevo", "error");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('welcome').innerText = `Bienvenid@ ${sessionStorage.getItem('user')}`;
  });

function Salir(){
    //Guardar en Session Storage
    sessionStorage.setItem('user', '');

    //Guardar en Local Storage
    localStorage.setItem('usuario', '');

    window.location.href = "index.html";
}