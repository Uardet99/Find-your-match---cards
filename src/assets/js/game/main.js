import { ruta } from "../comon/router.js";

document.addEventListener("DOMContentLoaded", () => {
  ruta(window.location.hash);
  window.addEventListener("hashchange", () => {
    ruta(window.location.hash);
  });
});
