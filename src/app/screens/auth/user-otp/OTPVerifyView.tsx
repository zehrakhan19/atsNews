/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import {styles} from './otpverify.styles';
import {Button} from '../../../../../libs/ats-native-components/src';
// import OTPInputView from '@twotalltotems/react-native-otp-input';
import {theme} from '../../../../config/theme';
import {iOSUIKit, material, systemWeights} from 'react-native-typography';
// import OtpInputs from 'react-native-otp-inputs';

function OTPVerifyView({
  // NavigateToChangeNumber,
  // isLoadingLogin,
  // VerifyOtp,
  resend,
}: any) {
  return (
    <>
      <View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={require('../../../assets/otpImage.jpg')}
            style={{
              width: 400,
              height: 280,
              resizeMode: 'contain',
            }}
          />
        </View>
        <View>
          <View style={{padding: 10, gap: 20}}>
            <Text
              style={[iOSUIKit.largeTitleEmphasized, systemWeights.regular]}>
              Verification Code
            </Text>
            <Text style={material.caption}>
              A 4- digit code has been sent to +91 88769 78374 A 6-digits code
              has been sent to your registered phone number for verification
              purpose
            </Text>
          </View>
          <View>
            {/* <OtpInputs
              handleChange={code => console.log(code)}
              numberOfInputs={6}
              autofillFromClipboard
            /> */}
            {/* <OTPInputView
              style={{width: '100%', height: 54}}
              pinCount={4}
              codeInputFieldStyle={{
                backgroundColor: theme.colors.secondary,
                borderRadius: 4,
                height: 54,
                width: 54,
                color: '#000',
              }}
              codeInputHighlightStyle={{
                borderColor: '#000',
              }}
              onCodeFilled={code => {
                VerifyOtp(code);
              }}
            /> */}
          </View>
        </View>
      </View>
      <View style={{padding: 10}}>
        <Button
          label="Login"
          size="large"
          callback={() => null}
          // disabled={isLoadingLogin}
        />
        <View style={styles.otpSubInfo}>
          <Text style={material.body1}>Didn't get a code? </Text>
          <TouchableOpacity onPress={() => null}>
            <Text style={[material.body1, {color: theme.colors.primary}]}>
              {resend}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default OTPVerifyView;
