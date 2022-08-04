import SignUp from "./src/screens/SignUp";
import SignIn from "./src/screens/SignIn";
import ResetPassword from "./src/screens/ResetPassword";
import EmailVerify from "./src/screens/EmailVerify";
import Welcome from "./src/screens/Welcome";

import Home from "./src/screens/dashboard/HomeScreen";
import Cart from "./src/screens/dashboard/CartScreen";
import Favourites from "./src/screens/dashboard/FavouritesScreen";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import { styles } from "./src/styles/global-styles";
import Orders from "./src/screens/dashboard/Orders";
import CartScreen from "./src/screens/dashboard/CartScreen";

const switchNavigator = createSwitchNavigator({
  authFlow: createStackNavigator(
    {
      Welcome,
      SignIn,
      SignUp,
      ResetPassword,
      EmailVerify,
    },
    {
      initialRouteName: "Welcome",
      defaultNavigationOptions: {
        title: "Design Synchrony",
      },
    }
  ),
  mainFlow: createBottomTabNavigator({
    Home,
    Cart,
    Favourites,
  }),
});

createAppContainer(switchNavigator);

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Favourites />
      </View>
    </SafeAreaProvider>
  );
};
export default App;
