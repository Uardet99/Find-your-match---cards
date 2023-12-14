// FUNCIONES UTILIES GENERALES
import {
  createTable,
  plantillaCargada,
  addImagenesPlantillaCargadas,
} from "../game/gameHelpers.js";
import { startGame } from "../game/gameLogic.js";
import { login, loginForm } from "../login/loginHelpers.js";
import { register, registerForm } from "../register/registerHelpers.js";
import { logout } from "./users.js";
import { templateProfile } from "../profile/profileHelpers.js";
import { getState, ultimaPartida } from "./cartashttps.js";

export function ruta(url) {
  const contenedorDinamico = document.getElementById("contenido-dinamico");
  const boton_registrarse = document.getElementById("btn-register");
  const boton_login = document.getElementById("btn-login");
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

      let arrayJSON = [];
      let partida = [];
      (async () => {
        try {
          arrayJSON = await getState();
          console.log("Datos:", arrayJSON.length);
          partida = ultimaPartida(arrayJSON);
          contenedorDinamico.innerHTML = plantillaCargada(partida);
          addImagenesPlantillaCargadas(partida);
        } catch (error) {
          console.error("Error:", error);
        }
      })();

      break;
    case "#/profile":
      contenedorDinamico.innerHTML = "";
      contenedorDinamico.innerHTML = templateProfile();
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
