export { loginForm };
import { loginUser } from "../comon/users.js";

export function login() {
  let contenedorDinamico = document.getElementById("contenido-dinamico");
  contenedorDinamico.innerHTML = plantillaLogin();
  obtenerDatosLogin();
}

function obtenerDatosLogin() {
  let boton_login = document.getElementById("btn-iniciarSesion");
  boton_login.addEventListener("click", () => {
    let correoUsuario = document.getElementById("campoUsuario").value;
    let passwordUsuario = document.getElementById("campoContrasena").value;
    console.log(correoUsuario);
    console.log(passwordUsuario);
  });
}

function plantillaLogin() {
  return `<div class="login-container">
  <div class="form-container">
      <h1 class="form-title">Iniciar Sesión</h1>
      <form>
          <div class="form-group">
              <label class="form-label" for="usuario">Usuario:</label>
              <input class="form-input" type="text" id="campoUsuario" name="usuario" required>
          </div>
          <div class="form-group">
              <label class="form-label" for="contrasena">Contraseña:</label>
              <input class="form-input" type="password" id="campoContrasena" name="contrasena" required>
          </div>
          <button id="btn-iniciarSesion" class="form-button" type="submit">Iniciar Sesión</button>
      </form>
  </div>
</div>`;
}

function loginForm() {
  const divLogin = document.createElement("div");
  divLogin.classList.add("formulari_centrat");

  divLogin.innerHTML = `  <form>
  <div class="mb-3">
    <label for="loginpassword" class="form-label">Email address</label>
    <input type="email" class="form-control" id="loginemail" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="loginpassword" class="form-label">Password</label>
    <input type="password" class="form-control" id="loginpassword">
  </div>
  <a href="#" id="forgotPassword">I forgot my password</a>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="remember">
    <label class="form-check-label" for="remember">Remember</label>
  </div>
  <button type="submit" id="loginbutton" class="btn btn-primary">Submit</button>
  <div id="errors"></div>
  </form>`;

  divLogin
    .querySelector("#loginbutton")
    .addEventListener("click", async (event) => {
      event.preventDefault();
      const email = divLogin.querySelector("#loginemail").value;
      const password = divLogin.querySelector("#loginpassword").value;
      loginUser(email, password).then((status) => {
        if (status.success) {
          // Para mostrar los botones
          document.getElementById("btn-play").style.visibility = "visible";
          document.getElementById("btn-logout").style.visibility = "visible";
          document.getElementById("btn-profile").style.visibility = "visible";

          localStorage.setItem("correo", email);
          window.location.hash = "#/jugar";
        } else {
          divLogin.querySelector("#errors").innerHTML = status.errorText;
        }
      });
    });

  divLogin
    .querySelector("#forgotPassword")
    .addEventListener("click", (event) => {
      event.preventDefault();
      const email = divLogin.querySelector("#loginemail").value;
      forgotPassword(email);
      event.target.parentElement.append("You have an Email");
    });

  return divLogin;
}
