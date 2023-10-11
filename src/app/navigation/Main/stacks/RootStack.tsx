import {createStackNavigator} from '@react-navigation/stack';
import {COMMON_STACK_OPTIONS} from './stacks.const';
// import Categories from '../../../screens/user/categories';
// import Brands from '../../../screens/user/brands';

function RootStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="main"
      screenOptions={COMMON_STACK_OPTIONS}>
      <Stack.Screen
        options={{headerShown: false, title: 'Categories'}}
        name="category-stack"
        // component={Categories}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="brand-stack"
        // component={Brands}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
