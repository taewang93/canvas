const DATA = [4, 8, 6, 2, 7, 5, 9, 3, 10];
// const DATA = [];

// setInterval(() => {
//   const newData = Math.floor(Math.random() * 11);
//   if (DATA.length > 9) DATA.splice(0, 1);
//   DATA.push(newData);
// }, 1000);

export class Chart {
  constructor(width, height, lineWidth) {
    this.width = width;
    this.height = height;
    this.lineWidth = lineWidth;

    this.data = [];
    this.dataLength = this.data.length;

    setInterval(() => {
      const newData = Math.floor(Math.random() * 11);
      if (this.data.length > 9) DATA.splice(0, 1);
      this.data.push(newData);
      console.log(this.data);
    }, 1000);
  }

  draw(ctx) {
    ctx.strokeStyle = "#4285F4";
    ctx.lineWidth = this.lineWidth;

    ctx.moveTo(this.width, this.height);
    for (let i = 0; i < this.dataLength; i++) {
      const fixedI = 10 - i;
      ctx.lineTo(
        this.width * fixedI * 0.1,
        this.height * this.data[this.dataLength - i - 1] * 0.1
      );
    }
    if (this.dataLength < 10) {
      ctx.lineTo(this.width * (10 - this.dataLength) * 0.1, this.height);
    }

    ctx.stroke();
    if (this.dataLength == 10) ctx.lineTo(0, this.height);
    ctx.lineTo(this.width, this.height);
    // ctx.lineTo(0, this.height);
    ctx.fillStyle = "rgba(66, 103, 210, 0.17)";

    ctx.fill();
  }
}
