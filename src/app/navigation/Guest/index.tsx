/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import SetMpinView from '../../screens/auth/set-mpin/SetMpinView';
import RequestAccessView from '../../screens/auth/request-access-to-manager/RequestAccessView';
// import LoginShiftView from '../../screens/auth/login-shift/LoginShiftView';
import LoginWIthMobile from '../../screens/auth/login-with-mobile-view';
import VerifyOtp from '../../screens/auth/user-otp';
import LogoScreen from '../../screens/auth/logo-screen/LogoScreenView';

const Stack = createStackNavigator();

export default function Guest({navigation}: any) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Logo Screen"
          options={{headerShown: false}}
          component={LogoScreen}
        />
        <Stack.Screen
          name="Login with mobile number"
          options={{headerShown: false}}
          component={LoginWIthMobile}
        />
        <Stack.Screen
          name="Verfiy with OTP"
          options={{headerShown: false}}
          component={VerifyOtp}
        />
        <Stack.Screen
          name="Request Access to Manager"
          options={{headerShown: false}}
          component={RequestAccessView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
