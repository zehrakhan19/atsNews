import {withHook} from '../../../../../libs/ats-components/src';
import OTPVerifyView from './OTPVerifyView';
import useOtpVerify from './useOtpVerify';

const VerifyOtp = withHook(useOtpVerify, OTPVerifyView);

export default VerifyOtp;
