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
  return item = null;
}

export {
  habilitarClick,
  desactivarClick,
  desabilitarEsteClick,
  reiniciarClick,
};
