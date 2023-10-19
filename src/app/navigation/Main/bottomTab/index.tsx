/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {theme} from '../../../../config/theme';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../../../screens/user/home-screen';
import ReporterDashboard from '../../../screens/user/reporter-dashboard';
import Staff from '../../../screens/user/staff';
import Categories from '../../../screens/user/categories';
import ViewNews from '../../../screens/user/view-news';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcons from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTranslation} from 'react-i18next';
import ActionReaction from '../../../screens/user/action-reaction';
// import ActionReaction from '../../../assets/actionReaction.svg';

function BottomTabs() {
  const Tab = createMaterialBottomTabNavigator();
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName="home-screen"
      shifting
      activeColor={theme.colors.primary}
      inactiveColor={theme.colors.accent}
      barStyle={{backgroundColor: theme.colors.bar}}>
      <Tab.Screen
        name="home-screen"
        component={HomeScreen}
        options={{
          tabBarLabel: `${t('home')}`,
          tabBarIcon: ({color}) => (
            <FeatherIcons name={'home'} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={ReporterDashboard}
        options={{
          tabBarLabel: `${t('search')}`,
          tabBarIcon: ({color}) => (
            <AntDesignIcon name={'search1'} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ActionReactionTab"
        component={ActionReaction}
        options={{
          tabBarLabel: `${t('action-reaction')}`,
          tabBarIcon: ({color}) => (
            // <ActionReaction size={20} color={'#000'} />
            <AntDesignIcon name={'swap'} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Post Tab"
        component={ViewNews}
        options={{
          tabBarLabel: `${t('post')}`,
          tabBarIcon: ({color}) => (
            <AntDesignIcon name={'plussquareo'} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="UnreadTab"
        component={ReporterDashboard}
        options={{
          tabBarLabel: `${t('unread')}`,
          tabBarIcon: ({color}) => (
            <MaterialIcons name={'mark-email-unread'} color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="DashbardTab"
        component={ReporterDashboard}
        options={{
          tabBarLabel: `${t('dashboard')}`,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'monitor-dashboard'}
              color={color}
              size={26}
            />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Basket Tab"
        component={HomeScreen}
        options={{
          tabBarLabel: `${t('basket')}`,
          tabBarIcon: ({color}) => (
            <Ionicons name={'basket-outline'} color={color} size={26} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Staff Tab"
        component={Staff}
        options={{
          tabBarLabel: `${t('staff')}`,
          tabBarIcon: ({color}) => (
            <FeatherIcons name={'user'} color={color} size={26} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Categories Tab"
        component={Categories}
        options={{
          tabBarLabel: `${t('categories')}`,
          tabBarIcon: ({color}) => (
            <AntDesignIcon name={'copy1'} color={color} size={26} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="More Tab"
        component={HomeScreen}
        options={{
          tabBarLabel: `${t('more')}`,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name={'view-grid-plus-outline'}
              color={color}
              size={26}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default BottomTabs;
