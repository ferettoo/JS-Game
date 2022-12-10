export { interfaceGame, showInterface };

let interfaceGame = {
  interface: document.querySelector("#interfaceGame"),
  interfacePoints: document.createElement("p"),
  points: 500,
};

function showInterface() {
  interfaceGame.interfacePoints.innerText = "Score: " + interfaceGame.points;
  interfaceGame.interface.appendChild(interfaceGame.interfacePoints);

  if (interfaceGame.points <= 0) {
    console.log("You lose");
  }
}

showInterface();
