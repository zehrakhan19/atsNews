import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CheckBoxComponent from './check-box';

const props = {};

storiesOf('CheckBoxComponent', module).add('Primary', () => <CheckBoxComponent {...props} />);
