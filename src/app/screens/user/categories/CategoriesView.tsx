/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  PermissionsAndroid,
} from 'react-native';

import uploadImg from '../../../assets/uploadImg.png';

import {iOSUIKit} from 'react-native-typography';
import {
  Appbar,
  BottomSheet,
  Button,
  Fab,
  InputText,
} from '../../../../../libs/ats-native-components/src';

import {Divider, List} from 'react-native-paper';
import {theme} from '../../../../config/theme';
import {styles} from './Categories.styles';

const CategoriesView = ({
  navigation,
  categoryData,
  isOpen,
  setIsOpen,
  hanleOpenLibrary,
  imageUri,
  handleInputChange,
  addCategory,
  setAddCategoryInitialState,
}: any) => {
  const handleAddCategory = () => {
    setIsOpen(!isOpen);
  };
  const Item = (item: any) => {
    return (
      <TouchableOpacity>
        <List.Item
          style={{
            backgroundColor: 'white',
          }}
          title={<Text style={iOSUIKit.body}>{item?.item?.categoryName}</Text>}
          description={
            <View>
              <Text style={{color: 'black'}}>
                {item?.item?.parentCategoryName}
              </Text>
            </View>
          }
          //  left={props => (
          //   {item?.item?.image ? <Image
          //       {...props}
          //       source={{
          //         uri: 'https://cdn3.vectorstock.com/i/1000x1000/35/52/placeholder-rgb-color-icon-vector-32173552.jpg',
          //       }}
          //       style={styles.imgStyles}
          //     />:null}
          //   )}
          right={props => (
            <Text {...props} style={{color: 'black'}}>
              Edit
            </Text>
          )}
        />
        <Divider />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Appbar
        title="Categories"
        search
        backAction={() => navigation.goBack()}
      />

      <ScrollView>
        <FlatList
          data={categoryData}
          renderItem={({item}: any) => <Item item={item} />}
          keyExtractor={item => item?.id}
        />
      </ScrollView>
      <Fab
        icon="plus"
        color="white"
        style={styles.fab}
        callback={() => {
          handleAddCategory();
        }}
      />
      {isOpen ? (
        <BottomSheet
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(!isOpen);
            setAddCategoryInitialState();
          }}
          height={400}>
          <ScrollView style={{padding: 10}}>
            <Text
              style={[iOSUIKit.body, {color: 'black', paddingVertical: 10}]}>
              ADD CTEGORY DETAILS
            </Text>
            <Divider />
            <View>
              {addCategory?.image === null || addCategory?.image === '' ? (
                <TouchableOpacity onPress={() => hanleOpenLibrary()}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignContent: 'center',
                      width: 150,
                      height: 150,
                    }}>
                    <Image
                      source={uploadImg}
                      style={{height: 100, width: 100, marginHorizontal: 100}}
                    />
                  </View>
                </TouchableOpacity>
              ) : (
                <Image
                  source={{uri: addCategory?.image}}
                  style={{height: 125, width: 125, marginLeft: 85}}
                />
              )}
              <InputText
                style={{marginVertical: 10}}
                placeholder="Enter Category Name"
                value={addCategory?.categoryName}
                onChangeText={text => {
                  handleInputChange('categoryName', text);
                }}
              />
              <InputText
                style={{marginVertical: 10}}
                placeholder="Enter Parent Category Name"
                value={addCategory?.parentCategoryName}
                onChangeText={text => {
                  handleInputChange('parentCategoryName', text);
                }}
              />
              <View style={{paddingBottom: 20}}>
                <Button
                  mode="contained"
                  label="Add Category"
                  callback={() => null}
                  color={theme.colors.primary}
                />
              </View>
            </View>
          </ScrollView>
        </BottomSheet>
      ) : null}
    </>
  );
};

export default CategoriesView;
