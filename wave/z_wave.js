import { Point } from "./z_point.js";

export class Wave {
  constructor() {}

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = stageWidth / 2;
    this.centerY = stageHeight / 2;

    this.point = new Point(this.centerX, this.centerY);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = "#ff0000";
    ctx.arc(this.point.x, this.point.y, 10, 0, 2 * Math.PI);
    ctx.fill();

    this.point.update();
  }
}
