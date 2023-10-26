import { createTable } from "./gameHelpers.js";
import { startGame } from "./gameLogic.js";

document.addEventListener("DOMContentLoaded", () => {
  createTable();

  startGame();
});
