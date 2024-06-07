const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class House {
  constructor({ x, y }) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 50;
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
