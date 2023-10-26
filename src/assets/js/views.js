function activarClick() {}

function desactivarClick() {
    this.style.pointerEvents = "none";
}
function desabilitarEsteClick(item) {
    item.style.pointerEvents = "none";
}

export { activarClick, desactivarClick, desabilitarEsteClick };
