import { player } from "./player.js";

export { gameArea, collision, walls };

const gameArea = {
  el: document.querySelector("#gameArea"),
  w: document.querySelector("#gameArea").offsetWidth,
  h: document.querySelector("#gameArea").offsetHeight,
  x: 0,
  y: 0,
};

let walls = [
  { x: 0, y: 50, w: 145, h: 20 },
  { x: 50, y: 125, w: 170, h: 20 },
  { x: 200, y: 0, w: 20, h: 125 },
  { x: 0, y: 200, w: 145, h: 20 },
  { x: 200, y: 200, w: 100, h: 20 },
];

//Añade en gameArea las pad
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

function collision(a, b) {
  return (
    a.y + a.h <= b.y || a.y >= b.y + b.h || a.x + a.w <= b.x || a.x >= b.x + b.w
  );
}

// https://www.youtube.com/watch?v=TZsf1zlDRic
