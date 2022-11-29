import { gameArea } from "./gameArea.js";
import { player, collision } from "./player.js";

export { createEnemy, hitEnemy, movementEnemy };

let allEnemies = [
  {
    x: 190,
    y: 0,
    w: 15,
    h: 15,
    id: "enemy1",
    type: "vertical",
    pos: 75,
    vel: 60,
  },
  {
    x: 160,
    y: 0,
    w: 15,
    h: 15,
    id: "enemy2",
    type: "vertical",
    pos: 75,
    vel: -60,
  },
  {
    x: 0,
    y: 0,
    w: 15,
    h: 15,
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
    h: 15,
    id: "enemy4",
    type: "vertical",
    pos: 120,
    vel: 100,
  },
  {
    x: 0,
    y: 280,
    w: 15,
    h: 15,
    id: "enemy5",
    type: "horizontal",
    pos: 150,
    vel: 130,
  },
  {
    x: 0,
    y: 310,
    w: 15,
    h: 15,
    id: "enemy6",
    type: "horizontal",
    pos: 150,
    vel: -130,
  },
  {
    x: 240,
    y: 0,
    w: 15,
    h: 15,
    id: "enemy7",
    type: "vertical",
    pos: 387,
    vel: -20,
  },
  {
    x: 0,
    y: 460,
    w: 15,
    h: 15,
    id: "enemy8",
    type: "horizontal",
    pos: 150,
    vel: 130,
  },
  {
    x: 0,
    y: 490,
    w: 15,
    h: 15,
    id: "enemy9",
    type: "horizontal",
    pos: 150,
    vel: -130,
  },
  {
    x: 120,
    y: 0,
    w: 15,
    h: 15,
    id: "enemy10",
    type: "vertical",
    pos: 567,
    vel: -20,
  },
  {
    x: 245,
    y: 0,
    w: 15,
    h: 15,
    id: "enemy11",
    type: "vertical",
    pos: 120,
    vel: -100,
  },
  {
    x: 335,
    y: 0,
    w: 15,
    h: 15,
    id: "enemy12",
    type: "vertical",
    pos: 170,
    vel: 60,
  },
  {
    x: 365,
    y: 0,
    w: 15,
    h: 15,
    id: "enemy13",
    type: "vertical",
    pos: 170,
    vel: -60,
  },
  {
    x: 0,
    y: 310,
    w: 15,
    h: 15,
    id: "enemy14",
    type: "horizontal",
    pos: 500,
    vel: 100,
  },
  {
    x: 0,
    y: 280,
    w: 15,
    h: 15,
    id: "enemy15",
    type: "horizontal",
    pos: 500,
    vel: -100,
  },
  {
    x: 0,
    y: 0,
    w: 15,
    h: 15,
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
    h: 15,
    id: "enemy17",
    type: "vertical",
    pos: 120,
    vel: -100,
  },
  {
    x: 545,
    y: 0,
    w: 15,
    h: 15,
    id: "enemy18",
    type: "vertical",
    pos: 120,
    vel: 100,
  },
  {
    x: 400,
    y: 0,
    w: 15,
    h: 15,
    id: "enemy19",
    type: "vertical",
    pos: 30,
    vel: -20,
  },
  {
    x: 240,
    y: 0,
    w: 15,
    h: 15,
    id: "enemy20",
    type: "vertical",
    pos: 567,
    vel: -20,
  },
  {
    x: 392,
    y: 0,
    w: 15,
    h: 15,
    id: "enemy21",
    type: "vertical",
    pos: 567,
    vel: -20,
  },
  {
    x: 0,
    y: 0,
    w: 15,
    h: 15,
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
    w: 15,
    h: 15,
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
    w: 15,
    h: 15,
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
    w: 15,
    h: 15,
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
    w: 15,
    h: 15,
    id: "enemy26",
    type: "horizontal",
    pos: 755,
    vel: 20,
  },
  {
    x: 0,
    y: 432,
    w: 15,
    h: 15,
    id: "enemy27",
    type: "horizontal",
    pos: 755,
    vel: 20,
  },
];

//Creamos a todos los enemigos del Array allEnemies[]
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

//Creamos la colision con el jugador
function hitEnemy() {
  for (let i = 0; i < allEnemies.length; i++) {
    if (collision(player, allEnemies[i])) {
      // const enemy = document.getElementById(allEnemies[i].id);
      console.log("hit");
      //Hacer hit cuando el enemigo de al jugador no al reves
    }
  }
}

//movement Enemy : https://jsfiddle.net/qu2Dc/2/
window.requestAnimationFrame(movementEnemy);
//Remplazar los switchers con objetos literales, para mejor lectura de codigo

//Creamos las animaciones de los enemigos, modificando tambien las hitbox
function movementEnemy(t1) {
  for (let i = 0; i < allEnemies.length; i++) {
    let posT, posL;
    switch (allEnemies[i].type) {
      case "vertical":
        const enemyV0 = document.getElementById(allEnemies[i].id);
        posT = allEnemies[i].pos + Math.sin(t1 / 300) * allEnemies[i].vel;
        enemyV0.style.top = posT + "px";
        allEnemies[i].y = posT;
        break;
      case "round":
        const enemyC = document.getElementById(allEnemies[i].id);
        posT = allEnemies[i].posT + Math.cos(t1 / 300) * allEnemies[i].velT;
        posL = allEnemies[i].posL + Math.sin(t1 / 300) * allEnemies[i].velL;
        enemyC.style.left = posT + "px";
        enemyC.style.top = posL + "px";
        allEnemies[i].y = posL;
        allEnemies[i].x = posT;
        break;
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
