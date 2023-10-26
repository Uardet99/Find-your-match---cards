export class Jugador {
  // Constructor de la clase
  constructor(nombre) {
    this.nombre = nombre;
    this.puntos = 0;
  }

  // Metodo para agregar puntos
  agregarPuntos(cantidad) {
    this.puntos = cantidad;
  }

  // Metodo para obtener puntos
  obtenerPuntos() {
    return this.puntos;
  }
}
