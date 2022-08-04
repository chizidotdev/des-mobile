import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
// import { createBottomTabNavigator } from "react-navigation-tabs";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

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

export type AuthStackParamList = {
  Home: undefined;
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
  EmailVerify: undefined;
  ResetPassword: undefined;
};

const Tab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
};

const AuthStackNavigator = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <AuthStack.Navigator>
        <AuthStack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
        <AuthStack.Screen name="Home" component={MainScreenNavigator} />
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="SignUp" component={SignUp} />
        <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
        <AuthStack.Screen name="EmailVerify" component={EmailVerify} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

const MainScreenNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "";
          let rn = route.name;

          if (rn === "Home") {
            iconName = focused ? "ios-home" : "ios-home";
          } else if (rn === "Favourites") {
            iconName = focused ? "ios-heart" : "ios-heart";
          } else if (rn === "Cart") {
            iconName = focused ? "ios-cart" : "ios-cart";
          } else if (rn === "Orders") {
            iconName = focused ? "ios-list" : "ios-list";
          }
          return <Ionicons name={iconName!} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Store" component={Store} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Orders" component={Orders} />
    </Tab.Navigator>
  );
};

export default AuthStackNavigator;

// const switchNavigator = createSwitchNavigator({
//   mainFlow: createBottomTabNavigator(
//     {
//       Store,
//       ProductDetail,
//       Cart,
//       Favourites,
//       Orders,
//     },
//   ),
//   authFlow: createStackNavigator(
//     {
//       Welcome,
//       SignIn,
//       SignUp,
//       ResetPassword,
//       EmailVerify,
//     },
//     {
//       initialRouteName: "Welcome",
//       defaultNavigationOptions: {
//         title: "Design Synchrony",
//       },
//     }
//   ),
// });

// export default createAppContainer(switchNavigator);

const DevApp = () => {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Category />
      </View>
    </SafeAreaProvider>
  );
};
// export default App;
