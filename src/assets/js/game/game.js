import { createTable } from "./gameHelpers.js";
import { startGame } from "./gameLogic.js";

document.addEventListener("DOMContentLoaded", () => {
  let btnJugar = document.getElementById("btn-play");

  /* btnJugar.addEventListener("click", () => {
    createTable();

    startGame();
  }); */
  createTable();

  startGame();
});
