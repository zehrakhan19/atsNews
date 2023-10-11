/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {theme} from '../../../../config/theme';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
    </Tab.Navigator>
  );
}

export default BottomTabs;
