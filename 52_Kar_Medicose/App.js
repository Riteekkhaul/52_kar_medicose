import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import { LogBox } from 'react-native';
import bottomTabBarScreen from "./components/bottomTabBarScreen";
import LoadingScreen from "./components/loadingScreen";
import signinScreen from "./screens/auth/signinScreen";
import verificationScreen from "./screens/auth/verificationScreen";
import editProfileScreen from "./screens/editProfile/editProfileScreen";
import notificationsScreen from "./screens/notifications/notificationsScreen";
import showMapScreen from "./screens/showMap/showMapScreen";
import splashScreen from "./screens/splashScreen";

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Splash" component={splashScreen} />
        <Stack.Screen name="Signin" component={signinScreen} />
        <Stack.Screen name="Verification" component={verificationScreen} />
        <Stack.Screen name="BottomTabBar" component={bottomTabBarScreen} />
        <Stack.Screen name="Notifications" component={notificationsScreen} />
        <Stack.Screen name="EditProfile" component={editProfileScreen} />
        <Stack.Screen name="ShowMap" component={showMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;