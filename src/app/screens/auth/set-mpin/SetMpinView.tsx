import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import SetMpin from '../../../assets/auth-screen-images/set-mpin.svg';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { theme } from '../../../../config/theme';
import { Button } from '@ats-erp/ats-native-components';
import { globalStyles } from '../../../styles/styles.global';
import { iOSUIKit, systemWeights } from 'react-native-typography';

function SetMpinView({ navigation }) {
  return (
    <>
      <ScrollView style={globalStyles.authScrollView}>
        <SetMpin height='300px' width='100%' />
        <View style={globalStyles.parentContainer}>
          <View style={globalStyles.authScreenHeroTextConatiner}>
            <View>
              <Text
                style={[iOSUIKit.largeTitleEmphasized, systemWeights.regular]}
              >
                Set Your MPIN
              </Text>
            </View>

            <View>
              <Text
                style={{
                  marginTop: 30,
                  fontSize: 12,
                  fontFamily: 'red hat display',
                  fontWeight: '500',
                  color: '#303030',
                  letterSpacing: 1.92
                }}
              >
                SET MPIN
              </Text>
              {/* MPIN INPUT */}
              <View>
                <View style={{ marginTop: 10 }}>
                  <View>
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
                  </View>
                  <View
                    style={{
                      width: 320,
                      height: 48,
                      flexShrink: 0,
                      borderRadius: 10
                    }}
                  ></View>
                </View>
              </View>
            </View>

            <View>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'red hat display',
                  fontWeight: '500',
                  color: '#303030',
                  letterSpacing: 1.92
                }}
              >
                Confirm MPIN
              </Text>
              {/* MPIN INPUT */}
              <View>
                <View style={{ marginTop: 10 }}>
                  <View>
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
                  </View>
                  <View
                    style={{
                      width: 320,
                      height: 48,
                      flexShrink: 0,
                      borderRadius: 10
                    }}
                  ></View>
                </View>
              </View>
            </View>
            {/* Image */}
          </View>
        </View>
      </ScrollView>
      <View>
        <Button
          label='Set MPin'
          size='large'
          callback={() => navigation.navigate('Login with MPIN')}
          borderRadius={0}
        />
      </View>
    </>
  );
}

// const styles = StyleSheet.create({

// })

export default SetMpinView;
