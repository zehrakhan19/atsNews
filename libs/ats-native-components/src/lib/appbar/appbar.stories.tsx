import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Appbar, AppbarProps } from './appbar';

const props: AppbarProps = {};

storiesOf('Appbar', module).add('Primary', () => <Appbar {...props} />);
