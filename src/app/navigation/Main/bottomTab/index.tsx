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
<<<<<<< HEAD
import CategoriesIcon from 'react-native-vector-icons/AntDesign';
import {useTranslation} from 'react-i18next';
import {Image} from 'react-native';
=======
import Copy1 from 'react-native-vector-icons/AntDesign';
import Staff from '../../../screens/user/staff';
import ViewNews from '../../../screens/user/view-news';
>>>>>>> 895f4e9d5b0580176f22d82d7de1031d1b9cb1f3

function BottomTabs() {
  const Tab = createMaterialBottomTabNavigator();
  const {t} = useTranslation();

  return (
    <Tab.Navigator
      initialRouteName="home-screen"
      shifting={false}
      activeColor={theme.colors.primary}
      barStyle={{backgroundColor: '#ffffff'}}>
      <Tab.Screen
        name="home-screen"
        component={HomeScreen}
        options={{
          tabBarLabel: `${t('home')}`,
          tabBarIcon: ({color}) => (
            <HomeScreenIcon name={'home'} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchTab"
        component={ReporterDashboard}
        options={{
          tabBarLabel: `${t('search')}`,
          tabBarIcon: ({color}) => (
            <DashboardIcon name={'monitor-dashboard'} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ActionReactionTab"
        component={ReporterDashboard}
        options={{
          tabBarLabel: `${t('action-reaction')}`,
          tabBarIcon: ({color}) => (
            <Image
              source={require('../../../assets/action.png')}
              style={{height: null, width: null, flex: 1, c}}
            />
            // <DashboardIcon name={'monitor-dashboard'} color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="DashbardTab"
        component={ReporterDashboard}
        options={{
          tabBarLabel: `${t('dashboard')}`,
          tabBarIcon: ({color}) => (
            <DashboardIcon name={'monitor-dashboard'} color={color} size={26} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Basket Tab"
        component={HomeScreen}
        options={{
          tabBarLabel:`${t("basket")`},
          tabBarIcon: ({color}) => (
            <BasketIcon name={'basket-outline'} color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
<<<<<<< HEAD
        name="Post Tab"
        component={HomeScreen}
=======
        name=" Post Tab"
        component={ViewNews}
>>>>>>> 895f4e9d5b0580176f22d82d7de1031d1b9cb1f3
        options={{
          tabBarLabel: `${t('post')}`,
          tabBarIcon: ({color}) => (
            <PostIcon name={'newspaper-outline'} color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
<<<<<<< HEAD
        name="UnreadTab"
        component={ReporterDashboard}
        options={{
          tabBarLabel: `${t('unread')}`,
          tabBarIcon: ({color}) => (
            <DashboardIcon name={'monitor-dashboard'} color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Customers Tab"
        component={HomeScreen}
        options={{
          tabBarLabel:`${t("customers")}`,
=======
        name=" Customers Tab"
        component={Staff}
        options={{
          tabBarLabel: 'Staff',
>>>>>>> 895f4e9d5b0580176f22d82d7de1031d1b9cb1f3
          tabBarIcon: ({color}) => (
            <Customer name={'user'} color={color} size={26} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Categories Tab"
        component={Categories}
        options={{
          tabBarLabel: `${t('categories')}`,
          tabBarIcon: ({color}) => (
            <CategoriesIcon name={'copy1'} color={color} size={26} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="More Tab"
        component={HomeScreen}
        options={{
          tabBarLabel: `${t('more')}`,
          tabBarIcon: ({color}) => (
            <MoreIcons
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
