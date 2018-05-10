import { SVG_NS } from "../settings";

export default class Paddle {
  constructor(boardHeight, width, height, x, y, fill) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.fill = fill;
    this.speed = 10;
    this.score = 0;
  }

  render(svg) {
    //paddle
    let rect = document.createElementNS(SVG_NS, "rect");
    rect.setAttributeNS(null, "fill", this.fill);
    rect.setAttributeNS(null, "width", this.width);
    rect.setAttributeNS(null, "height", this.height);
    rect.setAttributeNS(null, "x", this.x);
    rect.setAttributeNS(null, "y", this.y);
    svg.appendChild(rect);
  }
}