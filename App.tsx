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

import Welcome from "./src/screens/Welcome";
import Store from "./src/screens/Store";
import ProductDetail from "./src/screens/ProductDetail";
import Category from "./src/screens/Category";

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator(
    {
      Store,
      ProductDetail,
      Cart,
      Favourites,
      Orders,
    },
    { tabBarOptions: { showIcon: true }, tabBarComponent: () => <IconUI name="home" /> }
  ),
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
});

// export default createAppContainer(switchNavigator);

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
