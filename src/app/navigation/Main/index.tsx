import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import analytics from '@react-native-firebase/analytics';
import RootStack from './stacks/RootStack';
// import RootState from './stacks/RootStack';
// import { createStackNavigator } from '@react-navigation/stack';

export default function MainNav() {
  // const routeNameRef = React.useRef(null);
  // const navigationRef = React.useRef(null);

  // const user = false;

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
