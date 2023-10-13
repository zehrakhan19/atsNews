/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-sparse-arrays */
import {Button, InputText} from '../../../../../libs/ats-native-components/src';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';

import React from 'react';
import {iOSUIKit, systemWeights, iOSColors} from 'react-native-typography';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

function LoginWithMobileView({
  navigation,
  sendOtpDisable,
  mobileNumber,
  sendOTP,
  checkMobileNumberValidity,
  // isLoadingLogin,
}) {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={{alignItems: 'flex-end', padding: 20}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('home-screen')}>
                <Text
                  style={[
                    iOSUIKit.subheadEmphasizedObject,
                    systemWeights.bold,
                    ,
                    {color: iOSColors.gray},
                  ]}>
                  SKIP
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../../assets/loginImage.jpg')}
                style={{
                  width: 450,
                  height: 300,
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View style={{gap: 8, padding: 10}}>
              <Text
                style={[iOSUIKit.largeTitleEmphasized, systemWeights.regular]}>
                Hey,
              </Text>
              <Text
                style={[iOSUIKit.largeTitleEmphasized, systemWeights.regular]}>
                Login Now
              </Text>
              <View style={{flexDirection: 'row', gap: 4}}>
                <Text style={[iOSUIKit.subhead, systemWeights.regular]}>
                  if you are new /
                </Text>
                <Text
                  style={[
                    iOSUIKit.subheadEmphasizedObject,
                    systemWeights.bold,
                  ]}>
                  Create New
                </Text>
              </View>
              <View style={{paddingVertical: 14}}>
                <InputText
                  placeholder="Enter Mobile Number"
                  value={mobileNumber}
                  onChangeText={text => checkMobileNumberValidity(text)}
                  keyboardType="number-pad"
                  maxLength={10}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View style={{padding: 10}}>
          <Button
            label="Login"
            size="large"
            callback={() => {
              sendOTP();
            }}
            disabled={sendOtpDisable || isLoadingLogin}
          />
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default LoginWithMobileView;
