import React, { Component } from "react";
import { View,Text } from "react-native";
import Title from '../../components/Title';
import styles from './styles';


class BookDetail extends Component {
    render() {
      const { navigation } = this.props;
      const book = navigation.getParam('book', 'NO-ID');
        return (
          <View style={styles.container}>
            <Title>{JSON.stringify(book.title)}</Title>
            <Text>{`Author: ${book.author}`}</Text>
            <Text>{`Genre: ${book.genre}`}</Text>
            <Text>{`Publisher: ${book.publisher}`}</Text>
            <Text>{`Year: ${book.year}`}</Text>
          </View>
        );
      }
}

export default BookDetail;
