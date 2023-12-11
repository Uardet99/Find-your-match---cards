import * as Game from "../src/assets/js/game/gameHelpers.js";
import * as Views from "../src/assets/js/views.js";

describe("TESTING - Funciones Proyecto", function () {
  describe("plantillaTablero()", function () {
    it("Deberia estar definida", function () {
      expect(Game.plantillaTablero()).toBeDefined();
    });
    it("No deberia estar a null", function () {
      expect(Game.plantillaTablero()).not.toBeNull();
    });
    it("Deberia devolver un String", function () {
      expect(Game.plantillaTablero()).toEqual(jasmine.any(String));
    });
    it("Deberia generar un cadena HTML valida", function () {
      const tableroHTML = Game.plantillaTablero();
      const elemento = document.createElement("div");
      elemento.innerHTML = tableroHTML;
      expect(elemento.firstChild).toBeDefined();
    });
  });
  describe("imagenAleatorio()", function () {
    it("Deberia retornar un dato de tipo Array", function () {
      expect(Game.imgAleatoria()).toEqual(jasmine.any(Array));
    });
    it("Deberia retornar un Array de 20 posiciones", function () {
      expect(Game.imgAleatoria().length).toBe(20);
    });
    it("Deberia estar definido", function () {
      expect(Game.imgAleatoria()).toBeDefined();
    });
    it("No deberia estar a null", function () {
      expect(Game.imgAleatoria()).not.toBeNull();
    });
  });
  describe("addImagenesPlantilla()", function () {
    it("Deberia agregar imagenes a todos los elementos", function () {
      Game.addImagenesPlantilla();
      const imagenEnTabla = document.querySelectorAll("td img").length;
      const cantidadElementosTd = document.querySelectorAll("td").length;
      expect(imagenEnTabla).toBe(cantidadElementosTd);
    });
    it("Deberia agregar imagenes con IDs unicos", function () {
      Game.addImagenesPlantilla();
      const idsImagenes = Array.from(document.querySelectorAll("td img"));
      const sonUnicos = new Set(idsImagenes).size === idsImagenes.length;
      expect(sonUnicos).toBe(true);
    });
  });
  describe("reiniciarClick", function () {
    it("Deberia estalecer el argumento 'item' a null", function () {
      let valorInicial = "valor";
      expect(Views.reiniciarClick(valorInicial)).toBeNull();
    });
    it("Deberia funcionar con otro tipos de datos", function () {
      let cadena = "cadena";
      let numero = 5;
      let objeto = { nombre: "Edu" };
      expect(Views.reiniciarClick(cadena)).toBeNull();
      expect(Views.reiniciarClick(numero)).toBeNull();
      expect(Views.reiniciarClick(objeto)).toBeNull();
    });
  });
  
});
