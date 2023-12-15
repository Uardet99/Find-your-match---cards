// FUNCIONES UTILIES GENERALES
import { createTable } from "../game/gameHelpers.js";
import { startGame } from "../game/gameLogic.js";
import { loginForm } from "../login/loginHelpers.js";
import { registerForm } from "../register/registerHelpers.js";
import { logout } from "./users.js";
import { templateProfile } from "../profile/profileHelpers.js";
import { cargarPartida } from "./cartashttps.js";


// ROUTER
export function ruta(url) {
  const contenedorDinamico = document.getElementById("contenido-dinamico");
  switch (url) {
    case "":
      window.location.hash = "#/";
      break;
    case "#/login":
      contenedorDinamico.innerHTML = "";
      contenedorDinamico.append(loginForm());
      break;
    case "#/register":
      contenedorDinamico.innerHTML = "";
      contenedorDinamico.append(registerForm());
      break;
    case "#/jugar":
      contenedorDinamico.innerHTML = "";
      createTable();
      startGame();
      break;
    case "#/cargarPartida":
      contenedorDinamico.innerHTML = "";
      cargarPartida();
      break;
    case "#/profile":
      contenedorDinamico.innerHTML = "";
      contenedorDinamico.innerHTML = templateProfile();
      let btn_cambiarImagenProfile = document.getElementById("upload-button");
      btn_cambiarImagenProfile.addEventListener("click", () => {
        alert("Todavia no esta implementado el cambio de imagen de usuario");
      });
      console.log("Profile");
      break;
    case "#/logout":
      contenedorDinamico.innerHTML = "";
      logout();
      break;
    default:
      window.location.hash = "#/";
  }
}
