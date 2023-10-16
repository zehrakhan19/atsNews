/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {theme} from '../../../../config/theme';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../../../screens/user/home-screen';
import ReporterDashboard from '../../../screens/user/reporter-dashboard';
import DashboardIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Customer from 'react-native-vector-icons/Feather';
import HomeScreenIcon from 'react-native-vector-icons/Feather';
import BasketIcon from 'react-native-vector-icons/Ionicons';
import PostIcon from 'react-native-vector-icons/Ionicons';
import MoreIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Categories from '../../../screens/user/categories';

function BottomTabs() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      shifting={false}
      activeColor={theme.colors.primary}
      barStyle={{backgroundColor: '#ffffff'}}>
      <Tab.Screen
        name="home-screen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <HomeScreenIcon name={'home'} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="DashbardTab"
        component={ReporterDashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({color}) => (
            <DashboardIcon name={'monitor-dashboard'} color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name=" Basket Tab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Basket',
          tabBarIcon: ({color}) => (
            <BasketIcon name={'basket-outline'} color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name=" Post Tab"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Post',
          tabBarIcon: ({color}) => (
            <PostIcon name={'newspaper-outline'} color={color} size={26} />
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
        name="Categories Tab"
        component={Categories}
        options={{
          tabBarLabel: 'Categories',
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
            <MoreIcons
              name={'view-grid-plus-outline'}
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
