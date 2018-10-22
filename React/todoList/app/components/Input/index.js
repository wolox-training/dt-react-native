import React, { Component } from "react";
import PropTypes from "prop-types";
import Input from "./layout";
import { actionCreators } from "../../redux/Item/actions";
import { connect } from "react-redux";

class InputContainer extends Component {
  changeText = text => {
    this.setState({ text });
  };

  submitEditing = () => {
    const { text } = this.state;

    if (!text) return;

    this.addItem(text);
    this.setState({ text: "" });
  };

  addItem = item => {
    const { dispatch } = this.props;
    dispatch(actionCreators.addItem(item));
  };

  render() {
    const placeholder = "Enter an item!";
    const { text } = this.state;

    return (
      <Input
        placeholder={placeholder}
        text={text}
        onChangeText={this.changeText}
        onSubmitEditing={this.submitEditing}
      />
    );
  }

  state = {
    text: ""
  };
}

InputContainer.propTypes = {
  dispatch: PropTypes.func.isRequired
};

export default connect()(InputContainer);
