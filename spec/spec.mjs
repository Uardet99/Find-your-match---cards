import { Jugador } from "../src/assets/js/game/jugador.js";
import * as GameHelpers from "../src/assets/js/game/gameHelpers.js";
import * as Views from "../src/assets/js/views.js";
import * as GameLogic from "../src/assets/js/game/gameLogic.js";
import * as Login from "../src/assets/js/login/loginHelpers.js";
import * as Register from "../src/assets/js/register/registerHelpers.js";
import * as Profile from "../src/assets/js/profile/profileHelpers.js";

describe("TESTING - Funciones Proyecto", function () {
  describe("plantillaTablero()", function () {
    it("Deberia estar definida", function () {
      expect(GameHelpers.plantillaTablero()).toBeDefined();
    });
    it("No deberia estar a null", function () {
      expect(GameHelpers.plantillaTablero()).not.toBeNull();
    });
    it("Deberia devolver un String", function () {
      expect(GameHelpers.plantillaTablero()).toEqual(jasmine.any(String));
    });
    it("Deberia generar un cadena HTML valida", function () {
      const tableroHTML = GameHelpers.plantillaTablero();
      const elemento = document.createElement("div");
      elemento.innerHTML = tableroHTML;
      expect(elemento.firstChild).toBeDefined();
    });
  });
  describe("imagenAleatorio()", function () {
    it("Deberia retornar un dato de tipo Array", function () {
      expect(GameHelpers.imgAleatoria()).toEqual(jasmine.any(Array));
    });
    it("Deberia retornar un Array de 20 posiciones", function () {
      expect(GameHelpers.imgAleatoria().length).toBe(20);
    });
    it("Deberia estar definido", function () {
      expect(GameHelpers.imgAleatoria()).toBeDefined();
    });
    it("No deberia estar a null", function () {
      expect(GameHelpers.imgAleatoria()).not.toBeNull();
    });
  });
  describe("addImagenesPlantilla()", function () {
    it("Deberia agregar imagenes a todos los elementos", function () {
      GameHelpers.addImagenesPlantilla();
      const imagenEnTabla = document.querySelectorAll("td img").length;
      const cantidadElementosTd = document.querySelectorAll("td").length;
      expect(imagenEnTabla).toBe(cantidadElementosTd);
    });
    it("Deberia agregar imagenes con IDs unicos", function () {
      GameHelpers.addImagenesPlantilla();
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

  describe("loginForm()", function () {
    it("Deberia devolver un Elemento (div)", function () {
      expect(Login.loginForm()).toEqual(jasmine.any(Element));
    });
    it("Deberia estar definida", function () {
      expect(Login.loginForm()).toBeDefined();
    });
    it("No deberia estar a null", function () {
      expect(Login.loginForm()).not.toBeNull();
    });
  });

  describe("registerForm()", function () {
    it("Deberia devolver un Elemento (div)", function () {
      expect(Register.registerForm()).toEqual(jasmine.any(Element));
    });
    it("Deberia estar definida", function () {
      expect(Register.registerForm()).toBeDefined();
    });
    it("No deberia estar a null", function () {
      expect(Register.registerForm()).not.toBeNull();
    });
  });
});
