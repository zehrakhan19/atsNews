/* eslint-disable prettier/prettier */
import {withHook} from '../../../../../libs/ats-components/src';
import useLogoScreen from './useLogoScreen';
import LogoScreenView from './LogoScreenView';

const LogoScreen = withHook(useLogoScreen, LogoScreenView);

export default LogoScreen;
