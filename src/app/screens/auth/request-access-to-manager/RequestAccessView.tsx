import OTPInputView from '@twotalltotems/react-native-otp-input';
import {theme} from '../../../../config/theme';
import React from 'react';
import {View, Text, ScrollView} from 'react-native';
// import ManagerAcessCodeSvg from '../../../assets/auth-screen-images/manager-access-code.svg';
import {styles} from './requestAccessView.styles';
// import {Button} from '@ats-erp/ats-native-components';
// import {globalStyles} from '../../../styles/styles.global';

function RequestAccessView() {
  return (
    <>
      <ScrollView>
        <View>
          {/* <ManagerAcessCodeSvg height="300px" width="100%" /> */}
          <View>
            <View>
              <Text style={styles.headfont}>Enter Access Code</Text>
              <Text style={styles.subText}>
                A 4 digit code has been Providing Branch Manager
              </Text>
            </View>
            {/* OTP Input Box */}
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
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  paddingRight: 7,
                }}>
                <Text>Resend Request</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        {/* <Button
          size="large"
          label="Validate Access Code"
          callback={() => {
            return null;
          }}
          borderRadius={0}
        /> */}
      </View>
    </>
  );
}

export default RequestAccessView;
