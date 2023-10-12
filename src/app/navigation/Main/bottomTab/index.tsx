/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {theme} from '../../../../config/theme';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Customer from 'react-native-vector-icons/Feather';
import HomeScreen from '../../../screens/user/home-screen';

function BottomTabs() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      shifting={false}
      activeColor={theme.colors.primary}
      barStyle={{backgroundColor: '#ffffff'}}>
      <Tab.Screen
        name="DashbardTab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'monitor-dashboard'}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name=" Basket Tab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Basket',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'monitor-dashboard'}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name=" Post Tab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Post',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'monitor-dashboard'}
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name=" Customers Tab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Customers',
          tabBarIcon: ({color}) => (
            <Customer name={'user'} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name=" More Tab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'monitor-dashboard'}
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
