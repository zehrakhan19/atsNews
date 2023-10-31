/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Appbar,
  BottomSheet,
  Fab,
} from '../../../../../libs/ats-native-components/src';
import {styles} from './ViewNews.styles';
import {theme} from '../../../../config/theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {iOSUIKit, material} from 'react-native-typography';
import {Divider} from 'react-native-paper';

const ViewNewsView = ({
  navigation,
  newsData,
  handleNavigateToAddNews,
  publishedStatus,
  setPublishedStatus,
  handleChangeStatus,
}: any) => {
  const Item = ({item}: any) => {
    return (
      <View style={styles.container} key={item?.id}>
        <View style={{flex: 1}}>
          <Image
            source={require('../../../assets/viewnews.png')}
            style={styles.cardInner}
          />
        </View>
        <View style={styles.contentWrapper}>
          <View style={styles.headingWrapper}>
            <Text style={[iOSUIKit.caption2Emphasized, {fontWeight: 'bold'}]}>
              {item?.heading}
            </Text>
            <Text style={[iOSUIKit.caption2]}>{item?.description}</Text>
          </View>

          <View
            style={[
              styles.articleButton,
              {
                backgroundColor: item?.isPublished
                  ? theme.colors.green
                  : theme.colors.primary,
              },
            ]}>
            <TouchableOpacity onPress={() => item?.onPress()}>
              <Text style={{textAlign: 'center', color: 'white'}}>
                {item?.isPublished ? 'Published' : 'UnPublished'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const renderBottomSheet = () => (
    <BottomSheet
      isOpen={publishedStatus}
      onClose={() => setPublishedStatus(false)}
      height={200}>
      <View>
        <Text style={[material.body2, styles.bottomSheetHeader]}>
          Select News Status
        </Text>
        <Divider />
        <View>
          <TouchableOpacity
            style={styles.bottomSheetOption}
            onPress={() => handleChangeStatus('Unpublished')}>
            <Text style={iOSUIKit.bodyEmphasized}>Unpublished</Text>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity
            style={styles.bottomSheetOption}
            onPress={() => handleChangeStatus('Published')}>
            <Text style={iOSUIKit.bodyEmphasized}>Published</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
  const DataView = ({data}: any) => {
    return (
      <>
        <FlatList
          data={data}
          renderItem={({item}: any) => <Item item={item} />}
          keyExtractor={item => item?.id}
        />
        <Fab
          icon="plus"
          color="white"
          style={styles.fab}
          callback={() => {
            handleNavigateToAddNews();
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
        tabBarItemStyle: {width: Dimensions.get('window').width / 3},
        tabBarLabelStyle: {color: theme.colors.accent},
        tabBarStyle: {backgroundColor: theme.colors.bar},
        tabBarIndicatorStyle: {backgroundColor: theme.colors.primary},
      }}>
      <Tab.Screen name="All">{() => <DataView data={newsData} />}</Tab.Screen>
      <Tab.Screen name="Published">
        {() => <DataView data={newsData} />}
      </Tab.Screen>
      <Tab.Screen name="UnPublished">
        {() => <DataView data={newsData} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
  return (
    <>
      {/* <Appbar title="View News" search backAction={() => navigation.goBack()} /> */}
      {renderTabComponent()}
      {renderBottomSheet()}
    </>
  );
};

export default ViewNewsView;
