import {
  createRoundedRect,
  createOctagon,
  createRect,
  createSquare,
  createCircle,
} from "./utils.js";

let WIDTH = 100;
let HEIGHT = 50;
let RADIUS = 25;

export class House {
  constructor({ x, y, type }) {
    this.x = x;
    this.y = y;
    this.width = WIDTH;
    this.height = HEIGHT;
    this.type = type;
    this.selected = "NA";
  }

  draw(ctx) {
    if (this.type == "town-center") {
      createOctagon(this.x, this.y, ctx);
    } else if (this.type == "barrack") {
      createRect(this.x, this.y, ctx);
    } else if (this.type == "stable") {
      createRoundedRect(this.x, this.y, ctx);
    } else if (this.type == "archery") {
      createSquare(this.x, this.y, ctx);
    } else if (this.type == "siege") {
      createCircle(this.x, this.y, ctx);
    }
  }
}
