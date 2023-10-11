/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../../../screens/user/home-screen/HomeScreenView';

const DashboardStack = createStackNavigator();

const DashboardStackScreen = ({navigation}) => {
  <DashboardStack.Navigator
    screenOptions={{
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DashboardStack.Screen
      options={{
        title: '',
      }}
      name="DashboardTab"
      component={Dashboard}
    />
  </DashboardStack.Navigator>;
};

export default DashboardStackScreen;
