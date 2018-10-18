import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'skyblue',
    padding: 60,
  },
  title: {
    textAlign: 'center',
    color: 'white',
  },
});

class Title extends Component {

  render() {
    const {children} = this.props;

    return (
      <View style={styles.header}>
        <Text style={styles.title}>{children}</Text>
      </View>
    )
  };
}
export default Title;
