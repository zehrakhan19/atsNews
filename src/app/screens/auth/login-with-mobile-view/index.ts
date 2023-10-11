/* eslint-disable prettier/prettier */
import {withHook} from '../../../../../libs/ats-components/src';
import useLoginWithMobile from './useLoginWithMobile';
import LoginWithMobileView from './LoginWithMobileView';

const LoginWIthMobile = withHook(useLoginWithMobile, LoginWithMobileView);

export default LoginWIthMobile;
