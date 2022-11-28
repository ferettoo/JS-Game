import { gameArea } from "./gameArea.js";
import { player, collision } from "./player.js";

export { createEnemy, hitEnemy, movementEnemy };

let allEnemies = [
  { x: 190, y: 10, w: 15, h: 15, id: "enemy1" },
  { x: 160, y: 135, w: 15, h: 15, id: "enemy2" },
];

function createEnemy() {
  allEnemies.forEach((enemy) => {
    let newEnemy = document.createElement("div");
    newEnemy.id = enemy.id;
    // newEnemy.classList.add("enemies");
    newEnemy.style.left = enemy.x + "px";
    newEnemy.style.top = enemy.y + "px";
    newEnemy.style.width = enemy.w + "px";
    newEnemy.style.height = enemy.h + "px";
    newEnemy.style.position = "absolute";
    newEnemy.style.backgroundColor = "red";
    gameArea.el.appendChild(newEnemy);
  });
}

function hitEnemy() {
  for (let i = 0; i < allEnemies.length; i++) {
    if (collision(player, allEnemies[i])) {
      const enemy = document.getElementById(allEnemies[i].id);
      console.log("hit");
    }
  }
}

function movementEnemy() {
  let id = null;
  const enemy = document.getElementById(allEnemies[0].id);
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 1);
  function frame() {
    if (pos === 100) {
      clearInterval(id);
    } else {
      pos++;
      enemy.style.top = pos + "px";
      allEnemies[0].y = pos;
    }
  }
  // for (let i = 0; i < allEnemies.length; i++) {
  //   let id = null;
  //   const enemy = document.getElementById(allEnemies[i].id);
  //   let position = enemy.style.top;
  //   clearInterval(id);
  //   id = setInterval(frame, 5);
  //   function frame() {
  //     if (position == 130) {
  //       clearInterval(id);
  //     } else {
  //       enemy.style.top = position + "px";
  //     }
  //   }
  // }
}

// Actualizar la posicion del enemigo.
//mover al enemigo cuando hacemos la animacion.
//
