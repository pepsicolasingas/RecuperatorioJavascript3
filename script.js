function agregarNota() {
    var notaInput = document.getElementById("nota").value;
    if (notaInput === "") {
      return;
    }
    var listaNotas = document.getElementById("lista-notas");
    var nuevaNota = document.createElement("div");
    nuevaNota.innerHTML = notaInput;
    nuevaNota.classList.add("nota");

    var botonEliminar = document.createElement("button");
    botonEliminar.innerHTML = "Eliminar";
    botonEliminar.classList.add("boton-eliminar");

    nuevaNota.appendChild(botonEliminar);
    botonEliminar.addEventListener("click", function () {
      nuevaNota.remove();
    });

    listaNotas.appendChild(nuevaNota);
    document.getElementById("nota").value = "";
  }