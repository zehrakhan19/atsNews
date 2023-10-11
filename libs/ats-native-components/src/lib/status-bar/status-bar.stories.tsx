import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { StatusBar, StatusBarProps } from './status-bar';

const props: StatusBarProps = {
  translucent: false,

  backgroundColor: '',

  hidden: false
};

storiesOf('StatusBar', module).add('Primary', () => <StatusBar {...props} />);
