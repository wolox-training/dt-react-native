import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Square from '../Square';

import board from './board.scss';

class Board extends Component {
  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />;
  }

  render() {
    return (
      <React.Fragment>
        <div className={board.status}>{status}</div>
        <div className={board.boardRow}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={board.boardRow}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={board.boardRow}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </React.Fragment>
    );
  }
}

Board.propTypes = {
  squares: PropTypes.instanceOf(Array),
  onClick: PropTypes.func
};

export default Board;
