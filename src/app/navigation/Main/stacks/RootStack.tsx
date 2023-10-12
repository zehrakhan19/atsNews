/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import {COMMON_STACK_OPTIONS} from './stacks.const';
import BottomTabs from '../bottomTab';
import ReporterDashboard from '../../../screens/user/reporter-dashboard';
import AddNews from '../../../screens/user/add-news';

function RootStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="reporter-dashboard"
      screenOptions={COMMON_STACK_OPTIONS}>
      <Stack.Screen
        options={{headerShown: false}}
        name="main"
        component={BottomTabs}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="reporter-dashboard"
        component={ReporterDashboard}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="add-news"
        component={AddNews}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
