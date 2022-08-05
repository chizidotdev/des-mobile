import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import SignUp from "./src/screens/auth/SignUp";
import SignIn from "./src/screens/auth/SignIn";
import ResetPassword from "./src/screens/auth/ResetPassword";
import EmailVerify from "./src/screens/auth/EmailVerify";

import Favourites from "./src/screens/dashboard/FavouritesScreen";
import Cart from "./src/screens/dashboard/CartScreen";
import Orders from "./src/screens/dashboard/Orders";

import Welcome from "./src/screens/Welcome";
import Store from "./src/screens/Store/Store";
import ProductDetail from "./src/screens/ProductDetail";
import Category from "./src/screens/Category";
import Notifications from "./src/screens/Notifications";

export type AuthStackParamList = {
  Home: undefined;
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
  EmailVerify: undefined;
  ResetPassword: undefined;
};

export type ProductStackParamList = {
  Store: undefined;
  Category: undefined;
  Details: undefined;
};

const Tab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const ProductStack = createNativeStackNavigator<ProductStackParamList>();

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
        <AuthStack.Screen
          name="Home"
          component={MainScreenNavigator}
          options={{ headerShown: false }}
        />
        <AuthStack.Screen name="SignIn" component={SignIn} />
        <AuthStack.Screen name="SignUp" component={SignUp} />
        <AuthStack.Screen name="ResetPassword" component={ResetPassword} />
        <AuthStack.Screen name="EmailVerify" component={EmailVerify} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

const ProductStackNavigator = () => {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen name="Store" component={Store} options={{ headerShown: false }} />
      <ProductStack.Screen
        name="Details"
        component={ProductDetail}
        options={{ headerShown: false }}
      />
      <ProductStack.Screen name="Category" component={Category} options={{ headerShown: false }} />
    </ProductStack.Navigator>
  );
};

const MainScreenNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = "ios-compass";
          let rn = route.name;

          if (rn === "Home") {
            iconName = focused ? "ios-compass" : "ios-compass";
          } else if (rn === "Favourites") {
            iconName = focused ? "ios-heart" : "ios-heart";
          } else if (rn === "Notifications") {
            iconName = focused ? "ios-notifications" : "ios-notifications";
          } else if (rn === "Cart") {
            iconName = focused ? "ios-basket" : "ios-basket";
          } else if (rn === "Orders") {
            iconName = focused ? "ios-help-circle" : "ios-help-circle";
          } else if (rn === "Support") {
            iconName = focused ? "ios-help-circle" : "ios-help-circle";
          }
          return <Ionicons name={iconName!} size={size} color={focused ? "#FA7913" : "#D3D1D8"} />;
        },
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={ProductStackNavigator} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Orders" component={Orders} />
    </Tab.Navigator>
  );
};

export default AuthStackNavigator;
