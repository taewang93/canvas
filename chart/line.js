export class Line {
  constructor(width, height, lineWidth) {
    this.width = width;
    this.height = height;
    this.lineWidth = lineWidth;
  }

  draw(ctx) {
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = "#D2E3FC";
    for (let i = 1; i < 10; i++) {
      let j = i * 0.1;
      ctx.beginPath();
      ctx.moveTo(0, this.height * j);
      ctx.lineTo(this.width, this.height * j);
      ctx.stroke();
    }
  }
}
