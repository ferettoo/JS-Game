import { gameArea } from "./gameArea.js";

export { createEnemy };

let allEnemies = [
  { x: 190, y: 10, w: 15, h: 15, id: 1 },
  { x: 160, y: 135, w: 15, h: 15, id: 2 },
];

function createEnemy() {
  allEnemies.forEach((enemy) => {
    let newEnemy = document.createElement("div");
    newEnemy.id = enemy.id;
    newEnemy.style.left = enemy.x + "px";
    newEnemy.style.top = enemy.y + "px";
    newEnemy.style.width = enemy.w + "px";
    newEnemy.style.height = enemy.h + "px";
    newEnemy.style.position = "absolute";
    newEnemy.style.backgroundColor = "red";
    gameArea.el.appendChild(newEnemy);
  });
}
