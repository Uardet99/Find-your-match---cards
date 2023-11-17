export function register() {
  let contenedorDinamico = document.getElementById("contenido-dinamico");

  let btn_register = document.getElementById("btn-register");

  contenedorDinamico.innerHTML = plantillaRegistro();
}

function plantillaRegistro() {
  return `<div class="register-container">
    <div class="register-form-container">
        <h1 class="register-form-title">Registrarse</h1>
        <form>
            <div class="register-form-group">
                <label class="register-form-label" for="nombre">Nombre:</label>
                <input class="register-form-input" type="text" id="nombre" name="nombre" required>
            </div>
            <div class="register-form-group">
                <label class="register-form-label" for="email">Correo Electrónico:</label>
                <input class="register-form-input" type="email" id="email" name="email" required>
            </div>
            <div class="register-form-group">
                <label class="register-form-label" for="contrasena">Contraseña:</label>
                <input class="register-form-input" type="password" id="contrasena" name="contrasena" required>
            </div>
            <button class="register-form-button" type="submit">Registrarse</button>
        </form>
    </div>
</div>`;
}
