import AppTodoList from "../TodoList";
import BookScreen from "../BooksList";
import BookDetailScreen from "../BookDetail";

import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";

const BookDetailStack = createStackNavigator({
  Books: BookScreen,
  BookDetail: BookDetailScreen,
});

const TabNavigator = createMaterialTopTabNavigator({
  TodoList: AppTodoList,
  Books: BookDetailStack,
}, {
  tabBarPosition: 'top',
});


const AppNavigator = createStackNavigator(
  {
    Home: TabNavigator
  },
  {
    initialRouteName: 'Home',
  },
  {
    navigationOptions: {
      title: "MyApp"
    }
  }
);

export default AppNavigator;
