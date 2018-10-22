import React, { Component } from "react";
import { Text, Image, ListView, View } from "react-native";
import Books from "../../../books";
import { ListItem } from "react-native-elements";

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
const defaultImage =
  "https://acompli.helpshift.com/static/images/avatars/default-app-icon.png";

class BookScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookList: ds.cloneWithRows([]),
      loaded: false
    };
  }

  render() {
    if (this.state.loaded) {
      return (
        <ListView
          initialListSize={5}
          enableEmptySections={true}
          dataSource={this.state.bookList}
          renderRow={book => {
            return this.renderbookRow(book);
          }}
        />
      );
    } else {
      return <Text>Loading Books...</Text>;
    }
  }

  renderbookRow(book) {
    return ( <ListItem
              roundAvatar
              title={`${book.title}`}
              subtitle={book.author}
              avatar={{ uri: `${book.image_url ? book.image_url : defaultImage}` }}
              containerStyle={{ borderBottomWidth: 0 }}
            />);
  }
  componentDidMount() {
    Promise.resolve(JSON.parse(JSON.stringify(Books))).then(data => {
      this.setState({
        bookList: ds.cloneWithRows(data),
        loaded: true
      });
    });
  }
}

export default BookScreen;
