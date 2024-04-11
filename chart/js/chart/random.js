import { Line } from "../index/line.js";
import { Chart } from "./randomChart.js";

class App {
  constructor() {
    // this.canvas = document.createElement("canvas");
    this.canvas = document.querySelector("#chart");
    this.ctx = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

    window.requestAnimationFrame(this.animate.bind(this));

    this.line = new Line(this.stageWidth, this.stageHeight, 3);
    this.chart = new Chart(this.stageWidth, this.stageHeight, 2);

    this.draw(this.ctx);
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2);
  }

  draw(ctx) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    this.line.draw(ctx);
    this.chart.draw(ctx);
  }

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    this.line.draw(this.ctx);
    this.chart.draw(this.ctx);
  }
}

window.onload = () => {
  new App();
};
