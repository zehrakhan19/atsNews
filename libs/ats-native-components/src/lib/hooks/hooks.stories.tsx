import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Hooks, HooksProps } from './hooks';

const props: HooksProps = {};

storiesOf('Hooks', module).add('Primary', () => <Hooks {...props} />);
