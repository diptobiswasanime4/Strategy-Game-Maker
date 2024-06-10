import {
  createRoundedRect,
  createOctagon,
  createRect,
  createSquare,
  createCircle,
} from "./utils.js";

let WIDTH = 100;
let HEIGHT = 50;
let SIDE = 25;
let RADIUS = 25;

export class House {
  constructor({ x, y, type }) {
    this.x = x;
    this.y = y;
    this.width = WIDTH;
    this.height = HEIGHT;
    this.side = SIDE;
    this.radius = RADIUS;
    this.type = type;
    this.id = `${this.type}-${Math.floor(Math.random() * 1000 + 1)}`;
    this.selected = "NA";
    this.color = "black";
  }

  draw(ctx) {
    if (this.type == "town-center") {
      createOctagon(this.x, this.y, this.color, ctx);
    } else if (this.type == "barrack") {
      createRect(this.x, this.y, this.color, ctx);
    } else if (this.type == "stable") {
      createRoundedRect(this.x, this.y, this.color, ctx);
    } else if (this.type == "archery") {
      createSquare(this.x, this.y, this.color, ctx);
    } else if (this.type == "siege") {
      createCircle(this.x, this.y, this.color, ctx);
    }
  }
}
