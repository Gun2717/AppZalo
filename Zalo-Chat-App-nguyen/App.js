import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RecoilRoot } from "recoil";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import SignUpOTP from "./pages/SignUpOTP";
import FAQ from "./pages/FAQ";
import SignUpZaloName from "./pages/SignUpZaloName";
import SignUpAddProfile from "./pages/SignUpAddProfile";
import HomeMessage from "./pages/HomeMessage";
import Profile from "./pages/Profile";
import UpdateAvatar from "./pages/UpdateAvatar";
import Contacts from "./pages/Contacts";
import Explore from "./pages/Explore";
import Diary from "./pages/Diary";
import AccountSecurity from "./pages/AccountSecurity";
import ChangePassword from "./pages/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword";

const Stack = createStackNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            cardStyleInterpolator: ({ current }) => ({
              cardStyle: {
                opacity: current.progress,
              },
            }),
            transitionSpec: {
              open: { animation: "timing", config: { duration: 300 } },
              close: { animation: "timing", config: { duration: 300 } },
            },
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignUpOTP" component={SignUpOTP} />
          <Stack.Screen name="FAQ" component={FAQ} />
          <Stack.Screen name="SignUpZaloName" component={SignUpZaloName} />
          <Stack.Screen name="SignUpAddProfile" component={SignUpAddProfile} />
          <Stack.Screen name="HomeMessage" component={HomeMessage} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="UpdateAvatar" component={UpdateAvatar} />
          <Stack.Screen name="Contacts" component={Contacts} />
          <Stack.Screen name="Explore" component={Explore} />
          <Stack.Screen name="Diary" component={Diary} />
          <Stack.Screen name="AccountSecurity" component={AccountSecurity} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />;
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
