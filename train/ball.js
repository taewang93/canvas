export class Ball {
  constructor(stageWidth, stageHeight, speed, radius, block) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
    this.radius = radius;
    this.vx = speed;
    this.vy = speed;

    this.block = block;

    const diameter = radius * 2;
    this.x = diameter + Math.random() * (this.stageWidth - diameter);
    this.y = diameter + Math.random() * (this.stageHeight - diameter);
  }

  draw(ctx) {
    this.x += this.vx;
    this.y += this.vy;

    this.bounceWindow();
    this.bounceBlock();

    ctx.beginPath();
    ctx.fillStyle = "#ffffff";
    ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    ctx.fill();
  }

  bounceWindow() {
    const minX = this.radius;
    const maxX = this.stageWidth - this.radius;
    const minY = this.radius;
    const maxY = this.stageHeight - this.radius;

    if (this.x > maxX || this.x < minX) {
      this.vx *= -1;
      this.x += this.vx;
    }
    if (this.y > maxY || this.y < minY) {
      this.vy *= -1;
      this.y += this.vy;
    }
  }

  bounceBlock() {
    const minX = this.block.x - this.radius;
    const maxX = this.block.x + this.block.width + this.radius;
    const minY = this.block.y - this.radius;
    const maxY = this.block.y + this.block.height + this.radius;

    if (this.x > minX && this.x < maxX && this.y > minY && this.y < maxY) {
      const x1 = this.x - minX;
      const x2 = maxX - this.x;
      const y1 = this.y - minY;
      const y2 = maxY - this.y;
      const min1 = Math.min(x1, x2);
      const min2 = Math.min(y1, y2);
      const min = Math.min(min1, min2);

      if (min == min1) {
        this.vx *= -1;
        this.x += this.vx;
      }
      if (min == min2) {
        this.vy *= -1;
        this.y += this.vy;
      }
    }
  }
}
