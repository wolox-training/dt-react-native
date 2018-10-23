import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import Checkbox from '../Checkbox/index';
import styles from './styles';

class List extends Component {

  renderItem = (item, i) => {
    const { onToggleItemCompleted, onRemoveItem } = this.props;
    const itemStyle = item.completed
      ? [styles.item, styles.completed]
      : styles.item;

    return (
      <View key={i} style={itemStyle}>
        <Text> {item.label} </Text>
        <View style={styles.rightSection}>
          <Checkbox
            isChecked={item.completed}
            onToggle={() => onToggleItemCompleted(i)}
          />
          <TouchableOpacity onPress={() => onRemoveItem(i)}>
            <Text style={styles.remove}> &times; </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    const { items } = this.props;
    return (
      <ScrollView style={styles.container}>
        {items.map(this.renderItem)}
      </ScrollView>
    );
  }
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
  onToggleItemCompleted: PropTypes.func.isRequired
};

export default List;
