import { gameArea } from "./gameArea.js";
// import { showPointsInterface, points } from "./interface.js";
import { player, collision } from "./player.js";

export { trash, hitTrash };

let glass = [
  { x: 336, y: 20, w: 30, h: 30, id: 1 },
  { x: 685, y: 105, w: 30, h: 30, id: 2 },
  { x: 610, y: 20, w: 30, h: 30, id: 3 },
];

let batteries = [
  { x: 675, y: 285, w: 30, h: 30, id: 4 },
  { x: 750, y: 470, w: 30, h: 30, id: 5 },
  { x: 515, y: 565, w: 30, h: 30, id: 6 },
];

let plastic = [
  { x: 210, y: 560, w: 30, h: 30, id: 7 },
  { x: 145, y: 560, w: 30, h: 30, id: 8 },
  { x: 260, y: 380, w: 30, h: 30, id: 9 },
  { x: 25, y: 335, w: 30, h: 30, id: 10 },
];

let paper = [
  { x: 253, y: 10, w: 30, h: 30, id: 11 },
  { x: 343, y: 295, w: 30, h: 30, id: 12 },
  { x: 420, y: 370, w: 30, h: 30, id: 13 },
  { x: 22, y: 160, w: 30, h: 30, id: 14 },
];

var trash = [glass, batteries, plastic, paper];

glass.forEach((trash) => {
  let newItem = document.createElement("div");
  newItem.id = trash.id;
  newItem.style.left = trash.x + "px";
  newItem.style.top = trash.y + "px";
  newItem.style.width = trash.w + "px";
  newItem.style.height = trash.h + "px";
  newItem.style.position = "absolute";
  newItem.style.backgroundImage = "url('../media/glass.png')";
  newItem.style.backgroundSize = "contain";
  newItem.style.backgroundRepeat = "no-repeat";
  gameArea.el.appendChild(newItem);
});

plastic.forEach((trash) => {
  let newItem = document.createElement("div");
  newItem.id = trash.id;
  newItem.style.left = trash.x + "px";
  newItem.style.top = trash.y + "px";
  newItem.style.width = trash.w + "px";
  newItem.style.height = trash.h + "px";
  newItem.style.position = "absolute";
  newItem.style.backgroundImage = "url('../media/plastic.png')";
  newItem.style.backgroundSize = "contain";
  newItem.style.backgroundRepeat = "no-repeat";
  gameArea.el.appendChild(newItem);
});

paper.forEach((trash) => {
  let newItem = document.createElement("div");
  newItem.id = trash.id;
  newItem.style.left = trash.x + "px";
  newItem.style.top = trash.y + "px";
  newItem.style.width = trash.w + "px";
  newItem.style.height = trash.h + "px";
  newItem.style.position = "absolute";
  newItem.style.backgroundImage = "url('../media/paper.png')";
  newItem.style.backgroundSize = "contain";
  newItem.style.backgroundRepeat = "no-repeat";
  gameArea.el.appendChild(newItem);
});

//Creo la basura en pantalla

batteries.forEach((trash) => {
  let newItem = document.createElement("div");
  newItem.id = trash.id;
  newItem.style.left = trash.x + "px";
  newItem.style.top = trash.y + "px";
  newItem.style.width = trash.w + "px";
  newItem.style.height = trash.h + "px";
  newItem.style.position = "absolute";
  newItem.style.backgroundImage = "url('../media/batteries.png')";
  newItem.style.backgroundSize = "contain";
  newItem.style.backgroundRepeat = "no-repeat";
  gameArea.el.appendChild(newItem);
});

function hitTrash() {
  trash.forEach((x) => {
    for (let i = 0; i < x.length; i++) {
      if (collision(player, x[i])) {
        console.log(x[i].id);
        const pickTrash = document.getElementById(x[i].id);
        pickTrash.remove();
        x.splice(i, 1);
        //funcion de ganar puntos

        // points += 50;
        // showPointsInterface(points);
      }
    }
  });
}

// const newBatteries = [
//   { x: 675, y: 295, w: 10, h: 10 },
//   { x: 760, y: 500, w: 10, h: 10 },
//   { x: 510, y: 570, w: 10, h: 10 },
// ].map((items) => {
//   let newItem = document.createElement("div"); // p tag might be better suited for trash
//   newItem.textContent = items; // for items only, use textContent
//   return newItem;
// });

// console.log(trash);

// // document.body.append(trash); // append all in one function call
