function habilitarClick(item) {
  item.style.pointerEvents = "";
}

function desactivarClick() {
  this.style.pointerEvents = "none";
}
// Deshabilita el clic en esta imagen (Esto se hace para que no se pueda seleccionar la misma imagen 2 veces)
function desabilitarEsteClick(item) {
  item.style.pointerEvents = "none";
}

function reiniciarClick(item) {
  return (item = null);
}

function resaltarDivJugador(jugador) {
  let contenedorJugador1 = document.getElementById("jugador-1");
  let contenedorJugador2 = document.getElementById("jugador-2");
  if (jugador.nombre == "Jugador 1") {
    contenedorJugador1.style.backgroundColor = "#00FF59";
    contenedorJugador2.style.backgroundColor = "red";
    console.log("Ponemos color al juhgador 2");
  } else {
    contenedorJugador2.style.backgroundColor = "#00FF59";
    contenedorJugador1.style.backgroundColor = "red";
    console.log("Ponemos color al jugador 1");
  }
}

function resaltarDivJugadorPrimerTurno() {
  let contenedorJugador1 = document.getElementById("jugador-1");
  contenedorJugador1.style.backgroundColor = "red";
}

export {
  habilitarClick,
  desactivarClick,
  desabilitarEsteClick,
  reiniciarClick,
  resaltarDivJugador,
  resaltarDivJugadorPrimerTurno
};
