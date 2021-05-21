import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import SplashScreen from './src/Screens/Splash';
import SelectRole from './src/Screens/Role';
import LoginScreen from './src/Screens/Login';
import SignupScreen from './src/Screens/Signup';
import GetStartedScreen from './src/Screens/GetStarted';
import ForgetPassScreen from './src/Screens/ForgetPassword';

// Advertising Setup Steps
import FirstStepScreen from './src/Screens/AdvertisingObj/FirstStep';
import SecondStepScreen from './src/Screens/AdvertisingObj/SecondStep';
import ThirdStepScreen from './src/Screens/AdvertisingObj/ThirdStep';

import PaymentScreen from './src/Screens/PaymentMethod';
import AddCardScreen from './src/Screens/AddCard';
import ImgUplaodScreen from './src/Screens/ImageUpload';
import DashboardScreen from './src/Screens/Dashboard';
import VideoEditorScreen from './src/Screens/VideoEditor';
import MyVideosScreen from './src/Screens/MyVideos';

import { VESDK, VideoEditorModal, Configuration } from 'react-native-videoeditorsdk';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="GetStarted" component={GetStartedScreen} options={{ headerShown: false }} />
        <Stack.Screen name="VideoEditor" component={VideoEditorScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentMethod" component={PaymentScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MyVideosScreen" component={MyVideosScreen} options={{ headerShown: false }} />

        {/* <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Role" component={SelectRole} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ForgetPass" component={ForgetPassScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddCard" component={AddCardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ImageUpload" component={ImgUplaodScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />

        <Stack.Screen name="FirstStep" component={FirstStepScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SecondStep" component={SecondStepScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ThirdStep" component={ThirdStepScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;