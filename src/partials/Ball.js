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
    this.vy = Math.floor(Math.random() * 10 - 5);
    this.vx = this.direction * (6 - Math.abs(this.vy));
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
  }
}
