export { templateProfile };

// LOCALSTORAGE
// TEMPLATE LITERALS
function templateProfile() {
  let correo = localStorage.getItem("correo");
  let nombreUsuario = correo.split("@")[0];
  return `<div class="profile-container">
  <div class="profile-picture" id="profile-picture">
      <img id="user-image" src="src/assets/img/porDefecto.png" alt="Mi Foto de Perfil">
      <input type="file" id="upload-input" accept="image/*">
      <button id="upload-button">Cambiar Imagen</button>
  </div>
  <div class="profile-info">
      <label for="nombreUsuario">Nombre de Usuario:</label>
      <p id="nombreUsuario">${nombreUsuario}</p>

      <label for="correo">Correo:</label>
      <p id="correo">${correo}</p>
  </div>
</div>`;
}
