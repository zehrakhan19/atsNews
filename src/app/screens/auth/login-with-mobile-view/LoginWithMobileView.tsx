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
import {StyleSheet} from 'react-native';
import React from 'react';
import {
  iOSUIKit,
  systemWeights,
  iOSColors,
  material,
} from 'react-native-typography';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {theme} from '../../../../config/theme';
import {Divider} from 'react-native-paper';

function LoginWithMobileView({
  navigation,
  sendOtpDisable,
  mobileNumber,
  sendOTP,
}: // checkMobileNumberValidity,
// isLoadingLogin,
any) {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.skipButtonContainer}>
              <TouchableOpacity
                style={styles.skipButton}
                onPress={() => {
                  navigation.navigate('main');
                }}>
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
            <View style={styles.imageContainer}>
              <Image
                source={require('../../../assets/loginImage.png')}
                style={{
                  width: 400,
                  height: 470,
                  resizeMode: 'contain',
                }}
              />
              <View style={{position: 'absolute', top: 0}}>
                <Image
                  source={require('../../../assets/logo.png')}
                  style={{
                    width: 160,
                    height: 450,
                    resizeMode: 'contain',
                  }}
                />
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Text
                style={[
                  iOSUIKit.largeTitleEmphasized,
                  systemWeights.bold,
                  {color: '#fff', fontStyle: 'italic'},
                ]}>
                Get Read with Kaburlu,
              </Text>
              <View style={{flexDirection: 'row', gap: 4}}>
                <Text
                  style={[
                    iOSUIKit.subhead,
                    systemWeights.regular,
                    {color: '#fff'},
                  ]}>
                  if you are new /
                </Text>
                <Text
                  style={[
                    iOSUIKit.subheadEmphasizedObject,
                    systemWeights.bold,
                    {color: '#fff'},
                  ]}>
                  Create New
                </Text>
              </View>
              <View style={{paddingVertical: 14}}>
                <InputText
                  placeholder="Enter Mobile Number"
                  value={mobileNumber}
                  onChangeText={
                    text => null //checkMobileNumberValidity(text)
                  }
                  keyboardType="number-pad"
                  maxLength={10}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
        <View
          style={{
            backgroundColor: theme.colors.primary,
            justifyContent: 'space-between',
          }}>
          <View style={{padding: 10}}>
            <Button
              label="Continue"
              size="large"
              callback={() => {
                // sendOTP();
                navigation.navigate('Verfiy with OTP');
              }}
              mode="elevated"
              filled={false}
              // disabled={sendOtpDisable || isLoadingLogin}
            />
          </View>
          <Divider style={{backgroundColor: '#fff'}} />
          <Text style={[material.caption, styles.bottomText]}>
            This is protected by Google Privacy Policy and Terms of Service
            apply
          </Text>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

export const styles = StyleSheet.create({
  skipButtonContainer: {
    position: 'relative',
  },
  skipButton: {
    padding: 30,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 9,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    gap: 8,
    padding: 10,
    paddingTop: 50,
    backgroundColor: theme.colors.primary,
  },
  bottomText: {alignSelf: 'center', color: '#fff', paddingVertical: 15},
});

export default LoginWithMobileView;
