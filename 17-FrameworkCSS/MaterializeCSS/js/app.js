function Ordenar(){
    let columnaDerecha = document.getElementById("derecha");
    let columnaIzquierda = document.getElementById("izquierda");

    columnaDerecha.classList.add('push-s3');
    columnaIzquierda.classList.add('pull-s3');
}

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.collapsible');
    let options = {
        inDuration:600
    };
    let instances = M.Collapsible.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    let options = {};
    var instances = M.Dropdown.init(elems, options);
  });

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    let options = {
        dismissible:false,
        preventScrolling:false
    };
    var instances = M.Modal.init(elems, options);
  });