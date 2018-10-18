import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import List from "./layout";
import {actionCreators} from '../../redux/Item/actions';

class ListContainer extends Component {
  removeItem = index => {
    const { dispatch } = this.props;
    dispatch(actionCreators.removeItem(index));
  };

  toggleItemCompleted = index => {
    const { dispatch } = this.props;
    dispatch(actionCreators.toggleItemCompleted(index));
  };

  render() {
    const { items } = this.props;

    return (
      <List
        items={items}
        onRemoveItem={this.removeItem}
        onToggleItemCompleted={this.toggleItemCompleted}
      />
    );
  }
}

ListContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  items: state.items
});

export default connect(mapStateToProps)(ListContainer);
