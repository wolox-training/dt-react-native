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

  renderBooks = () => {
    if (this.props.listBooks) {
      return this.props.listBooks.map(book => <li key={book.id}>{`${book.title} ${book.author}`}</li>);
    }
  };

  renderStateRequest() {
    if (this.props.loading) {
      return 'Cargando...';
    }
    if (this.props.failure) {
      return 'Error al cargar libros';
    }
    return 'Books:';
  }

  render() {
    return (
      <div>
        <h2>{this.renderStateRequest()}</h2>
        <ul>{this.renderBooks()}</ul>
        <button onClick={this.getBooks} disabled={this.props.loading && !this.props.failure}>
          RECARGAR
        </button>
      </div>
    );
  }
}

Book.propTypes = {
  loading: PropTypes.bool,
  listBooks: PropTypes.arrayOf(Element),
  failure: PropTypes.bool
};

const mapStateToProps = state => ({
  loading: state.book.loading,
  listBooks: state.book.listBooks,
  failure: state.book.failure
});

export default connect(mapStateToProps)(Book);
