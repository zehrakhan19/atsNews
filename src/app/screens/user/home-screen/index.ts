import {withHook} from '../../../../../libs/ats-components/src';
import HomeScreenView from './HomeScreenView';
import useHomeScreen from './useHomeScreen';

const HomeScreen = withHook(useHomeScreen, HomeScreenView);

export default HomeScreen;
