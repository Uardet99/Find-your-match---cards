import { saveGame } from "./cartashttps.js";
import { loginSupabase, signUpSupabase, logoutSupabase } from "./http.js";
import { state } from "../game/gameState.js";
import { configurarBotones } from "../views.js";

export { loginUser, isLogged, registerUser, logout, loginWithToken };

function expirationDate(expires_in) {
  return Math.floor(Date.now() / 1000) + expires_in;
}

async function loginUser(email, password) {
  const status = { success: false };
  try {
    const dataLogin = await loginSupabase(email, password);
    console.log(dataLogin);
    localStorage.setItem("access_token", dataLogin.access_token);
    localStorage.setItem("uid", dataLogin.user.id);
    localStorage.setItem("email", dataLogin.user.email);
    localStorage.setItem(
      "expirationDate",
      expirationDate(dataLogin.expires_in)
    );
    status.success = true;
  } catch (err) {
    console.log(err);
    status.success = false;
    status.errorText = err.error_description;
  }

  return status;
}

function loginWithToken(access_token, expires_in) {
  localStorage.setItem("access_token", access_token);
  localStorage.setItem("expirationDate", expirationDate(expires_in));
}

function isLogged() {
  if (localStorage.getItem("access_token")) {
    if (
      localStorage.getItem("expirationDate") > Math.floor(Date.now() / 1000)
    ) {
      return true;
    }
  }
  return false;
}

function registerUser(email, password) {
  const status = { success: false };
  try {
    signUpSupabase(email, password).then((dataRegister) => {
      console.log(dataRegister);
      status.success = true;
    });
  } catch (err) {
    console.log(err);
    status.success = false;
    status.errorText = err.error_description;
  }
  return status;
}

function logout() {
  saveGame(state);
  logoutSupabase(localStorage.getItem("access_token")).then((lOData) => {
    console.log(lOData);
  });
  localStorage.removeItem("access_token");
  localStorage.removeItem("uid");

  configurarBotones("logout");
  /* document.getElementById("btn-play").style.visibility = "hidden";
  document.getElementById("btn-logout").style.visibility = "hidden";
  document.getElementById("btn-profile").style.visibility = "hidden";
  document.getElementById("btn-cargarPartida").style.visibility = "hidden";

  document.getElementById("btn-login").style.visibility = "visible";
  document.getElementById("btn-register").style.visibility = "visible";
 */}
