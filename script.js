const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

var drawing = false;
var x = 0;
var y = 0;

// Function to start drawing
canvas.addEventListener("mousedown", function (e) {
  x = e.clientX - canvas.offsetLeft;
  y = e.clientY - canvas.offsetTop;
  drawing = true;
});

// Function to draw
canvas.addEventListener("mousemove", function (e) {
  if (drawing === true) {
    drawLine(
      ctx,
      x,
      y,
      e.clientX - canvas.offsetLeft,
      e.clientY - canvas.offsetTop
    );
    x = e.clientX - canvas.offsetLeft;
    y = e.clientY - canvas.offsetTop;
  }
});

// Function to stop drawing
window.addEventListener("mouseup", function (e) {
  if (drawing === true) {
    drawLine(
      ctx,
      x,
      y,
      e.clientX - canvas.offsetLeft,
      e.clientY - canvas.offsetTop
    );
    x = 0;
    y = 0;
    drawing = false;
  }
});

// Function to draw a line
function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = "black";
  context.lineWidth = 2;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
