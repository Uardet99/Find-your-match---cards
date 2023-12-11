export function register() {
  let contenedorDinamico = document.getElementById("contenido-dinamico");
  contenedorDinamico.innerHTML = plantillaRegistro();
  obtenerDatosRegistro();
}

function obtenerDatosRegistro() {
  let boton_registro = document.getElementById("btn-registrarse");
  boton_registro.addEventListener("click", () => {
    let correo = document.getElementById("email").value;
    let password = document.getElementById("contrasena").value;
    console.log(correo);
    console.log(password);
  });
}


function plantillaRegistro() {
  return `<div class="register-container">
    <div class="register-form-container">
        <h1 class="register-form-title">Registrarse</h1>
        <form id="registro-form">
            <div class="register-form-group">
                <label class="register-form-label" for="email">Correo Electrónico:</label>
                <input class="register-form-input" type="email" id="email" name="email" required>
            </div>
            <div class="register-form-group">
                <label class="register-form-label" for="contrasena">Contraseña:</label>
                <input class="register-form-input" type="password" id="contrasena" name="contrasena" required>
            </div>
            <div class="register-form-group">
                <label class="register-form-label" for="contrasena">Repetir Contraseña:</label>
                <input class="register-form-input" type="password" id="repetirContrasena" name="repetirContrasena" required>
            </div>
            <button id="btn-registrarse" class="register-form-button" type="submit">Registrarse</button>
        </form>
    </div>
</div>`;
}

import { registerUser } from "../comon/users.js";

export { registerForm };

function registerForm() {
  const divLogin = document.createElement("div");
  divLogin.classList.add("formulari_centrat");
  divLogin.innerHTML = `  <form>
    <div class="mb-3">
      <label for="signupemail" class="form-label">Email address</label>
      <input type="email" class="form-control" id="signupemail" aria-describedby="emailHelp">
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="signuppassword" class="form-label">Password</label>
      <input type="password" class="form-control" id="signuppassword">
      <label for="signuppassword2" class="form-label">Repeat Password</label>
      <input type="password" class="form-control" id="signuppassword2">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="remember">
      <label class="form-check-label" for="remember">Remember</label>
    </div>
    <button type="submit" id="signupbtn" class="btn btn-primary">Submit</button>
    <div id="errors"></div>
    </form>`;

  divLogin
    .querySelector("#signupbtn")
    .addEventListener("click", async (event) => {
      event.preventDefault();
      const email = divLogin.querySelector("#signupemail").value;
      const password = divLogin.querySelector("#signuppassword").value;
      const dataLogin = await registerUser(email, password);
      console.log(dataLogin);
      window.location.hash = "#/login";
    });

  return divLogin;
}
