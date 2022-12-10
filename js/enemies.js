import { gameArea } from "./gameArea.js";
import { interfaceGame, showInterface } from "./interface.js";
import { player, collision } from "./player.js";
export { createEnemy, hitEnemy, allEnemies };

let allEnemies = [
  {
    x: 190,
    y: 0,
    w: 15,
    h: 33,
    id: "enemy1",
    type: "vertical",
    pos: 60,
    vel: 50,
  },
  {
    x: 160,
    y: 0,
    w: 15,
    h: 33,
    id: "enemy2",
    type: "vertical",
    pos: 60,
    vel: -50,
  },
  {
    x: 0,
    y: 0,
    w: 13,
    h: 13,
    id: "enemy3",
    type: "round",
    posT: 350,
    posL: 300,
    velT: 30,
    velL: 40,
  },
  {
    x: 280,
    y: 0,
    w: 15,
    h: 33,
    id: "enemy4",
    type: "vertical",
    pos: 105,
    vel: 90,
  },
  {
    x: 0,
    y: 280,
    w: 30,
    h: 21,
    id: "enemy5",
    type: "horizontal",
    pos: 130,
    vel: 115,
  },
  {
    x: 0,
    y: 310,
    w: 30,
    h: 21,
    id: "enemy6",
    type: "horizontal",
    pos: 130,
    vel: -115,
  },
  {
    x: 240,
    y: 0,
    w: 15,
    h: 20,
    id: "enemy7",
    type: "vertical",
    pos: 385,
    vel: -15,
  },
  {
    x: 0,
    y: 460,
    w: 30,
    h: 21,
    id: "enemy8",
    type: "horizontal",
    pos: 150,
    vel: 130,
  },
  {
    x: 0,
    y: 490,
    w: 30,
    h: 21,
    id: "enemy9",
    type: "horizontal",
    pos: 150,
    vel: -130,
  },
  {
    x: 120,
    y: 0,
    w: 15,
    h: 20,
    id: "enemy10",
    type: "vertical",
    pos: 567,
    vel: -15,
  },
  {
    x: 245,
    y: 0,
    w: 15,
    h: 33,
    id: "enemy11",
    type: "vertical",
    pos: 105,
    vel: -90,
  },
  {
    x: 0,
    y: 310,
    w: 30,
    h: 21,
    id: "enemy14",
    type: "horizontal",
    pos: 500,
    vel: 90,
  },
  {
    x: 0,
    y: 280,
    w: 30,
    h: 21,
    id: "enemy15",
    type: "horizontal",
    pos: 500,
    vel: -90,
  },
  {
    x: 0,
    y: 0,
    w: 13,
    h: 13,
    id: "enemy16",
    type: "round",
    posT: 550,
    posL: 430,
    velT: 130,
    velL: 50,
  },
  {
    x: 515,
    y: 0,
    w: 15,
    h: 33,
    id: "enemy17",
    type: "vertical",
    pos: 110,
    vel: -90,
  },
  {
    x: 545,
    y: 0,
    w: 15,
    h: 33,
    id: "enemy18",
    type: "vertical",
    pos: 110,
    vel: 90,
  },
  {
    x: 400,
    y: 0,
    w: 15,
    h: 20,
    id: "enemy19",
    type: "vertical",
    pos: 26,
    vel: -16,
  },
  {
    x: 240,
    y: 0,
    w: 15,
    h: 20,
    id: "enemy20",
    type: "vertical",
    pos: 567,
    vel: -15,
  },
  {
    x: 392,
    y: 0,
    w: 15,
    h: 20,
    id: "enemy21",
    type: "vertical",
    pos: 567,
    vel: -15,
  },
  {
    x: 0,
    y: 0,
    w: 13,
    h: 13,
    id: "enemy22",
    type: "round",
    posT: 627,
    posL: 555,
    velT: 30,
    velL: 40,
  },
  {
    x: 0,
    y: 0,
    w: 13,
    h: 13,
    id: "enemy23",
    type: "round",
    posT: 757,
    posL: 125,
    velT: 25,
    velL: 100,
  },
  {
    x: 0,
    y: 0,
    w: 13,
    h: 13,
    id: "enemy24",
    type: "round",
    posT: 350,
    posL: 300,
    velT: -30,
    velL: -40,
  },
  {
    x: 0,
    y: 0,
    w: 13,
    h: 13,
    id: "enemy25",
    type: "round",
    posT: 550,
    posL: 430,
    velT: -130,
    velL: -50,
  },
  {
    x: 0,
    y: 342,
    w: 30,
    h: 21,
    id: "enemy26",
    type: "horizontal",
    pos: 750,
    vel: 20,
  },
  {
    x: 0,
    y: 432,
    w: 30,
    h: 21,
    id: "enemy27",
    type: "horizontal",
    pos: 750,
    vel: 20,
  },
];

