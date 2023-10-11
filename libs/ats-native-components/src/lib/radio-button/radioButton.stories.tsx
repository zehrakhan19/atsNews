import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { RadioButton, RadioButtonProps } from './radioButton';

const props: RadioButtonProps = {};

storiesOf('RadioButton', module).add('Primary', () => (
  <RadioButton {...props} />
));
