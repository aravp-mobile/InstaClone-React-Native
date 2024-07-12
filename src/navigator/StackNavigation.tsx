import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screen/auth/Login';
import Signup from '../screen/auth/SignUp';
import StoryView from '../components/StoryView';
import Dashboard from '../screen/dashboard/Dashboard';
import BottomNavigation from './BottomNavigation';
import Notification from '../screen/dashboard/Notification';
import Splash from '../screen/auth/Splash';
import OTPScreen from '../screen/auth/OtpScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Otp" component={OTPScreen} />
        <Stack.Screen name="SignUp" component={Signup} />
        <Stack.Screen name="Home" component={Dashboard} />
        <Stack.Screen name="Story" component={StoryView} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Dashboard" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
