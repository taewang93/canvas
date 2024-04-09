const DATA = [4, 8, 6, 2, 7, 5, 9, 3, 10, 1];

export class Chart {
  constructor(width, height, lineWidth) {
    this.width = width;
    this.height = height;
    this.lineWidth = lineWidth;
  }

  draw(ctx) {
    ctx.strokeStyle = "#4285F4";
    ctx.lineWidth = this.lineWidth;

    ctx.moveTo(0, this.height);
    for (let i = 0; i < DATA.length; i++) {
      ctx.lineTo(this.width * (i + 1) * 0.1, this.height * DATA[i] * 0.1);
    }
    ctx.stroke();
    ctx.lineTo(this.width, this.height);
    ctx.lineTo(0, this.height);
    ctx.fillStyle = "rgba(66, 103, 210, 0.17)";

    ctx.fill();
  }
}
