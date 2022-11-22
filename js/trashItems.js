// let item = document.createElement("div");

// export { item };

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomArbitrary(gameArea.w, gameArea.h));
