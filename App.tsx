import SignUp from "./src/screens/SignUp";
import SignIn from "./src/screens/SignIn";
import ResetPassword from "./src/screens/ResetPassword";
import EmailVerify from "./src/screens/EmailVerify";
import Welcome from "./src/screens/Welcome";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

const navigator = createStackNavigator(
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
);

export default createAppContainer(navigator);

// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <View style={styles.container}>
//         <Welcome />
//       </View>
//     </SafeAreaProvider>
//   );
// };
// export default App;
