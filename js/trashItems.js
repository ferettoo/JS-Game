import { gameArea } from "./gameArea.js";
import { player, collision } from "./player.js";
export { trash, hitTrash };

let glass = [
  { x: 335, y: 30, w: 10, h: 10 },
  { x: 690, y: 120, w: 10, h: 10 },
  { x: 605, y: 30, w: 10, h: 10 },
];

let batteries = [
  { x: 675, y: 295, w: 10, h: 10 },
  { x: 760, y: 500, w: 10, h: 10 },
  { x: 510, y: 570, w: 10, h: 10 },
];

let plastic = [
  { x: 210, y: 570, w: 10, h: 10 },
  { x: 160, y: 570, w: 10, h: 10 },
  { x: 280, y: 390, w: 10, h: 10 },
  { x: 30, y: 345, w: 10, h: 10 },
];

let paper = [
  { x: 265, y: 10, w: 10, h: 10 },
  { x: 350, y: 295, w: 10, h: 10 },
  { x: 420, y: 370, w: 10, h: 10 },
  { x: 30, y: 165, w: 10, h: 10 },
];

var trash = [glass, batteries, plastic, paper];

glass.forEach((trash) => {
  let newItem = document.createElement("div");
  newItem.style.left = trash.x + "px";
  newItem.style.top = trash.y + "px";
  newItem.style.width = trash.w + "px";
  newItem.style.height = trash.h + "px";
  newItem.style.position = "absolute";
  newItem.style.backgroundColor = "green";
  gameArea.el.appendChild(newItem);
  newItem.remove;
});

plastic.forEach((trash) => {
  let newItem = document.createElement("div");
  newItem.style.left = trash.x + "px";
  newItem.style.top = trash.y + "px";
  newItem.style.width = trash.w + "px";
  newItem.style.height = trash.h + "px";
  newItem.style.position = "absolute";
  newItem.style.backgroundColor = "#fdc500";
  gameArea.el.appendChild(newItem);
});

paper.forEach((trash) => {
  let newItem = document.createElement("div");
  newItem.style.left = trash.x + "px";
  newItem.style.top = trash.y + "px";
  newItem.style.width = trash.w + "px";
  newItem.style.height = trash.h + "px";
  newItem.style.position = "absolute";
  newItem.style.backgroundColor = "#003566";
  gameArea.el.appendChild(newItem);
});

//Creo la basura en pantalla
batteries.forEach((trash) => {
  let newBatterie = document.createElement("div");
  newBatterie.style.left = trash.x + "px";
  newBatterie.style.top = trash.y + "px";
  newBatterie.style.width = trash.w + "px";
  newBatterie.style.height = trash.h + "px";
  newBatterie.style.position = "absolute";
  newBatterie.style.backgroundColor = "#ca6702";
  gameArea.el.appendChild(newBatterie);
});

function hitTrash() {
  trash.forEach((x) => {
    for (let i = 0; i < x.length; i++) {
      if (collision(player, x[i])) {
        var elementDeleted = x.splice(i, 1);
        elementDeleted.remove;

        console.log(elementDeleted);
        //funcion de ganar puntos
        //hacer desaparecer el div
      }
    }
  });
}
