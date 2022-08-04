import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import { styles } from "./src/styles/global-styles";

import SignUp from "./src/screens/auth/SignUp";
import SignIn from "./src/screens/auth/SignIn";
import ResetPassword from "./src/screens/auth/ResetPassword";
import EmailVerify from "./src/screens/auth/EmailVerify";

import Favourites from "./src/screens/dashboard/FavouritesScreen";
import Cart from "./src/screens/dashboard/CartScreen";
import Orders from "./src/screens/dashboard/Orders";
import CartScreen from "./src/screens/dashboard/CartScreen";

import Welcome from "./src/screens/Welcome";
import Home from "./src/screens/Store";
import Store from "./src/screens/Store";
import ProductDetail from "./src/screens/ProductDetail";
import Category from "./src/screens/Category";

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
        <Category />
      </View>
    </SafeAreaProvider>
  );
};
export default App;
