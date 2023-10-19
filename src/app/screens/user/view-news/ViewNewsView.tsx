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
import {
  Appbar,
  BottomSheet,
  Fab,
} from '../../../../../libs/ats-native-components/src';
import {styles} from './ViewNews.styles';
import {theme} from '../../../../config/theme';
import viewnews from '../../../assets/viewnews.png';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Autocomplete from 'react-native-autocomplete-input';
import {Divider, List} from 'react-native-paper';
import {iOSUIKit, material} from 'react-native-typography';

const ViewNewsView = ({
  navigation,
  newsData,
  handleNavigateToAddNews,
  publishedStatus,
  setPublishedStatus,
}: any) => {
  const data = [
    {
      published: 'Published',
    },
    {
      published: 'UnPublished',
    },
  ];
  const Item = (item: any) => {
    return (
      <>
        <TouchableOpacity
          style={{
            paddingHorizontal: 3,
            flex: 1,
            flexDirection: 'row',
            marginVertical: 5,
            height: 220,
          }}
          key={item?.item?.id}>
          <View style={{width: 150, height: 220, flex: 1}}>
            <Image
              source={viewnews}
              style={{width: '100%', height: '100%', margin: 0}}
            />
          </View>
          <View
            style={{
              flex: 1.5,
              flexDirection: 'column',
              backgroundColor: 'white',
              borderTopRightRadius: 15,
              borderBottomRightRadius: 15,
            }}>
            <View style={{flexDirection: 'column', padding: 10}}>
              <Text
                style={[
                  {color: 'black', paddingVertical: 5},
                  iOSUIKit.caption2EmphasizedObject,
                ]}>
                {item?.item?.heading}
              </Text>
              <Text
                style={[
                  {color: `${theme.colors.secondary}`},
                  iOSUIKit.caption2,
                ]}>
                {item?.item?.description}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                setPublishedStatus(!publishedStatus);
                console.log('clicked');
              }}
              style={{
                flex: 1,
                justifyContent: 'center',
                paddingBottom: 4,
                borderBottomRightRadius: 15,
                backgroundColor: item?.item?.isPublished
                  ? `${theme.colors.green}`
                  : `${theme.colors.primary}`,
              }}>
              <Text style={{textAlign: 'center', color: 'white'}}>
                {item?.item?.isPublished ? 'Published' : 'UnPublished'}
              </Text>
            </TouchableOpacity>
            <BottomSheet
              isOpen={publishedStatus?.bottomSheet}
              onClose={() => setPublishedStatus(!publishedStatus)}>
              <View style={{backgroundColor: 'black'}}>
                <Text>published</Text>
              </View>
              {/* <Autocomplete
                data={data}
                autoFocus={true}
                style={{color: '#000'}}
                placeholderTextColor={'#777'}
                placeholder="Select News type"
                inputContainerStyle={{
                  margin: 10,
                  padding: 10,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  backgroundColor: 'white',
                }}
                flatListProps={{
                  keyExtractor: ({_, idx}: any) => idx,
                  renderItem: (item: any) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          setPublishedStatus((prev: any) => ({
                            ...prev,
                            bottomSheet: false,
                            name: item?.item?.published,
                          }));
                          // handleInputChange('emptype', item?.item?.empType);
                        }}>
                        <Text
                          style={[
                            material.body1,
                            {
                              padding: 15,
                              borderBottomWidth: 1,
                              borderBottomColor: '#e2e2e2',
                            },
                          ]}>
                          {item?.item?.published}
                        </Text>
                      </TouchableOpacity>
                    );
                  },
                }}
              /> */}
            </BottomSheet>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  const NewsList = ({data}: any) => {
    return (
      <>
        {/* <ScrollView> */}
        <FlatList
          data={newsData}
          renderItem={({item}: any) => <Item item={item} />}
          keyExtractor={item => item?.id}
        />
        {/* </ScrollView> */}
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
      }}>
      <Tab.Screen name="All">{() => <NewsList data={[]} />}</Tab.Screen>
      <Tab.Screen name="Published">{() => <NewsList data={[]} />}</Tab.Screen>
      <Tab.Screen name="UnPublished">{() => <NewsList data={[]} />}</Tab.Screen>
    </Tab.Navigator>
  );
  return (
    <>
      <Appbar title="View News" search backAction={() => navigation.goBack()} />
      {renderTabComponent()}
    </>
  );
};

export default ViewNewsView;
