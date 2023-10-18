/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
// import {Appbar} from '../../../../../libs/ats-native-components/src';
import {styles} from './AddNews.styles';

import {iOSUIKit, material} from 'react-native-typography';
import {
  ActionCard,
  Appbar,
  BottomSheet,
  Button,
  DateAndTimePicker,
  ImagePicker,
  InputText,
  SwitchButton,
} from '../../../../../libs/ats-native-components/src';
import Autocomplete from 'react-native-autocomplete-input';
import {Card, List} from 'react-native-paper';
import {theme} from '../../../../config/theme';

const AddNewsView = ({
  navigation,
  toggleSwitch,
  breakingNews,
  date,
  handleInputChange,
  setDate,
  categoriesData,
  setCategory,
  category,
  language,
  setLanguage,
  languagesData,
  newsSpeciality,
  setNewsSpeciality,
  newsSpecialityData,
  handleOpenLibrary,
  news,
}: any) => {
  return (
    <>
      <Appbar
        title="Add News"
        backAction={() => {
          navigation.goBack();
        }}
      />
      <ScrollView>
        <Card style={{backgroundColor: 'white', padding: 10, margin: 10}}>
          <InputText
            label="Name Title"
            style={{marginVertical: 10}}
            placeholder="i.e Title"
            value=""
            onChangeText={text => {
              handleInputChange('name', text);
            }}
          />
          <View style={{width: '100%'}}>
            <InputText
              editable={false}
              label="Post Date"
              style={{marginVertical: 10}}
              placeholder=""
              value={new Date(date).toDateString()}
              right={
                <DateAndTimePicker
                  callback={value => {
                    setDate(value);
                    handleInputChange(
                      'postDate',
                      new Date(value).toISOString(),
                    );
                  }}
                />
              }
            />
          </View>
        </Card>
        <View style={{marginHorizontal: 10, marginVertical: 5}}>
          <Text style={[iOSUIKit.subheadEmphasized, {padding: 3}]}>
            Categories
          </Text>

          <Card
            style={{backgroundColor: 'white', padding: 10, marginVertical: 5}}>
            <ActionCard
              mainText={category.name}
              actionText={category.actionText}
              color="#D80000"
              callback={() =>
                setCategory((prev: any) => ({...prev, bottomSheet: true}))
              }
              // error={category?.name === 'Select Branch' && error}
            />
            <BottomSheet
              isOpen={category?.bottomSheet}
              onClose={() =>
                setCategory((prev: any) => ({...prev, bottomSheet: false}))
              }
              height={400}>
              <Autocomplete
                data={categoriesData || []}
                autoFocus={true}
                style={{color: '#000'}}
                placeholderTextColor={'#777'}
                placeholder="Select Category"
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
                          setCategory((prev: any) => ({
                            ...prev,
                            bottomSheet: false,
                            name: item?.item?.fullTitle,
                            actionText: item?.item?.shortTitle,
                          }));
                          handleInputChange('branch', item?.item?.shortTitle);
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
                          {item?.item?.fullTitle}
                        </Text>
                      </TouchableOpacity>
                    );
                  },
                }}
              />
            </BottomSheet>
          </Card>
        </View>
        <View style={{marginHorizontal: 10, marginVertical: 5}}>
          <Text style={[iOSUIKit.subheadEmphasized, {padding: 3}]}>
            Language
          </Text>

          <Card
            style={{backgroundColor: 'white', padding: 10, marginVertical: 5}}>
            <ActionCard
              mainText={language.name}
              actionText={language.actionText}
              color="#D80000"
              callback={() =>
                setLanguage((prev: any) => ({...prev, bottomSheet: true}))
              }
              // error={category?.name === 'Select Branch' && error}
            />
            <BottomSheet
              isOpen={language?.bottomSheet}
              onClose={() =>
                setLanguage((prev: any) => ({...prev, bottomSheet: false}))
              }
              height={400}>
              <Autocomplete
                data={languagesData || []}
                autoFocus={true}
                style={{color: '#000'}}
                placeholderTextColor={'#777'}
                placeholder="Select language"
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
                          setLanguage((prev: any) => ({
                            ...prev,
                            bottomSheet: false,
                            name: item?.item?.fullTitle,
                            actionText: item?.item?.shortTitle,
                          }));
                          handleInputChange('branch', item?.item?.shortTitle);
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
                          {item?.item?.fullTitle}
                        </Text>
                      </TouchableOpacity>
                    );
                  },
                }}
              />
            </BottomSheet>
          </Card>
        </View>
        <View style={{marginHorizontal: 10, marginVertical: 5}}>
          <Text style={[iOSUIKit.subheadEmphasized, {padding: 3}]}>
            News Speciality
          </Text>

          <Card
            style={{backgroundColor: 'white', padding: 10, marginVertical: 5}}>
            <ActionCard
              mainText={newsSpeciality.name}
              actionText={newsSpeciality.actionText}
              color={theme.colors.primary}
              callback={() =>
                setNewsSpeciality((prev: any) => ({...prev, bottomSheet: true}))
              }
              // error={category?.name === 'Select Branch' && error}
            />
            <BottomSheet
              isOpen={newsSpeciality?.bottomSheet}
              onClose={() =>
                setNewsSpeciality((prev: any) => ({
                  ...prev,
                  bottomSheet: false,
                }))
              }
              height={400}>
              <Autocomplete
                data={newsSpecialityData || []}
                autoFocus={true}
                style={{color: '#000'}}
                placeholderTextColor={'#777'}
                placeholder="Select news speciality"
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
                          setNewsSpeciality((prev: any) => ({
                            ...prev,
                            bottomSheet: false,
                            name: item?.item?.fullTitle,
                            actionText: item?.item?.shortTitle,
                          }));
                          handleInputChange('branch', item?.item?.shortTitle);
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
                          {item?.item?.fullTitle}
                        </Text>
                      </TouchableOpacity>
                    );
                  },
                }}
              />
            </BottomSheet>
          </Card>
        </View>

        <View>
          <Text>Upload Image</Text>
          <ActionCard
            mainText={news?.image ? news?.image : 'Upload Image'}
            callback={() => handleOpenLibrary()}
          />
        </View>

        {/* <ImagePicker /> */}

        <Card style={{backgroundColor: 'white', padding: 1, margin: 10}}>
          <List.Item
            title="Breaking News"
            right={() => (
              <SwitchButton
                value={breakingNews}
                onValueChange={() => {
                  toggleSwitch();
                  handleInputChange('breakingNews', !breakingNews);
                }}
              />
            )}
          />
        </Card>
        <Card style={{backgroundColor: 'white', padding: 10, margin: 10}}>
          <InputText
            style={{marginVertical: 10, paddingVertical: 5}}
            label="Short Article"
            multiline
            placeholder="i.e write short article"
            value=""
            multiline
            onChangeText={text => {
              handleInputChange('shortArticle', text);
            }}
          />
        </Card>
        <Card style={{backgroundColor: 'white', padding: 10, margin: 10}}>
          <InputText
            style={{marginVertical: 10, paddingVertical: 5}}
            label="Write Article"
            multiline
            placeholder="i.e write article"
            value=""
            multiline
            onChangeText={text => {
              handleInputChange('writeArticle', text);
            }}
          />
        </Card>
        <Card
          style={{
            backgroundColor: 'white',
            padding: 10,
            marginBottom: 30,
            marginHorizontal: 10,
            marginTop: 10,
          }}>
          <InputText
            label="Meta Keyword"
            style={{marginVertical: 10, paddingVertical: 5}}
            multiline
            placeholder="i.e abc,xyz,zdsf"
            value=""
            onChangeText={text => {
              handleInputChange('metaKeyword', text);
            }}
          />
          <InputText
            style={{marginVertical: 10, paddingVertical: 5}}
            label="Meta Description"
            multiline
            placeholder="Meta Description"
            value=""
            multiline
            onChangeText={text => {
              handleInputChange('metaDescription', text);
            }}
          />
        </Card>
      </ScrollView>
      <View
        style={{
          paddingVertical: 20,
          paddingHorizontal: 10,
          backgroundColor: 'white',
        }}>
        <Button
          mode="outlined"
          label="Add News"
          callback={() => null}
          color={theme.colors.primary}
        />
      </View>
    </>
  );
};

export default AddNewsView;
