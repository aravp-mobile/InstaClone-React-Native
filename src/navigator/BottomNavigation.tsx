import {Image, StyleSheet, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screen/dashboard/Dashboard';
import Profile from '../screen/dashboard/Profile';
import Notification from '../screen/dashboard/Notification';
import Account from '../screen/dashboard/Account';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 24, width: 24}}
              source={
                focused
                  ? require('../assets/footer/shome.png')
                  : require('../assets/footer/home.png')
              }
            />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 24, width: 24}}
              source={
                focused
                  ? require('../assets/footer/suser.png')
                  : require('../assets/footer/user.png')
              }
            />
          ),
          tabBarLabel: 'Profile',
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 24, width: 24}}
              source={
                focused
                  ? require('../assets/footer/sbell.png')
                  : require('../assets/footer/bell.png')
              }
            />
          ),
          tabBarLabel: 'Notification',
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              style={{height: 24, width: 24}}
              source={
                focused
                  ? require('../assets/footer/sprofile.png')
                  : require('../assets/footer/profile.png')
              }
            />
          ),
          tabBarLabel: 'Account',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    paddingBottom: 5,
    backgroundColor: '#FFFFFF', // Background color of the tab bar
    borderTopWidth: 1, // Example border styling
    borderTopColor: '#CCCCCC',
  },
});

export default BottomNavigation;
