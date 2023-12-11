// Esta funcion es un inicializador que se utilizara en el game.js
import { Jugador } from "./jugador.js";
import { state } from "./gameState.js";
import {
  habilitarClick,
  desactivarClick,
  desabilitarEsteClick,
  reiniciarClick,
  resaltarDivJugador,
  resaltarDivJugadorPrimerTurno,
} from "../views.js";

function startGame() {
  let btnJugar = document.getElementById("btn-play");
  /* btnJugar.addEventListener("click", () => {
    obtenerNombreImagenes();
  }); */
  obtenerNombreImagenes();
}

const jugador1 = new Jugador("Jugador 1");
const jugador2 = new Jugador("Jugador 2");

function obtenerNombreImagenes() {
  let jugadorActual = jugador1;
  let primeraImagen = null;
  let cont = 0;

  if (cont == 0) {
    resaltarDivJugadorPrimerTurno();
    cont++;
  }

  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", function (event) {
      if (primeraImagen === null) {
        primeraImagen = this; // Si es el primer clic, almacena la referencia de esta imagen
        desabilitarEsteClick(primeraImagen); // Desabilitamos el click en la imagen que ya hemos clicado
      } else {
        // Si es el segundo clic, compara los src y si son iguales punto para el jugador
        if (primeraImagen.src === this.src) {
          jugadorActual.agregarPuntos(++jugadorActual.puntos);
          actualizarMarcadores(jugadorActual);

          primeraImagen.remove();
          this.remove();
          /* console.log(event.target.id.split("-")[1]); */

          /* console.log(
            this.id.split("-")[1] +
              " " +
              state.board.cells[this.id.split("-")[1]]
          );
          console.log(
            primeraImagen.id.split("-")[1] +
              " " +
              state.board.cells[primeraImagen.id.split("-")[1]]
          ); */
          
          state.board.cells[this.id.split("-")[1]] = "";
          state.board.cells[primeraImagen.id.split("-")[1]] = "";
          console.log(state.board.cells);
        } else {
          primeraImagen.style.pointerEvents = ""; // Si no coinciden, habilita el clic nuevamente en la primera imagen
          jugadorActual = cambiarTurno(jugadorActual);
          jugadorActual.obtenerPuntos();
        }

        if (jugador1.obtenerPuntos() + jugador2.obtenerPuntos() == 10) {
          if (jugador1.obtenerPuntos() > jugador2.obtenerPuntos()) {
            alert("¡Has ganado Jugador 1!");
          } else if (jugador1.obtenerPuntos() < jugador2.obtenerPuntos()) {
            alert("¡Has ganado Jugador 2!");
          } else {
            alert("¡Empate!");
          }
        }
        primeraImagen = reiniciarClick(primeraImagen);
      }
    });
  });
}

function cambiarTurno(jugadorActual) {
  resaltarDivJugador(jugadorActual);
  if (jugadorActual === jugador1) {
    return (jugadorActual = jugador2);
  }
  return (jugadorActual = jugador1);
}

function actualizarMarcadores(jugadorActual) {
  if (jugadorActual === jugador1) {
    document.getElementById("ju-1-puntos").innerHTML = "";
    document.getElementById("ju-1-puntos").innerHTML +=
      "Puntos: " + jugadorActual.obtenerPuntos();
  } else {
    document.getElementById("ju-2-puntos").innerHTML = "";
    document.getElementById("ju-2-puntos").innerHTML +=
      "Puntos: " + jugadorActual.obtenerPuntos();
  }
}

export { startGame };
