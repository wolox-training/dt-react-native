import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";
import PropTypes from "prop-types";


const styles = StyleSheet.create({
    input: {
      height: 50,
      padding: 15
    }
  });

  class Input extends Component{

    render() {
        const { placeholder, onSubmitEditing, onChangeText, text} = this.props;
    
        return (
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={text}
            onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}
            blurOnSubmit={false}
          />
        );
      }
  }
  
  Input.propTypes = {
    onSubmitEditing: PropTypes.func,
    onChangeText: PropTypes.func,
    placeholder: PropTypes.string
  };

  export default Input;