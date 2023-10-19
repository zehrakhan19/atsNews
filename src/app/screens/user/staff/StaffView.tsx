/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Appbar, Fab} from '../../../../../libs/ats-native-components/src';
import {styles} from './Staff.styles';
import {theme} from '../../../../config/theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Divider, List} from 'react-native-paper';
import {iOSUIKit} from 'react-native-typography';

const StaffView = ({
  navigation,
  StaffData,
  handleNavigateToAddEmployee,
}: any) => {
  const Item = (item: any) => {
    return (
      <TouchableOpacity>
        <List.Item
          style={{
            backgroundColor: 'white',
          }}
          title={
            <Text style={iOSUIKit.bodyEmphasized}>{item?.item?.title}</Text>
          }
          description={
            <View>
              <Text style={{color: 'grey'}}>{item?.item?.designation}</Text>
              <Text style={{color: 'grey'}}>{item?.item?.address}</Text>
            </View>
          }
          // left={props => (
          //   {item?.item?.image ? <Image
          //       {...props}
          //       source={{
          //         uri: 'https://cdn3.vectorstock.com/i/1000x1000/35/52/placeholder-rgb-color-icon-vector-32173552.jpg',
          //       }}

          //     />:null}
          //   )}

          right={props => (
            <Text {...props} style={{color: `${theme.colors.primary}`}}>
              {item?.item?.employeeType}
            </Text>
          )}
        />
        <Divider />
      </TouchableOpacity>
    );
  };
  const EmployeeList = ({data}: any) => {
    return (
      <>
        <ScrollView>
          <FlatList
            data={data}
            renderItem={({item}: any) => <Item item={item} />}
            keyExtractor={item => item?.id}
          />
        </ScrollView>
        <Fab
          icon="plus"
          color="white"
          style={styles.fab}
          callback={() => {
            handleNavigateToAddEmployee();
          }}
        />
      </>
    );
  };
  const Tab = createMaterialTopTabNavigator();
  const renderTabComponent = () => (
    <Tab.Navigator
      screenOptions={{
        tabBarGap: 0,
        tabBarScrollEnabled: true,
      }}>
      <Tab.Screen name="All">
        {() => <EmployeeList data={StaffData} />}
      </Tab.Screen>
      <Tab.Screen name="Reporter">
        {() => <EmployeeList data={[]} />}
      </Tab.Screen>
      <Tab.Screen name="Editor">{() => <EmployeeList data={[]} />}</Tab.Screen>
    </Tab.Navigator>
  );
  return (
    <>
      <Appbar title="Staff" search backAction={() => navigation.goBack()} />
      {renderTabComponent()}
    </>
  );
};

export default StaffView;
