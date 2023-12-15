// API REST -> JSON EN SUPABASE
export { saveGame, getState, ultimaPartida, cargarPartida };
import {
  addImagenesPlantillaCargadas,
  plantillaCargada,
  cargarTurnoJugador,
} from "../game/gameHelpers.js";

async function saveGame(gameState) {
  const response = await fetch(
    "https://pgzzjqwtbgogicylniar.supabase.co/rest/v1/estado_juego",
    {
      method: "POST",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnenpqcXd0YmdvZ2ljeWxuaWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyMjgxMjQsImV4cCI6MjAxNzgwNDEyNH0.6cQBxjHIewaA59RveaI5SHm20jJqY078af9snfYAiS8",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnenpqcXd0YmdvZ2ljeWxuaWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyMjgxMjQsImV4cCI6MjAxNzgwNDEyNH0.6cQBxjHIewaA59RveaI5SHm20jJqY078af9snfYAiS8",
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        estado: gameState,
        uid_usuario: localStorage.getItem("uid"),
      }),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
      return response.json();
    })
    .then((gameState) => {
      console.log("Datos obtenidos", gameState);
    })
    .catch((error) => {
      console.error("Error durante la solicitud", error);
    });
}

async function getState() {
  const url = "https://pgzzjqwtbgogicylniar.supabase.co/rest/v1/estado_juego";
  const apiKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnenpqcXd0YmdvZ2ljeWxuaWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyMjgxMjQsImV4cCI6MjAxNzgwNDEyNH0.6cQBxjHIewaA59RveaI5SHm20jJqY078af9snfYAiS8";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        apikey: apiKey,
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBnenpqcXd0YmdvZ2ljeWxuaWFyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIyMjgxMjQsImV4cCI6MjAxNzgwNDEyNH0.6cQBxjHIewaA59RveaI5SHm20jJqY078af9snfYAiS8",
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("La solicitud no fue exitosa");
    }

    const datos = response.json();
    return datos;
  } catch (error) {
    console.error("Error", error);
  }
}

function ultimaPartida(datosJSON) {
  let ultimaPartida = null;
  let uid_usuario = localStorage.getItem("uid");

  for (const key in datosJSON) {
    const partida = datosJSON[key];
    if (partida.uid_usuario === uid_usuario) {
      ultimaPartida = partida;
    }
  }
  console.log(ultimaPartida);
  return ultimaPartida;
}

async function cargarPartida() {
  const contenedorDinamico = document.getElementById("contenido-dinamico");
  let arrayJSON = [];
  let partida = [];

  try {
    arrayJSON = await getState();
    console.log("Datos:", arrayJSON.length);
    partida = ultimaPartida(arrayJSON);
    contenedorDinamico.innerHTML = plantillaCargada(partida);
    addImagenesPlantillaCargadas(partida);
    cargarTurnoJugador(partida);
  } catch (error) {
    console.error("Error:", error);
  }
}

/* let arrayJSON = [];
      let partida = [];
      (async () => {
        try {
          arrayJSON = await getState();
          console.log("Datos:", arrayJSON.length);
          partida = ultimaPartida(arrayJSON);
          contenedorDinamico.innerHTML = plantillaCargada(partida);
          addImagenesPlantillaCargadas(partida);
          cargarTurnoJugador(partida);
        } catch (error) {
          console.error("Error:", error);
        }
      })(); */
