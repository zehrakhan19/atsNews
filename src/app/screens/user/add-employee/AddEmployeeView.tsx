/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
// import {Appbar} from '../../../../../libs/ats-native-components/src';
import {styles} from './AddEmployee.styles';

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

const AddEmployeeView = ({
  navigation,
  employeeType,
  setEmployeeType,
  data,
  date,
  setDate,
  handleInputChange,
  employee,
  address,
  handlePincodeSearch,
  handleWorkAreaSearch,
}: any) => {
  return (
    <>
      <Appbar
        title="Employee Onboarding"
        backAction={() => navigation.goBack()}
      />
      <ScrollView>
        <View style={{marginHorizontal: 10, marginVertical: 5}}>
          <Text style={[iOSUIKit.subheadEmphasized, {padding: 3}]}>
            EmployeeType
          </Text>

          <Card
            style={{backgroundColor: 'white', padding: 10, marginVertical: 5}}>
            <ActionCard
              mainText={employeeType.name}
              callback={() =>
                setEmployeeType((prev: any) => ({...prev, bottomSheet: true}))
              }
              // error={category?.name === 'Select Branch' && error}
            />
            <BottomSheet
              isOpen={employeeType?.bottomSheet}
              onClose={() =>
                setEmployeeType((prev: any) => ({...prev, bottomSheet: false}))
              }
              height={300}>
              <Autocomplete
                data={data}
                autoFocus={true}
                style={{color: '#000'}}
                placeholderTextColor={'#777'}
                placeholder="Select employee type"
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
                          setEmployeeType((prev: any) => ({
                            ...prev,
                            bottomSheet: false,
                            name: item?.item?.empType,
                          }));
                          handleInputChange('emptype', item?.item?.empType);
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
                          {item?.item?.empType}
                        </Text>
                      </TouchableOpacity>
                    );
                  },
                }}
              />
            </BottomSheet>
          </Card>
        </View>
        <Card style={{backgroundColor: 'white', padding: 10, margin: 10}}>
          <InputText
            label="Name"
            style={{marginVertical: 3}}
            placeholder="i.e Shiva"
            value={employee.name}
            onChangeText={text => {
              handleInputChange('name', text);
            }}
          />
          <InputText
            label="Email"
            style={{marginVertical: 3}}
            placeholder="i.e Shiva@gmail.com"
            value={employee.email}
            onChangeText={text => {
              handleInputChange('email', text);
            }}
          />
          <InputText
            label="Mobile Number"
            style={{marginVertical: 3}}
            placeholder="i.e 919999999999"
            value={employee.mobileNumber}
            onChangeText={text => {
              handleInputChange('mobileNumber', text);
            }}
          />
          <View style={{width: '100%'}}>
            <InputText
              editable={false}
              label="Hire Date"
              style={{marginVertical: 3}}
              placeholder=""
              value={new Date(date).toDateString()}
              right={
                <DateAndTimePicker
                  callback={value => {
                    setDate(value);
                    handleInputChange(
                      'hireDate',
                      new Date(value).toISOString(),
                    );
                  }}
                />
              }
            />
            <Text style={iOSUIKit.caption2}>
              The firstday of employeement for this person
            </Text>
          </View>
          <InputText
            label="Job Title"
            style={{marginVertical: 3}}
            placeholder="Report"
            value={employee.jobTitle}
            onChangeText={text => {
              handleInputChange('jobTitle', text);
            }}
          />
          <InputText
            label="Search Pincode"
            style={{marginVertical: 3}}
            placeholder="i.e 505301"
            value={employee.searchPincode}
            onChangeText={text => {
              handlePincodeSearch('searchPincode', text);
            }}
          />
          <InputText
            label="Work Area"
            style={{marginVertical: 3}}
            placeholder="i.e Bhiknoor"
            value={address ? address[0]?.office : employee.workArea}
            onChangeText={text => {
              handleWorkAreaSearch('workArea', text);
            }}
          />
          <View style={{margin: 10}}>
            <Text>{address[0]?.state}</Text>
            <Text>{address[0]?.city}</Text>
            <Text>{address[0]?.district}</Text>
            <Text>{address[0]?.village}</Text>
          </View>
        </Card>
      </ScrollView>
      <View
        style={{
          paddingVertical: 20,
          backgroundColor: 'white',
          paddingHorizontal: 10,
        }}>
        <Button
          mode="contained"
          label="Add Category"
          callback={() => null}
          color={theme.colors.primary}
        />
      </View>
    </>
  );
};

export default AddEmployeeView;
