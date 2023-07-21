let canvas = document.querySelector("canvas");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
document.body.style.background = "#000000";
let c = canvas.getContext("2d");

function Circle(x, y, xd, yd, radius) {
  this.x = x;
  this.y = y;
  this.xd = xd;
  this.yd = yd;
  this.radius = radius;

  this.draw = function () {
    uptadeColor();
    c.beginPath();
    c.fillStyle = "#000000";
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    c.fill();
    c.stroke();
  };

  function uptadeColor() {
    let color = Math.round(Math.random() * 100);
    c.strokeStyle = `hsl(${color},100%,50%)`;
  }

  this.update = function () {
    if (this.x >= innerWidth - this.radius || this.x <= 0 + this.radius) {
      this.xd = -this.xd;
    }
    this.x += this.xd;

    if (this.y >= innerHeight - this.radius || this.y <= 0 + this.radius) {
      this.yd = -this.yd;
    }
    this.y += this.yd;
    this.draw();
  };
}

let circleArr = [];

for (let i = 0; i < 30; i++) {
  let radius = 35;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let xd = (Math.random() - 0.5) * 2;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let yd = (Math.random() - 0.5) * 2;

  circleArr.push(new Circle(x, y, xd, yd, radius));
}

function animate() {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArr.length; i++) {
    circleArr[i].update();
  }
}
animate();