//Creamos a todos los enemigos del Array allEnemies[]
function createEnemy() {
  allEnemies.forEach((enemy) => {
    let newEnemy = document.createElement("div");
    newEnemy.id = enemy.id;
    newEnemy.style.left = enemy.x + "px";
    newEnemy.style.top = enemy.y + "px";
    newEnemy.style.width = enemy.w + "px";
    newEnemy.style.height = enemy.h + "px";
    newEnemy.style.position = "absolute";
    switch (enemy.type) {
      case "vertical":
        newEnemy.style.backgroundImage = "url('../media/car1.png')";
        break;
      case "horizontal":
        newEnemy.style.backgroundImage = "url('../media/car2.png')";
        break;
      case "round":
        newEnemy.style.backgroundImage = "url('../media/ball.png')";
        break;
    }
    newEnemy.style.backgroundSize = "contain";
    newEnemy.style.backgroundRepeat = "no-repeat";
    gameArea.el.appendChild(newEnemy);
  });
}

//Creamos la colision con el jugador
function hitEnemy() {
  for (let i = 0; i < allEnemies.length; i++) {
    // console.log(collision(player, allEnemies[i]));
    if (collision(player, allEnemies[i])) {
      //Reinicia al jugador cada vez que le da un enemigo.
      player.x = 25;
      player.y = 18;
      //Restar puntos
      interfaceGame.points -= 50;
      showInterface();
    }
  }
}

//movement Enemy : https://jsfiddle.net/qu2Dc/2/
window.requestAnimationFrame(movementEnemy);

//Creamos las animaciones de los enemigos, modificando tambien las hitbox
function movementEnemy(t1) {
  for (let i = 0; i < allEnemies.length; i++) {
    let posT, posL;
    switch (allEnemies[i].type) {
      // Vertical enemies
      case "vertical":
        const enemyV0 = document.getElementById(allEnemies[i].id);
        posT = allEnemies[i].pos + Math.sin(t1 / 300) * allEnemies[i].vel;
        enemyV0.style.top = posT + "px";
        allEnemies[i].y = posT;
        break;
      //Round enemies
      case "round":
        const enemyC = document.getElementById(allEnemies[i].id);
        posT = allEnemies[i].posT + Math.cos(t1 / 300) * allEnemies[i].velT;
        posL = allEnemies[i].posL + Math.sin(t1 / 300) * allEnemies[i].velL;
        enemyC.style.left = posT + "px";
        enemyC.style.top = posL + "px";
        allEnemies[i].y = posL;
        allEnemies[i].x = posT;
        break;
      // Horizontal enemies
      case "horizontal":
        const enemyH0 = document.getElementById(allEnemies[i].id);
        posL = allEnemies[i].pos + Math.cos(t1 / 300) * allEnemies[i].vel;
        enemyH0.style.left = posL + "px";
        allEnemies[i].x = posL;
        break;
      default:
        break;
    }
  }
  window.requestAnimationFrame(movementEnemy);
}
