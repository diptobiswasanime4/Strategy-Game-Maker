const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let WIDTH = 100;
let HEIGHT = 50;

let selectorElem = document.getElementById("selector");
let selectedElem = document.getElementById("selected");

let selector;

selectorElem.addEventListener("click", (e) => {
  selector = e.target.id;
  // e.target.style.color = "grey";
  selectedElem.textContent = e.target.textContent;
});

class House {
  constructor({ x, y }) {
    this.x = x;
    this.y = y;
    this.width = WIDTH;
    this.height = HEIGHT;
  }

  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

let houses = [];

addEventListener("click", (e) => {
  houses.push({ x: e.clientX, y: e.clientY });
});

houses.forEach((house) => {
  new House({ x: house.x, y: house.y });
});

function createRoundedSquare(x, y, ctx) {
  let w = WIDTH - 20;
  let h = HEIGHT - 20;
  let radius = 10;

  ctx.beginPath();
  ctx.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 1.5);
  ctx.arc(x + radius + w, y + radius, radius, Math.PI * 1.5, Math.PI * 2);
  ctx.arc(
    x + WIDTH - radius,
    y + radius + h,
    radius,
    Math.PI * 0,
    Math.PI * 0.5
  );
  ctx.arc(x + radius, y + HEIGHT - radius, radius, Math.PI * 0.5, Math.PI);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

createRoundedSquare(50, 50, ctx);
createRoundedSquare(250, 250, ctx);
