/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
// import {Appbar} from '../../../../../libs/ats-native-components/src';
import {styles} from './AddNews.styles';

import {iOSUIKit} from 'react-native-typography';
import {
  Appbar,
  DateAndTimePicker,
  InputText,
  SwitchButton,
} from '../../../../../libs/ats-native-components/src';
import {Card, List} from 'react-native-paper';

const AddNewsView = ({
  navigation,
  toggleSwitch,
  breakingNews,
  date,
  handleInputChange,
  setDate,
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
            label="Short Article"
            placeholder="i.e write short article"
            value=""
            onChangeText={text => {
              handleInputChange('shortArticle', text);
            }}
          />
        </Card>
        <Card style={{backgroundColor: 'white', padding: 10, margin: 10}}>
          <InputText
            label="Write Article"
            placeholder="i.e write article"
            value=""
            onChangeText={text => {
              handleInputChange('writeArticle', text);
            }}
          />
        </Card>
        <Card style={{backgroundColor: 'white', padding: 10, margin: 10}}>
          <InputText
            label="Meta Keyword"
            placeholder="i.e abc,xyz,zdsf"
            value=""
            onChangeText={text => {
              handleInputChange('metaKeyword', text);
            }}
          />
          <InputText
            label="Meta Description"
            placeholder="Meta Description"
            value=""
            onChangeText={text => {
              handleInputChange('metaDescription', text);
            }}
          />
        </Card>
      </ScrollView>
    </>
  );
};

export default AddNewsView;
