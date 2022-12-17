import { crearCookie } from "./cookie.js";

export { interfaceGame, showInterface, showWin };

let interfaceGame = {
  interface: document.querySelector("#interfaceGame"),
  interfacePoints: document.createElement("p"),
  points: 500,
};

//DateTime cookie
const juego = "juego";
let today = new Date();
let date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
let time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date + " " + time; //Aquesta variable emmagatzema la data actual i hora (fecha)

let showLose = false;
var temps = 0;
let cronometre = setInterval(() => {
  //Emmagatzarem el set interval en aquesta variable cronometre, per poder-lo parar quan ho desitjem.
  temps++;
  document.getElementById("temps").innerText = "Time: " + temps;
}, 1000);

function showWin() {
  clearInterval(cronometre);

  let winMessage = document.createElement("h2");
  let textWinMessage = document.createTextNode("| HAS GANADO | ");

  let leaveGame = document.createElement("a");
  let textBtn = document.createTextNode("Salir");
  leaveGame.href = "../UI/menu.html";

  leaveGame.appendChild(textBtn);
  winMessage.appendChild(textWinMessage);
  interfaceGame.interface.appendChild(winMessage);
  interfaceGame.interface.appendChild(leaveGame);

  console.log(interfaceGame.points);

  //Mandar esto a la cookie
  let estadistiques = {
    idJuego: 2,
    temps: temps,
    punts: interfaceGame.points,
    dataHora: dateTime,
  };

  crearCookie(juego, JSON.stringify(estadistiques));
}

function showInterface() {
  if (interfaceGame.points <= 0 && !showLose) {
    showLose = true;
    clearInterval(cronometre);
    let loseMessage = document.createElement("h2");
    let leaveGame = document.createElement("a");
    let text = document.createTextNode("Salir");

    leaveGame.appendChild(text);
    leaveGame.href = "../UI/menu.html";

    loseMessage.innerText = "| HAS PERDIDO | ";
    interfaceGame.interface.appendChild(loseMessage);
    interfaceGame.interface.appendChild(leaveGame);
  }

  interfaceGame.interfacePoints.innerText = "Score: " + interfaceGame.points;
  interfaceGame.interface.appendChild(interfaceGame.interfacePoints);
}

let timer = document.createElement("div");
timer.id = "temps";
interfaceGame.interface.appendChild(timer);

interfaceGame.interfacePoints.innerText = "Score: " + interfaceGame.points;
interfaceGame.interface.appendChild(interfaceGame.interfacePoints);
