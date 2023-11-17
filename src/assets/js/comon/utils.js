// FUNCIONES UTILIES GENERALES
import { createTable } from "../game/gameHelpers.js";
import { startGame } from "../game/gameLogic.js";

export function ruta(url) {
  const contenedorDinamico = document.getElementById("contenido-dinamico");
  switch (url) {
    case "":
      window.location.hash = "#/";
      break;
    case "#/login":
      contenedorDinamico.innerHTML = "";
      console.log("Login");
      break;
    case "#/register":
      contenedorDinamico.innerHTML = "";
      console.log("register");
      break;
    case "#/jugar":
      
      createTable();
      startGame();
      console.log("Jugar");
      break;

    case "#/logout":
      console.log("logout");
      break;
    default:
      window.location.hash = "#/";
  }
}
