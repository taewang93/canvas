import { Ball } from "./ball.js";
import { Block } from "./block.js";

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(this.canvas);

    this.resize();
    window.addEventListener("resize", this.resize.bind(this), false);

    this.block = new Block(100, 200, 300, 20);
    this.ball = new Ball(this.stageWidth, this.stageHeight, 10, 20, this.block);

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.block.draw(this.ctx);
    this.ball.draw(this.ctx);
  }
}

window.onload = () => {
  new App();
};
