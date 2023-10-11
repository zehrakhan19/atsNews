import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Picker, PickerProps } from './picker';

const props: PickerProps = {};

storiesOf('Picker', module).add('Primary', () => <Picker {...props} />);
