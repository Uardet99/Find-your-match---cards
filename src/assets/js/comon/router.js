// FUNCIONES UTILIES GENERALES
import { createTable } from "../game/gameHelpers.js";
import { startGame } from "../game/gameLogic.js";
import { login, loginForm } from "../login/loginHelpers.js";
import { register, registerForm } from "../register/registerHelpers.js";
import { logout } from "./users.js";

export function ruta(url) {
  const contenedorDinamico = document.getElementById("contenido-dinamico");

  switch (url) {
    case "":
      window.location.hash = "#/";
      break;
    case "#/login":
      contenedorDinamico.innerHTML = "";
      //login();
      contenedorDinamico.append(loginForm());
      break;
    case "#/register":
      contenedorDinamico.innerHTML = "";
      // register();
      contenedorDinamico.append(registerForm());

      break;
    case "#/jugar":
      contenedorDinamico.innerHTML = "";
      createTable();
      startGame();
      console.log("Jugar");
      break;

    case "#/logout":
      contenedorDinamico.innerHTML = "";
      logout();
      break;
    default:
      window.location.hash = "#/";
  }
}
