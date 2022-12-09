import { deltaTime } from "./deltaTime.js";
import { keysPressed } from "./movement.js";
import { gameArea } from "./gameArea.js";
import { walls } from "./walls.js";
import { hitTrash } from "./trashItems.js";
import { hitEnemy } from "./enemies.js";

export { player, collision };
const player = {
  el: document.querySelector("#player"),
  w: document.querySelector("#player").offsetWidth,
  h: document.querySelector("#player").offsetHeight,
  x: 25,
  y: 18,
  speed: 1.8,
  points: 500,

  /* Cada vez que se mueve aplica esta funcion */
  render() {
    this.el.style.left = player.x + "px";
    this.el.style.top = player.y + "px";
  },

  move: {
    ArrowLeft() {
      if (this.x > gameArea.x) {
        this.x -= this.speed * deltaTime;
      }

      if (this.x < gameArea.x) {
        this.x = gameArea.x;
      } else if (gameArea.x + deltaTime > this.x) {
        this.x = gameArea.x;
      }

      for (let i = 0; i < walls.length; i++) {
        if (collision(player, walls[i])) {
          this.x = walls[i].x + walls[i].w;
        }
      }

      hitTrash();
    },
    ArrowDown() {
      if (this.y + this.h < gameArea.h) {
        this.y += this.speed * deltaTime;
      }

      if (this.y + this.h > gameArea.h) {
        this.y = gameArea.h - this.h;
      } else if (gameArea.h - deltaTime < this.y) {
        this.y = gameArea.h;
      }

      for (let i = 0; i < walls.length; i++) {
        if (collision(player, walls[i])) {
          this.y = walls[i].y - this.h;
        }
      }
      hitTrash();
    },
    ArrowUp() {
      if (this.y > gameArea.y) {
        this.y -= this.speed * deltaTime;
      }

      if (this.y < gameArea.y) {
        this.y = gameArea.y;
      } else if (gameArea.y + deltaTime > this.y) {
        this.y = gameArea.y;
      }

      for (let i = 0; i < walls.length; i++) {
        if (collision(player, walls[i])) {
          this.y = walls[i].y + walls[i].h;
        }
      }

      hitTrash();
    },
    ArrowRight() {
      if (this.x + this.w < gameArea.w) {
        this.x += this.speed * deltaTime;
      }

      if (this.x + this.w > gameArea.w) {
        this.x = gameArea.w - this.w;
      } else if (gameArea.w - deltaTime < this.x + this.w) {
        this.x = gameArea.w - this.w;
      }

      for (let i = 0; i < walls.length; i++) {
        if (collision(player, walls[i])) {
          this.x = walls[i].x - this.w;
        }
      }

      hitTrash();
    },
  },

  update(keysPressed) {
    /* Object.entries, devuelve un array con clave: valor de un objeto.
    Utilizamos object.entries para las aciones que son clave : valor 
    Recorremos el objeto y miramos si el boton es igual a que presionamos y
    si existe en el objeto de move  */
    Object.entries(this.move).forEach(([key, movement]) => {
      /* Para ver que estamos moviendo: console.log(`${key} ${movement}`); */
      keysPressed.has(key) && movement.call(this);
    });
  },
};

/* Esta funcion pasara cada vez que movamos el player 
   Hacemos anonima la funcion para nos afectar el scope global(alcance de una 
   variable en el codigo)*/
(function update() {
  /* Enviamos al ordenador que queremos hacer una animación y solicitamos
  que el navegador programe el repintado de la pagina para el proximo 
  ciclo de animación.*/
  requestAnimationFrame(update);
  /* Le enviamos las teclas que presionamos */
  player.update(keysPressed);
  /*Le enviamos lo que queremos que modifique cada vez que nos movamos */
  player.render();
  hitEnemy();
})();

//Colision Player con objetos del mapa
function collision(a, b) {
  //Devuelve false si no colisiona, per si colisiona devuelve true
  return !(
    a.y + a.h <= b.y ||
    a.y >= b.y + b.h ||
    a.x + a.w <= b.x ||
    a.x >= b.x + b.w
  );
}
