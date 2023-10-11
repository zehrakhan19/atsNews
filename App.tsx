import React, {useEffect} from 'react';
import {StatusBar} from '../atsNews/libs/ats-native-components/src';
import {Text} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';
import configureStore from '../atsNews/src/app/store';
import {theme} from '../atsNews/src/config/theme';
// import '../config/ignoreWarnings';
import RootNav from '../atsNews/src/app/navigation/RootNav';
// import CustomSnackbar from './components/snakbar/Snakbar';

const {store, persistor} = configureStore();

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <PaperProvider theme={theme}>
          <StatusBar backgroundColor={theme.colors.black} />
          <RootNav />
          {/* <CustomSnackbar /> */}
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

const MainApp = () => <App />;

export default MainApp;
