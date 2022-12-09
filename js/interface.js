// export { showPointsInterface, points };

let points = 500; // Para la primero impresión

let interfaceGame = document.querySelector("#interfaceGame");

const showPoints = document.createElement("p");

showPoints.innerText = "Score: " + points;

interfaceGame.appendChild(showPoints);

//Muestra en la interfaz el Score
// function showPointsInterface(points) {
//   showPoints.innerText = "Score: " + points;
//   interfaceGame.appendChild(showPoints);
// }
