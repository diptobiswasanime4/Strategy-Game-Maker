let WIDTH = 100;
let HEIGHT = 50;
let RADIUS = 25;

export function createRoundedRect(x, y, ctx) {
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

export function createOctagon(x, y, ctx) {
  let gap = 10;
  let side = HEIGHT - 2 * gap;

  ctx.beginPath();
  ctx.moveTo(x + gap, y);
  ctx.lineTo(x + side + gap, y);
  ctx.lineTo(x + side + 2 * gap, y + gap);
  ctx.lineTo(x + side + 2 * gap, y + side + gap);
  ctx.lineTo(x + side + gap, y + side + 2 * gap);
  ctx.lineTo(x + gap, y + side + 2 * gap);
  ctx.lineTo(x, y + side + gap);
  ctx.lineTo(x, y + gap);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();
}

export function createRect(x, y, ctx) {
  ctx.fillRect(x, y, WIDTH, HEIGHT);
}

export function createSquare(x, y, ctx) {
  ctx.fillRect(x, y, HEIGHT, HEIGHT);
}

export function createCircle(x, y, ctx) {
  ctx.beginPath();
  ctx.arc(x, y, RADIUS, 0, Math.PI * 2);
  ctx.stroke();
  ctx.fill();
}

// TODO: make the functions more accurate
export function isPointContainedWithinShape(point, shape) {
  if (house.type == "town-center") {
    return isPointContainedWithinOctagon(point.x, point.y, house.x, house.y);
  } else if (house.type == "barrack") {
    return isPointContainedWithinRect(point.x, point.y, house.x, house.y);
  } else if (house.type == "stable") {
    return isPointContainedWithinRoundedRect(
      point.x,
      point.y,
      house.x,
      house.y
    );
  } else if (house.type == "archery") {
    return isPointContainedWithinSquare(point.x, point.y, house.x, house.y);
  } else if (house.type == "siege") {
    return isPointContainedWithinCircle(point.x, point.y, house.x, house.y);
  }
}

export function isPointContainedWithinOctagon(px, py, hx, hy) {}

export function isPointContainedWithinRect(px, py, hx, hy) {}

export function isPointContainedWithinRoundedRect(px, py, hx, hy) {}

export function isPointContainedWithinSquare(px, py, hx, hy) {}

export function isPointContainedWithinCircle(px, py, hx, hy) {}
