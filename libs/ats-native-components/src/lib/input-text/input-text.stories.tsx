import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { InputText } from './input-text';

const props = {
  value: ''
};

storiesOf('Button', module).add('Primary', () => <InputText {...props} />);
