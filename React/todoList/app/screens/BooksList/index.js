import React, { Component } from "react";
import { Text, Image, FlatList, View, Alert } from "react-native";
import Books from "../../../books";
import { ListItem } from "react-native-elements";
import { createStackNavigator } from "react-navigation";
//const ds = new FlatList.Data({ rowHasChanged: (r1, r2) => r1 != r2 });
const defaultImage =
  "https://acompli.helpshift.com/static/images/avatars/default-app-icon.png";

class BookScreen extends Component {
  _keyExtractor = (book, index) => `${book.id}`;

  state = {
    bookList: [],
    loaded: false
  };

  navigate(url){
  
  }

  renderbookRow = ({ item: book }) =>{
    return (
      <ListItem
        onPress={() => {
          this.props.navigation.navigate("BookDetail",{
            book: book
          });
        }}
        roundAvatar
        title={`${book.title}`}
        subtitle={book.author}
        avatar={{ uri: `${book.image_url || defaultImage}` }}
        containerStyle={{ borderBottomWidth: 0 }}
      />
    );
  };

  componentDidMount() {
    Promise.resolve(JSON.parse(JSON.stringify(Books))).then(data => {
      this.setState({
        bookList: data,
        loaded: true
      });
    });
  }

  render() {
    if (this.state.loaded) {
      return (
        <FlatList
          data={this.state.bookList}
          renderItem={this.renderbookRow}
          keyExtractor={this._keyExtractor}
        />
      );
    } else {
      return <Text>Loading Books...</Text>;
    }
  }
}

export default BookScreen;
