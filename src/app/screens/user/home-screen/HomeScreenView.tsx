/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {Text, View} from 'react-native';
import {Appbar} from '../../../../../libs/ats-native-components/src';
import {styles} from './HomeScreen.styles';
import {theme} from '../../../../config/theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {FlatList} from 'react-native-gesture-handler/lib/typescript/components/GestureComponents';

const HomeScreenView = ({navigation}: any) => {
  const renderHomeScreenView = () => {
    return <>{renderTabComponent()}</>;
  };
  const Tab = createMaterialTopTabNavigator();
  const renderTabComponent = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarGap: 0,
        tabBarScrollEnabled: true,
      }}>
      <Tab.Screen name="Sales">{() => <DataView />}</Tab.Screen>
      <Tab.Screen name="Sales Return">{() => <DataView />}</Tab.Screen>
      <Tab.Screen name="Purchase">{() => <DataView />}</Tab.Screen>
      <Tab.Screen name="Purchase Return">{() => <DataView />}</Tab.Screen>
    </Tab.Navigator>
  );
  const DataView = ({}) => {
    return (
      <View>
        <Text>fhdhfjhs</Text>
      </View>
    );
  };

  const renderAppBar = () => {
    return (
      <Appbar title={'Home screen'} backAction={() => navigation.goBack()} />
    );
  };

  return (
    <>
      {renderAppBar()}
      {renderHomeScreenView()}
    </>
  );
};

export default HomeScreenView;
