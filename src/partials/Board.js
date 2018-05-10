import { SVG_NS } from "../settings";

export default class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  render(svg) {
    //background of board
    let rect = document.createElementNS(SVG_NS, "rect");
    rect.setAttributeNS(null, "fill", "#353535");
    rect.setAttributeNS(null, "width", this.width);
    rect.setAttributeNS(null, "height", this.height);

    //middle dash line
    let line = document.createElementNS(SVG_NS, "line");
    line.setAttributeNS(null, "x1", this.width / 2);
    line.setAttributeNS(null, "y1", 0);
    line.setAttributeNS(null, "x2", this.width / 2);
    line.setAttributeNS(null, "y2", this.height);
    line.setAttributeNS(null, "stroke", "white");
    line.setAttributeNS(null, "stroke-dasharray", "15, 10");
    line.setAttributeNS(null, "stroke-width", "3");

    //midde dash circle
    let circle = document.createElementNS(SVG_NS, "circle");
    circle.setAttributeNS(null, "fill", "#353535");
    circle.setAttributeNS(null, "cx", this.width / 2);
    circle.setAttributeNS(null, "cy", this.height / 2);
    circle.setAttributeNS(null, "r", 45);
    circle.setAttributeNS(null, "stroke", "white");
    circle.setAttributeNS(null, "stroke-dasharray", "15, 10");
    circle.setAttributeNS(null, "stroke-width", "3");

    // adds items to html
    svg.appendChild(rect);
    svg.appendChild(line);
    svg.appendChild(circle);
  }
}
