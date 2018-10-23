import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import styles from './styles';

class Checkbox extends Component {
  render() {
    const { onToggle, isChecked } = this.props;

    return (
      <TouchableOpacity onPress={onToggle}>
        <View style={styles.box}>
          {isChecked && <View style={styles.inner} />}
        </View>
      </TouchableOpacity>
    );
  }
}

Checkbox.propTypes = {
  onToggle: PropTypes.func,
  isChecked: PropTypes.bool
};

export default Checkbox;
