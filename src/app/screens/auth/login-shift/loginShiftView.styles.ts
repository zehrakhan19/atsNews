import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  parentContainer: {
    width: '100%',
    padding: 20,
    backgroundColor: 'white'
  },
  headfont: {
    fontSize: 24,
    fontFamily: 'red hat display',
    fontWeight: '600',
    color: '#000000'
  },
  headfont2: {
    fontWeight: '600',
    fontFamily: 'red hat display',
    fontSize: 24,
    color: '#000000',
    marginBottom: 20
  },
  subText: {
    fontWeight: '400',
    fontSize: 12,
    marginTop: 4,
    marginBottom: 20
  },
  linkText: {
    fontSize: 16,
    marginTop: 12,
    textDecorationLine: 'underline'
  },
  otpSubInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10
  },
  resendOtp: {
    color: '#304638',
    fontFamily: 'Red Hat Display'
  },
  otpContainer: {
    marginTop: 40
  }
});
