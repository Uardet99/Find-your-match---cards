// FUNCIONES AUXILIARES ESPECIFICAS DEL JUEGO
export { createTable };
import { state } from "./gameState.js";

function createTable() {
  let contenidoDinamico = document.getElementById("contenido-dinamico");
  contenidoDinamico.innerHTML = plantillaTablero();
  addImagenesPlantilla();
}

export function addImagenesPlantilla() {
  let td = document.querySelectorAll("td");
  let arrayRutaImagen = imgAleatoria();

  for (let i = 0; i < td.length; i++) {
    let img = document.createElement("img");
    img.src = "src/assets/img/" + arrayRutaImagen[i];

    img.id = "img-" + i;
    td[i].appendChild(img);
  }
}

// Retornamos un template del tablero
export function plantillaTablero() {
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

export function imgAleatoria() {
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

    state.board.cells.push(imagenSeleccionada);
  }

  console.log(state.board.cells);
  console.log(arrayAuxiliar);
  return arrayAuxiliar; // Esto contiene las cartas colocadas aleatoriamente
}

export function plantillaCargada(array) {
  let plantilla = "";
  if (array === null) {
    alert("Todavia no hay partidas");
  } else {
    plantilla = ` <div class="cont-dinamico">
    <div id="cont-jugadores" class="contenedor-jugadores">
      <div id="jugador-1" class="item-jugador">
        <h1>Jugador 1</h1>
        <h3 id="ju-1-puntos">Puntos: ${array.estado.players[0].points}</h3>
      </div>
      <div id="jugador-2" class="item-jugador">
        <h1>Jugador 2</h1>
        <h3 id="ju-2-puntos">Puntos: ${array.estado.players[1].points}</h3>
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
  return plantilla;
}


export function addImagenesPlantillaCargadas(array) {
  let td = document.querySelectorAll("td");
  let arrayRutaImagen = imgAleatoria();

  for (let i = 0; i < td.length; i++) {
    let img = document.createElement("img");
    img.src = "src/assets/img/" + array.estado.board.cells[i];

    img.id = "img-" + i;
    td[i].appendChild(img);
  }
}