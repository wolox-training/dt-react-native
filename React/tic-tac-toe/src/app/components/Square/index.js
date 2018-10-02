import React from 'react';
import PropTypes from 'prop-types';

import square from './square.scss';

function Square(props) {
  return (
    <button className={square.square} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

Square.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.number
};

export default Square;
