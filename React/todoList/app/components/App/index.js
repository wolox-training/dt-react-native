import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Title from '../Title/index';
import Input from "../Input/index";
import Footer from "../Footer/index";
import List from "../List/index";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  divider: {
    height: 1,
    backgroundColor: "whitesmoke"
  }
});

class App extends Component {

  render() {
 
    return (
      <View style={styles.container}>
        <Title>Todo List</Title>
        <Input/>
        <View style={styles.divider} />
        <List/>      
        <View style={styles.divider} />
        <Footer/>
      </View>
    );
  }
}

export default App;
