// Esta funcion es un inicializador que se utilizara en el game.js
import { Jugador } from "./jugador.js";
import {
  habilitarClick,
  desactivarClick,
  desabilitarEsteClick,
  reiniciarClick,
} from "../views.js";

function startGame() {
  let btnJugar = document.getElementById("btn-play");
  btnJugar.addEventListener("click", () => {
    obtenerNombreImagenes();
  });
}

const jugador1 = new Jugador("Jugador 1");
const jugador2 = new Jugador("Jugador 2");

// Variable de control

function obtenerNombreImagenes() {
  let jugadorActual = jugador1;
  let primeraImagen = null;
  let puntos = 0;
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("click", function (event) {
      if (primeraImagen === null) {
        primeraImagen = this; // Si es el primer clic, almacena la referencia de esta imagen

        //primeraImagen.style.pointerEvents = "none"; 
        desabilitarEsteClick(primeraImagen);
      } else {
        // Si es el segundo clic, compara los src
        if (primeraImagen.src === this.src) {
          jugadorActual.agregarPuntos(++puntos);
          console.log(
            jugadorActual.nombre +
              " -> " +
              jugadorActual.obtenerPuntos() +
              " puntos"
          );
          //this.style.pointerEvents = "none"; // Deshabilita el clic en ambas imágenes
          //desactivarClick.call(this); // Usando el call() mantenemos el contexto del this
          primeraImagen.remove();
          this.remove();
        } else {
          primeraImagen.style.pointerEvents = ""; // Si no coinciden, habilita el clic nuevamente en la primera imagen
          //habilitarClick(primeraImagen);
          jugadorActual = cambiarTurno(jugadorActual);
          jugadorActual.obtenerPuntos();
        }

        primeraImagen = null; // Reiniciar la primeraImagen para el próximo par de clics
        //reiniciarClick(primeraImagen);
      }
    });
  });
}

function cambiarTurno(jugadorActual) {
  if (jugadorActual === jugador1) {
    return (jugadorActual = jugador2);
  }

  return (jugadorActual = jugador1);
}

export { startGame };
/* console.log(
  primeraImagen.src +
    " === " +
    this.src +
    " -> " +
    (primeraImagen.src === this.src)
);
console.log(
  primeraImagen.src +
    " === " +
    this.src +
    " -> " +
    (primeraImagen.src === this.src)
); */
