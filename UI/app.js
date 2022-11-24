import { gameArea } from "../js/gameArea.js";
import { walls } from "../js/walls.js";
import { trash } from "../js/trashItems.js";
import { player } from "../js/player.js";

const newBatteries = [
  { x: 675, y: 295, w: 10, h: 10 },
  { x: 760, y: 500, w: 10, h: 10 },
  { x: 510, y: 570, w: 10, h: 10 },
].map((items) => {
  let newItem = document.createElement("div"); // p tag might be better suited for trash
  newItem.textContent = items; // for items only, use textContent
  return newItem;
});

console.log(trash);

// document.body.append(trash); // append all in one function call
