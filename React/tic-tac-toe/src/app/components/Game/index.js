import React, { Component } from "react";
import game from "./game.scss";
import Board from "../Board";

class Game extends React.Component {
  render() {
    return (
      <React.Fragment className={game.game}>
        <div className={game.gameBoard}>
          <Board />
        </div>
        <div className={game.gameInfo}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
        </React.Fragment>
    );
  }
}
export default Game;
