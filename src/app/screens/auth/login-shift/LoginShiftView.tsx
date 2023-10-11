import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

import OTPInputView from '@twotalltotems/react-native-otp-input';
import WarehouseWorker from '../../../assets/samples/empty-img.svg';
import { styles } from './loginShiftView.styles';
import { Button } from '@ats-erp/ats-native-components';
import { globalStyles } from '../../../styles/styles.global';
import { theme } from '../../../../config/theme';
import { iOSUIKit, systemWeights } from 'react-native-typography';

function LoginShiftView({ navigation }) {
  return (
    <>
      <ScrollView style={globalStyles.authScrollView}>
        <View style={globalStyles.parentContainer}>
          <WarehouseWorker height='250px' width='100%' />
          <View>
            <View style={globalStyles.authScreenHeroTextConatiner}>
              <Text
                style={[iOSUIKit.largeTitleEmphasized, systemWeights.regular]}
              >
                Wellcome back!
              </Text>
              <Text
                style={[iOSUIKit.largeTitleEmphasized, systemWeights.regular]}
              >
                Tejaswini Sri Sai
              </Text>
            </View>
            <Text style={styles.subText}>Enter your MPIN to Log In</Text>
            <View
              style={{
                paddingLeft: 15,
                paddingRight: 15
              }}
            >
              <OTPInputView
                style={{ width: '100%', height: 54 }}
                pinCount={4}
                codeInputFieldStyle={{
                  backgroundColor: theme.colors.secondary,
                  borderRadius: 4,
                  height: 54,
                  width: 54,
                  color: '#000'
                }}
                codeInputHighlightStyle={{
                  borderColor: '#000'
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  paddingRight: 7
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.navigate('Set MPIN')}
                >
                  <Text style={globalStyles.linkText}>Forgot MPIN</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View>
        <Button
          label='Login'
          size='large'
          callback={() => navigation.navigate('Login with MPIN')}
          borderRadius={0}
        />
      </View>
    </>
  );
}

export default LoginShiftView;
