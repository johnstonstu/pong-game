import { SVG_NS } from "../settings";

export default class Ball {
  constructor(radius, boardWidth, boardHeight) {
    this.radius = radius;
    this.boardWidth = boardWidth;
    this.boardHeight = boardHeight;
    this.direction = 1;

    this.reset();
  }

  reset() {
    //sets ball in middle of board
    this.x = this.boardWidth / 2;
    this.y = this.boardHeight / 2;

    //sets inital random vector for ball
    this.vy = 0;

    //fixes 0 vy bug
    while (this.vy === 0) {
      this.vy = Math.floor(Math.random() * 10 - 5);
    }
    this.vx = this.direction * (6 - Math.abs(this.vy));
  } //end reset

  wallCollision() {
    //ball constraints
    const hitLeft = this.x - this.radius <= 0;
    const hitRight = this.x + this.radius >= this.boardWidth;
    const hitTop = this.y - this.radius <= 0;
    const hitBottom = this.y + this.radius >= this.boardHeight;

    //sets wall collision events
    if (hitLeft || hitRight) {
      this.vx *= -1;
      this.reset();
    }
    if (hitTop || hitBottom) {
      this.vy *= -1;
    }
  } //end wallcollision

  paddleCollision(player1, player2) {
    // player 2 ball-paddle collision
    if (this.vx > 0) {
      let paddle2 = player2.coordinates(
        player2.x,
        player2.y,
        player2.width,
        player2.height
      );
      let [leftX, rightX, topY, bottomY] = paddle2;

      if (
        this.x + this.radius >= leftX &&
        this.x + this.radius <= rightX &&
        (this.y >= topY && this.y <= bottomY)
      ) {
        this.vx = -this.vx;
      }
    } else {
      let paddle1 = player1.coordinates(
        player1.x,
        player1.y,
        player1.width,
        player1.height
      );
      let [leftX, rightX, topY, bottomY] = paddle1;

      if (
        this.x - this.radius <= rightX &&
        this.x - this.radius >= leftX &&
        (this.y >= topY && this.y <= bottomY)
      ) {
        this.vx = -this.vx;
      }
    }
  }

  render(svg, player1, player2) {
    //ball movement
    this.x += this.vx;
    this.y += this.vy;

    //draw ball svg
    let circle = document.createElementNS(SVG_NS, "circle");
    circle.setAttributeNS(null, "r", this.radius);
    circle.setAttributeNS(null, "fill", "white");
    circle.setAttributeNS(null, "cx", this.x);
    circle.setAttributeNS(null, "cy", this.y);
    svg.appendChild(circle);

    this.wallCollision();
    this.paddleCollision(player1, player2);
  }
}
