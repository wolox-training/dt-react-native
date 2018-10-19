import AppTodoList from "../TodoList";
import BookScreen from "../BooksList";

import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";

const TabNavigator = createMaterialTopTabNavigator({
  TodoList: AppTodoList,
  Books: BookScreen
}, {
  tabBarPosition: 'top',
});

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
