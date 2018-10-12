import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../../redux/Game/actions';

import Board from './components/Board';
import game from './game.scss';

function calculateWinner(squares) {
  const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
  return null;
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null)
        }
      ]
    };
  }

  changeStep = (number, bool) => {
    this.props.dispatch(actions.changeStep(number, bool));
  };

  handleClick = i => {
    const history = this.state.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares
        }
      ])
    });
    this.changeStep(history.length, !this.props.xIsNext);
  };

  jumpTo(step) {
    this.changeStep(step, step % 2 === 0);
  }

  render() {
    const history = this.state.history;
    const current = history[this.props.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : 'Go to game start';
      /* eslint-disable react/no-array-index-key */
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
      /* eslint-enable react/no-array-index-key */
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className={game.game}>
        <div className={game.gameBoard}>
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className={game.gameInfo}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  stepNumber: PropTypes.number,
  xIsNext: PropTypes.bool
};

const mapStateToProps = state => ({
  stepNumber: state.game.stepNumber,
  xIsNext: state.game.xIsNext
});

export default connect(mapStateToProps)(Game);
