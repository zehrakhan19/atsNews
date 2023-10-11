/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import {COMMON_STACK_OPTIONS} from './stacks.const';
import BottomTabs from '../bottomTab';

function RootStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="main"
      screenOptions={COMMON_STACK_OPTIONS}>
      <Stack.Screen
        options={{headerShown: false}}
        name="main"
        component={BottomTabs}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
