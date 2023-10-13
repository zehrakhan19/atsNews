// import {useDispatch, useSelector} from 'react-redux';
// import {useVerifyOtpMutation} from '../../../services/auth/authApi';
// import {toast} from '../../../../../libs/ats-native-components/src';
// import {userLoginWithMobileNumber} from '../../../features/user/userSlice';
import {useEffect, useState} from 'react';

const useOtpVerify = ({navigation}) => {
  const initialTime = 25;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [resend, setResend] = useState('');

  // const mobileNumber = useSelector((state: any) => state.user.userMobileNumber);

  // const dispatch = useDispatch();

  // const [verifyOtp, {isLoading: isLoadingLogin}] = useVerifyOtpMutation();

  const NavigateToChangeNumber = () =>
    navigation.navigate('Login with mobile number');

  const VerifyOtp = async (otp: string) => {
    // try {
    //   console.log('verify cred', mobileNumber, otp);
    //   await verifyOtp({phone: mobileNumber, otp: otp}).then((res: any) => {
    //     dispatch(userLoginWithMobileNumber(res?.data));
    //     navigation.navigate('home-screen');
    //   });
    // } catch (err) {
    //   console.log(err);
    //   toast('Something went wrong');
    // }
  };

  useEffect(() => {
    if (timeRemaining > -1) {
      const timer = setTimeout(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
      if (timeRemaining) {
        const time = timeRemaining.toString();
        setResend(`00:${time.padStart(2, '0').toString()}`);
      } else {
        setResend('Resend OTP');
      }
      return () => clearTimeout(timer);
    }
  }, [timeRemaining]);

  return {
    NavigateToChangeNumber,
    VerifyOtp,
    // isLoadingLogin,
    resend,
  };
};

export default useOtpVerify;
