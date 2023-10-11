/* eslint-disable @typescript-eslint/no-unused-vars */

const useLogoScreen = ({navigation}: any) => {
  const navigate = () => {
    navigation.navigate('Login with mobile number');
  };
  setTimeout(() => {
    navigate();
  }, 10000);
  return {
    navigation,
  };
};

export default useLogoScreen;
