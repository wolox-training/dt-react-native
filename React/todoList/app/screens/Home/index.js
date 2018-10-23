import AppTodoList from "../TodoList";
import BookScreen from "../BooksList";
import BookDetailScreen from "../BookDetail";

import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";

const BooksStack = createStackNavigator({
  Books: BookScreen,
  BookDetail: BookDetailScreen
});

const TabNavigator = createMaterialTopTabNavigator(
  {
    TodoList: AppTodoList,
    Books: BooksStack
  },
  {
    tabBarPosition: "top"
  }
);

const AppNavigator = createStackNavigator(
  {
    Home: TabNavigator
  },
  {
    navigationOptions: {
      title: "MyApp"
    }
  }
);

export default AppNavigator;
