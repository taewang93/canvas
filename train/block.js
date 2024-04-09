export class Block {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "#00ff00";
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();
  }
}
