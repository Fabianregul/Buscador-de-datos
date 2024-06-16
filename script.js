const datos = []; // Arreglo para almacenar los datos

    function agregarDato() {
      let nombre = document.getElementById('nombre').value;
      let edad = document.getElementById('edad').value;
      let pais = document.getElementById('pais').value;

      if (nombre && edad && pais) {
        if (existeNombre(nombre)) {
          alert("El nombre ya existe en la tabla. Por favor, ingrese otro nombre.");
        } else {
          let dato = {
            nombre: nombre,
            edad: edad,
            pais: pais
          };

          datos.push(dato);

          let tabla = document.getElementById('tabla');
          let row = tabla.insertRow(-1);
          let cell1 = row.insertCell(0);
          let cell2 = row.insertCell(1);
          let cell3 = row.insertCell(2);

          cell1.innerHTML = nombre;
          cell2.innerHTML = edad;
          cell3.innerHTML = pais;

          actualizarContador();
          limpiarCampos();
        }
           } else {
        alert("Por favor, complete todos los campos.");
      }
    }

    function limpiarCampos() {
      document.getElementById('nombre').value = '';
      document.getElementById('edad').value = '';
      document.getElementById('pais').value = '';
    }

    function existeNombre(nombre) {
      for (var i = 0; i < datos.length; i++) {
        if (datos[i].nombre === nombre) {
          return true;
        }
      }
      return false;
    }

    function buscarDatos() {
      var filtro = document.getElementById('buscar').value.toLowerCase();
      var tabla = document.getElementById('tabla');
      var filas = tabla.getElementsByTagName('tr');

      for (var i = 1; i < filas.length; i++) {
        var nombre = filas[i].cells[0].innerText.toLowerCase();
        var edad = filas[i].cells[1].innerText.toLowerCase();
        var pais = filas[i].cells[2].innerText.toLowerCase();

        if (nombre.indexOf(filtro) !== -1 || edad.indexOf(filtro) !== -1 || pais.indexOf(filtro) !== -1) {
          filas[i].style.display = "";
        } else {
          filas[i].style.display = "none";
        }
      }
    }

    function mostrarTodos() {
      var tabla = document.getElementById('tabla');
      var filas = tabla.getElementsByTagName('tr');

      for (var i = 1; i < filas.length; i++) {
        filas[i].style.display = "";
      }

      document.getElementById('buscar').value = "";
    }

    function actualizarContador() {
      var contador = document.getElementById('contador');
      contador.innerText = "Total de datos: " + datos.length;
    }
