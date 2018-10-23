import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Title from '../../components/Title';
import Input from "../../components/Input";
import Footer from "../../components/Footer";
import List from "../../components/List";
import styles from './styles';

class App extends Component {

  render() {
 
    return (
      <View style={styles.container}>
        <Title>TodoList</Title>
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
