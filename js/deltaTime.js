let deltaTime;
let oldTimeStamp;
let fps;

export { deltaTime };

function gameLoop(timeStamp) {
  deltaTime = (timeStamp - oldTimeStamp) / 10;
  oldTimeStamp = timeStamp;

  fps = Math.round(1 / deltaTime);

  window.requestAnimationFrame(gameLoop);
}

window.requestAnimationFrame(gameLoop);
