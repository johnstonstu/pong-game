import { SVG_NS } from "../settings";
import Board from "./Board";
import Paddle from "./Paddle";

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById(this.element);
    this.board = new Board(this.width, this.height);
    this.leftPaddle = new Paddle(
      this.height,
      this.width / 64,
      this.height / 4.73,
      10,
      100,
      "red"
    );
    this.rightPaddle = new Paddle(
      this.height,
      this.width / 64,
      this.height / 4.73,
      495,
      100,
      "blue"
    );
  }

  render() {
    //bigfix to clear html
    this.gameElement.innerHTML = "";
    //renders basic svg view
    let svg = document.createElementNS(SVG_NS, "svg");
    svg.setAttributeNS(null, "width", this.width);
    svg.setAttributeNS(null, "height", this.height);
    svg.setAttributeNS(null, "viewBox", `0 0 ${this.width} ${this.height}`);
    this.gameElement.appendChild(svg);

    //renders the board
    this.board.render(svg);

    //render paddles
    this.leftPaddle.render(svg);
    this.rightPaddle.render(svg);
  }
}
