import { gameArea } from "./gameArea.js";
export { walls };

let walls = [
  { x: 0, y: 70, w: 145, h: 20 },
  { x: 215, y: 0, w: 20, h: 160 },
  { x: 70, y: 160, w: 165, h: 20 },
  { x: 0, y: 250, w: 145, h: 20 },
  { x: 215, y: 250, w: 110, h: 20 },
  { x: 305, y: 0, w: 20, h: 250 },
  { x: 325, y: 70, w: 180, h: 20 },
  { x: 70, y: 340, w: 250, h: 20 },
  { x: 300, y: 360, w: 20, h: 70 },
  { x: 390, y: 340, w: 95, h: 20 },
  { x: 390, y: 360, w: 20, h: 180 },
  { x: 575, y: 70, w: 155, h: 20 },
  { x: 575, y: 160, w: 155, h: 20 },
  { x: 485, y: 90, w: 20, h: 90 },
  { x: 395, y: 160, w: 20, h: 110 },
  { x: 710, y: 90, w: 20, h: 70 },
  { x: 415, y: 250, w: 160, h: 20 },
  { x: 645, y: 250, w: 155, h: 20 },
  { x: 0, y: 430, w: 145, h: 20 },
  { x: 215, y: 430, w: 105, h: 20 },
  { x: 70, y: 520, w: 250, h: 20 },
  { x: 180, y: 540, w: 20, h: 70 },
  { x: 480, y: 540, w: 20, h: 70 },
  { x: 480, y: 520, w: 120, h: 20 },
  { x: 480, y: 430, w: 160, h: 20 },
  { x: 575, y: 0, w: 20, h: 70 },
  { x: 555, y: 340, w: 175, h: 20 },
  { x: 645, y: 270, w: 20, h: 70 },
  { x: 670, y: 520, w: 130, h: 20 },
  { x: 710, y: 430, w: 20, h: 90 },
];

//Show Walls
walls.forEach((item) => {
  let div = document.createElement("div");
  div.style.left = item.x + "px";
  div.style.top = item.y + "px";
  div.style.width = item.w + "px";
  div.style.height = item.h + "px";
  div.style.position = "absolute";
  div.style.backgroundColor = "#646a63";
  gameArea.el.appendChild(div);
});
