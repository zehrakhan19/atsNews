import { storiesOf } from '@storybook/react-native';
import React from 'react';
import SwitchButton from './switch-button';

const props = {};

storiesOf('SwitchButton', module).add('Primary', () => <SwitchButton {...props} />);
