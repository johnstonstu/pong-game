import { SVG_NS, KEYS } from "../settings";
import Board from "./Board";
import Paddle from "./Paddle";
import Ball from "./Ball";
import Score from "./Score";
import PaddleEffect from "./Effects";

export default class Game {
  constructor(element, width, height) {
    this.element = element;
    this.width = width;
    this.height = height;
    this.gameElement = document.getElementById(this.element);
    this.paddleWidth = this.width / 64;
    this.paddleHeight = this.height / 4.73;
    this.boardGap = 10;
    this.radius = 8;
    this.pause = false;

    //pause
    document.addEventListener("keydown", event => {
      if (event.key == KEYS.spaceBar) {
        this.pause = !this.pause;
      }
    });

    //reset
    document.addEventListener("keydown", event => {
      if (event.key == KEYS.r) {
        this.pause = false;
        this.ball.reset();
        this.player1.score = 0;
        this.player2.score = 0;
        document.body.style.backgroundColor = "white";
      }
    });

    //initate board
    this.board = new Board(this.width, this.height);

    //initate player 1 paddle
    this.player1 = new Paddle(
      this.height,
      this.paddleWidth,
      this.paddleHeight,
      this.boardGap,
      (this.height - this.paddleHeight) / 2,
      "red",
      KEYS.a,
      KEYS.z,
      "player1"
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
      KEYS.down,
      "player2"
    );

    // initate score
    this.score1 = new Score(this.width / 2 - 50, 30, 30, "red");
    this.score2 = new Score(this.width / 2 + 25, 30, 30, "blue");

    // initate ball
    this.ball = new Ball(this.radius, this.width, this.height);

    //paddle effect
    this.effectleft = new PaddleEffect(20, this.height / 2, "black");
    this.effectright = new PaddleEffect(
      this.width - 20,
      this.height / 2,
      "black"
    );
  }

  render() {
    // pauses render method on return
    if (this.pause) {
      return;
    }

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

    //render ball
    this.ball.render(svg, this.player1, this.player2);

    //display score on screen
    this.score1.render(svg, this.player1.score);
    this.score2.render(svg, this.player2.score);

    //sets bg color
    if (this.player1.score >= 2) {
      document.body.style.backgroundColor = "red";

      this.pause = true;
    }
    if (this.player2.score >= 2) {
      document.body.style.backgroundColor = "blue";
      this.pause = true;
    }

    //render paddle effect
    this.effectleft.render(svg);
    this.effectright.render(svg);
  }
}
