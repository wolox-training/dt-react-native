import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import Title from "../../components/Title";
import styles from "./styles";

const defaultImage = "https://acompli.helpshift.com/static/images/avatars/default-app-icon.png";

class BookDetail extends Component {
  render() {
    const { navigation } = this.props;
    const book = navigation.getParam("book", "NO-ID");
    return (
      <View style={styles.container}>
        <Title>{JSON.stringify(book.title)}</Title>
        <View style={styles.bodyContent}>
          <View>
            <Image source={{uri: `${book.image_url || defaultImage}`}} style={styles.image}/>
          </View>
          <View style={styles.info}>
            <Text>{`Author: ${book.author}`}</Text>
            <Text>{`Genre: ${book.genre}`}</Text>
            <Text>{`Publisher: ${book.publisher}`}</Text>
            <Text>{`Year: ${book.year}`}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default BookDetail;
