import { House } from "./js/house.js";
import {
  createRoundedRect,
  createOctagon,
  createRect,
  createSquare,
  createCircle,
  isPointContainedWithinShape,
} from "./js/utils.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let WIDTH = 100;
let HEIGHT = 50;
let SIDE = 25;
let RADIUS = 25;

let selectorElem = document.getElementById("selector");
let selectedElem = document.getElementById("selected");
let gameModeElem = document.getElementById("game-mode");
let curModeElem = document.getElementById("cur-mode");

let selector = "archery";
let gameMode = "select-mode";

let houses = [];
let housesBuilt = [];

function changeGameMode(e) {
  gameMode = e.target.id;
  curModeElem.textContent = e.target.textContent;
}

function changeSelector(e) {
  selector = e.target.id;
  // e.target.style.color = "grey";
  selectedElem.textContent = e.target.textContent;
}

selectorElem.addEventListener("click", changeSelector);
gameModeElem.addEventListener("click", changeGameMode);

canvas.addEventListener("click", (e) => {
  if (gameMode == "select-mode") {
    houses.push({ x: e.clientX, y: e.clientY, type: selector });
    housesBuilt.push(new House({ x: e.clientX, y: e.clientY, type: selector }));
    console.log(housesBuilt);
    housesBuilt.forEach((house) => {
      house.draw(ctx);
    });
  } else if (gameMode == "play-mode") {
    let selectPos = { x: e.clientX, y: e.clientY };
    console.log("Point:", selectPos);
    housesBuilt.forEach((house) => {
      if (isPointContainedWithinShape(selectPos, house)) {
        house.selected = "active";
        house.color = "grey";
        house.draw(ctx);
      }
      console.log(house);
    });
  }
});

let playModeMouseDown = false;
let playModeInitialX;
let playModeInitialY;

function animate() {
  requestAnimationFrame(animate);
  if (gameMode == "select-mode") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  housesBuilt.forEach((house) => {
    house.draw(ctx);
  });
}

animate();

addEventListener("mousedown", (e) => {
  if (gameMode == "play-mode") {
    playModeInitialX = e.clientX;
    playModeInitialY = e.clientY;
    playModeMouseDown = true;
  }
});

addEventListener("mousemove", (e) => {
  if (gameMode == "play-mode" && playModeMouseDown == true) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(playModeInitialX, playModeInitialY, e.clientX, e.clientY);
  }
});

addEventListener("mouseup", (e) => {
  if (gameMode == "play-mode") {
    playModeMouseDown = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

// Keyboard Mode change
addEventListener("keydown", (e) => {
  switch (e.key) {
    case "1":
      gameMode = "select-mode";
      curModeElem.textContent = "Select Mode";
      break;
    case "2":
      gameMode = "play-mode";
      curModeElem.textContent = "Play Mode";
      break;
    case "!":
      selector = "town-center";
      selectedElem.textContent = "Town Center";
      break;
    case "@":
      selector = "barrack";
      selectedElem.textContent = "Barrack";
      break;
    case "#":
      selector = "stable";
      selectedElem.textContent = "Stable";
      break;
    case "$":
      selector = "archery";
      selectedElem.textContent = "Archery";
      break;
    case "%":
      selector = "siege";
      selectedElem.textContent = "Siege";
      break;
  }
});
