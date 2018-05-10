import { SVG_NS, KEYS } from "../settings";
import Board from "./Board";
import Paddle from "./Paddle";

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById(this.element);
    this.board = new Board(this.width, this.height);
    this.paddleWidth = this.width / 64;
    this.paddleHeight = this.height / 4.73;
    this.boardGap = 10;

    //initate player 1 paddle
    this.player1 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      (this.height - this.paddleHeight) / 2,
      "red",
      KEYS.a,
      KEYS.z
    );

    //initate player 2 paddle
    this.player2 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.width - this.paddleWidth - this.boardGap,
      (this.height - this.paddleHeight) / 2,
      "blue",
      KEYS.up,
      KEYS.down
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
    this.player1.render(svg);
    this.player2.render(svg);
  }
}
