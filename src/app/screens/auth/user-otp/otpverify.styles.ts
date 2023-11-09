import {theme} from '../../../../config/theme';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  label: {
    color: '#7B7B7B',
    fontFamily: 'Red Hat Display',
    fontSize: 12,
    fontStyle: 'normal',
  },
  otpSubInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },
});
