import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { OtpInput, OtpInputProps } from './otp-input';

const props: OtpInputProps = {};

storiesOf('OtpInput', module).add('Primary', () => <OtpInput {...props} />);
