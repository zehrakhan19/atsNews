import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';

import {styles} from './otpverify.styles';
// import OTPVerificationSvg from '../../../assets/auth-screen-images/otp-verification.svg';
import {Button} from '../../../../../libs/ats-native-components/src';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {theme} from '../../../../config/theme';
import {iOSUIKit, systemWeights} from 'react-native-typography';

function OTPVerifyView({
  NavigateToChangeNumber,
  // isLoadingLogin,
  VerifyOtp,
  resend,
}) {
  return (
    <>
      <ScrollView>
        <View>
          {/* <View>
            <OTPVerificationSvg height={290} />
          </View> */}
          <View>
            <View>
              <Text
                style={[iOSUIKit.largeTitleEmphasized, systemWeights.regular]}>
                OTP Verification
              </Text>
              <Text style={styles.subText}>
                A 4- digit code has been sent to +91 88769 78374
              </Text>
            </View>

            <TouchableOpacity onPress={NavigateToChangeNumber}>
              <Text>Change phone number</Text>
            </TouchableOpacity>
            <View>
              <OTPInputView
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
                onCodeFilled={code => VerifyOtp(code)}
              />
            </View>

            <View style={styles.otpSubInfo}>
              <TouchableOpacity onPress={() => null}>
                <Text>{resend}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        <Button
          label="Login"
          size="large"
          callback={() => null}
          // disabled={isLoadingLogin}
          borderRadius={0}
        />
      </View>
    </>
  );
}

export default OTPVerifyView;
