import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import actionsCreators from '../../../redux/Book/actions';

class Book extends Component {
  componentDidMount = () => {
    this.getBooks();
  };

  getBooks = () => {
    this.props.dispatch(actionsCreators.getBooks());
  };

  getUlListBooks = () => {
    if (this.props.listBooks) {
      return this.props.listBooks.map(book => <li key={book.id}>{`${book.title} ${book.author}`}</li>);
    }
  };

  getStateBooks() {
    if (this.props.loading) {
      return 'Cargando...';
    }
    return 'Books:';
  }

  render() {
    return (
      <div>
        <h2>{this.getStateBooks()}</h2>
        <ul>{this.getUlListBooks()}</ul>
        <button onClick={this.getBooks} disabled={this.props.loading}>
          RECARGAR
        </button>
      </div>
    );
  }
}

Book.propTypes = {
  loading: PropTypes.bool,
  listBooks: PropTypes.arrayOf(Element)
};

const mapStateToProps = state => ({
  loading: state.book.loading,
  listBooks: state.book.listBooks
});

export default connect(mapStateToProps)(Book);
