// let item = document.createElement("div");

export { item };

const item = [{ x: 0, y: 0, w: 1, h: 1 }];

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomArbitrary(gameArea.w, gameArea.h));
