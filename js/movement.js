/* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set */
const keysPressed = new Set();
/* Guardamos las teclas que vamos a presionar */
const preventedKeys = new Set([
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  //   "KeyW",
  //   "KeyA",
  //   "KeyS",
  //   "KeyD",
]);

/* Evento saber que teclas pulsamos */
document.addEventListener("keydown", (e) => {
  /* Si preventedKeys tiene las teclas que vamos a pulsar entonces ejecutara
    la funcion de preventDefault()*/

  if (preventedKeys.has(e.code)) {
    e.preventDefault();
  }

  /* Añade en el array los botones pulsados, si los botones son icorrectos 
  los marca como false, si son correctos marca true*/
  keysPressed.add(e.code);
});

/*Eliminar los keyUp del set() */
document.addEventListener("keyup", (e) => {
  keysPressed.delete(e.code);
});

export { keysPressed };
