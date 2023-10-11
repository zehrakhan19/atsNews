import {useState} from 'react';
// import {toast} from '../../../../../libs/ats-native-components/src';
// import {useLoginWithMobileMutation} from '../../../services/auth/authApi';
// import {useDispatch} from 'react-redux';
// import {userMobileNumberEntered} from '../../../features/user/userSlice';
// import {showApiResponse} from '../../../helpers/showApiResposne';

const useLoginWithMobile = ({navigation}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [sendOtpDisable, setSendOtpDisable] = useState(true);

  // const dispatch = useDispatch();

  // const [login, {isLoading: isLoadingLogin, isSuccess, isError, error}] =
  //   useLoginWithMobileMutation();

  const checkMobileNumberValidity = number => {
    setMobileNumber(number);
    if (number.length < 10) {
      setSendOtpDisable(true);
    } else setSendOtpDisable(false);
  };

  const sendOTP = async () => {
    // try {
    //   await login({phone: mobileNumber});
    //   if (isError) {
    //     showApiResponse(error);
    //   }
    //   if (isSuccess || !error) {
    //     navigation.navigate('Verfiy with OTP');
    //     dispatch(userMobileNumberEntered(mobileNumber));
    //   }
    // } catch (err) {
    //   toast('Something went wrong');
    //   console.log('catch', err);
    // }
  };

  return {
    navigation,
    sendOtpDisable,
    mobileNumber,
    sendOTP,
    setMobileNumber,
    checkMobileNumberValidity,
    // isLoadingLogin,
  };
};

export default useLoginWithMobile;
