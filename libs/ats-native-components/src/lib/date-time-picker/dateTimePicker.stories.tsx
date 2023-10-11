import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { DateAndTimePicker, DateTimePickerProps } from './dateTimePicker';

const props: DateTimePickerProps = {};

storiesOf('DateTimePicker', module).add('Primary', () => (
  <DateAndTimePicker {...props} />
));
