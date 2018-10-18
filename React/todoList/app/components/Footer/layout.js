import React, { Component } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  footer: {
    paddingVertical: 35,
    alignItems: "center"
  },
  remove: {
    color: "#CD5C5C"
  }
});

class Footer extends Component {

render() {
    const { onRemoveCompleted } = this.props;

    return (
      <TouchableOpacity style={styles.footer} onPress={onRemoveCompleted}>
        <Text style={styles.remove}>Remove completed items</Text>
      </TouchableOpacity>
    );
  }
}

Footer.propTypes = {
    onRemoveCompleted: PropTypes.func
  };

export default Footer;