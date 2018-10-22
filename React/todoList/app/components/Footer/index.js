import React, { Component } from "react";
import PropTypes from "prop-types";
import Footer from "./layout";
import { actionCreators } from "../../redux/Item/actions";
import { connect } from "react-redux";

class FooterContainer extends Component {
  removeCompleted = () => {
    const { dispatch } = this.props;
    dispatch(actionCreators.removeCompleted());
  };

  render() {
    return <Footer onRemoveCompleted={this.removeCompleted} />;
  }
}

FooterContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(FooterContainer);
