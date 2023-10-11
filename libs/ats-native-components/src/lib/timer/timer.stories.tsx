import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Timer, TimerProps } from './timer';

const props: TimerProps = {};

storiesOf('Timer', module).add('Primary', () => <Timer {...props} />);
