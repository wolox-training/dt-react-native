import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionsCreators from '../../../redux/Book/actions';

class Book extends Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      this.getBooks();
    }, 2000);
  }

  getBooks = () => {
    this.props.dispatch(actionsCreators.getBooks());
  };

  render() {
    return (
      <div>
        <p>{this.props.text}</p>
        <button onClick={this.getBooks}>RECARGAR</button>
      </div>
    );
  }
}

Book.propTypes = {
  text: PropTypes.string
};

const mapStateToProps = state => ({
  text: state.book.text
});

export default connect(mapStateToProps)(Book);
