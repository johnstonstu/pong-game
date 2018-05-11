import { SVG_NS } from "../settings";

export default class PaddleEffect {
  constructor(x, y, fill) {
    this.x = x;
    this.y = y;
    // this.r = r;
    this.fill = fill;
  }

  render(svg) {
    let paddle = document.createElementNS(SVG_NS, "path");
    paddle.setAttributeNS(
      null,
      "d",
      "M5.7,10.6l7.7,7.7c-0.9,0-1.9-0.2-2.8-0.5c-0.4-0.1-1.8-0.3-2.4,0.2c-1.3,1.3-2.4,3-3,3.6c-0.6,0.6-1.5,0.4-2.4-0.5  c-0.8-0.8-1.1-1.8-0.5-2.4C3,18.2,4.7,17,6,15.8c0.6-0.6,0.3-2.2,0.2-2.4C5.8,12.5,5.7,11.5,5.7,10.6z M19.7,4.3  C16,0.5,11,1.9,7.9,4.9c-1.1,1.1-1.9,2.5-2.1,4l9.3,9.3c1.5-0.3,2.9-1,4-2.1C22.1,13,23.5,8,19.7,4.3z"
    );
    paddle.setAttributeNS(null, "cx", this.x);
    paddle.setAttributeNS(null, "cy", this.y);
    paddle.setAttributeNS(null, "transfom", `"translate(${this.x},${this.y}""`);
    svg.append(paddle);

    // let circle = document.createElementNS(SVG_NS, "circle");
    // circle.setAttributeNS(null, "r", 20);
    // circle.setAttributeNS(null, "fill", this.fill);
    // circle.setAttributeNS(null, "cx", this.x);
    // circle.setAttributeNS(null, "cy", this.y);
    // svg.appendChild(circle);
  }
}
