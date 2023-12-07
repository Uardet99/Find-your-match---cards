export function login() {
  let contenedorDinamico = document.getElementById("contenido-dinamico");

  const btn_login = document.getElementById("btn-login");

  contenedorDinamico.innerHTML = plantillaLogin();

  let nombreUsuario = document.getElementById("usuario");
  console.log(nombreUsuario);
}

function plantillaLogin() {
  return `<div class="login-container">
  <div class="form-container">
      <h1 class="form-title">Iniciar Sesión</h1>
      <form>
          <div class="form-group">
              <label class="form-label" for="usuario">Usuario:</label>
              <input class="form-input" type="text" id="usuario" name="usuario" required>
          </div>
          <div class="form-group">
              <label class="form-label" for="contrasena">Contraseña:</label>
              <input class="form-input" type="password" id="contrasena" name="contrasena" required>
          </div>
          <button class="form-button" type="submit">Iniciar Sesión</button>
      </form>
  </div>
</div>`;
}
