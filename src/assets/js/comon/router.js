// FUNCIONES UTILIES GENERALES
import { createTable } from "../game/gameHelpers.js";
import { startGame } from "../game/gameLogic.js";
import { login } from "../login/loginHelpers.js";
import { register } from "../register/registerHelpers.js";

export function ruta(url) {
  const contenedorDinamico = document.getElementById("contenido-dinamico");
  
  switch (url) {
    case "":
      window.location.hash = "#/";
      break;
    case "#/login":
      contenedorDinamico.innerHTML = "";
      login();
      console.log("Login");
      break;
    case "#/register":
      contenedorDinamico.innerHTML = "";
      register();
      
      console.log("register");
      break;
    case "#/jugar":
      contenedorDinamico.innerHTML = "";
      createTable();
      startGame();
      console.log("Jugar");
      break;

    case "#/logout":
      contenedorDinamico.innerHTML = "";
      console.log("logout");
      break;
    default:
      window.location.hash = "#/";
  }
}
