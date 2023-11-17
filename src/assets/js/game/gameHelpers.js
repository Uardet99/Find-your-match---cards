// FUNCIONES AUXILIARES ESPECIFICAS DEL JUEGO

function createTable() {
  // Obtenemos el contenedor principal
  let contPrincipal = document.getElementById("contenedor-principal");
  // Obtenemos del contenedor principal mediante la funcion children, el boton que esta en la posicion 2
  // y lo almacenamos en la variable btn_jugar
  //let btn_jugar = contPrincipal.children[2];
  let btn_jugar = document.getElementById("btn-play");

  // Le colocamos un listener para cuando lo pulsemos obtengamos el div donde se mostrara el tablero,
  // creemos el tablero y añadimos las imagenes
  btn_jugar.addEventListener("click", () => {
    let contenidoDinamico = document.getElementById("contenido-dinamico");
    contenidoDinamico.innerHTML = plantillaTablero();
    addImagenesPlantilla();
  });
}

function addImagenesPlantilla() {
  let td = document.querySelectorAll("td");
  let arrayRutaImagen = imgAleatoria();

  for (let i = 0; i < td.length; i++) {
    let img = document.createElement("img");
    img.src = "src/assets/img/" + arrayRutaImagen[i];

    td[i].appendChild(img);
  }
}

// Retornamos un template del tablero
function plantillaTablero() {
  return ` <div class="cont-dinamico">
          <div id="cont-jugadores" class="contenedor-jugadores">
            <div id="jugador-1" class="item-jugador">
              <h1>Jugador 1</h1>
              <h3 id="ju-1-puntos">Puntos: 0</h3>
            </div>
            <div id="jugador-2" class="item-jugador">
              <h1>Jugador 2</h1>
              <h3 id="ju-2-puntos">Puntos: 0</h3>
            </div>
          </div>
  
          <div class="cont-tablero">
          <table border="1">
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
          </div>
        </div>`;
}

function imgAleatoria() {
  let arrayImagenes = [
    "as_corazones.png",
    "as_corazones.png",
    "as_diamantes.png",
    "as_diamantes.png",
    "as_picas.png",
    "as_picas.png",
    "as_trebol.png",
    "as_trebol.png",
    "jota_corazones.png",
    "jota_corazones.png",
    "jota_diamantes.png",
    "jota_diamantes.png",
    "jota_picas.png",
    "jota_picas.png",
    "jota_trebol.png",
    "jota_trebol.png",
    "reina_corazones.png",
    "reina_corazones.png",
    "reina_diamantes.png",
    "reina_diamantes.png",
  ];

  let arrayTemp = [...arrayImagenes]; // Copia el array original
  let arrayAuxiliar = [];

  for (let i = 0; i < arrayImagenes.length; i++) {
    let indice = Math.floor(Math.random() * arrayTemp.length);
    let [imagenSeleccionada] = arrayTemp.splice(indice, 1); // Elimina y obtiene el elemento
    arrayAuxiliar.push(imagenSeleccionada);
  }

  return arrayAuxiliar; // Esto genera 1 numero aleatorio entre el 0 y el 19
}

export { createTable };
