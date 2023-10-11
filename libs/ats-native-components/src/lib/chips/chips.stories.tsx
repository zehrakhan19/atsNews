import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Chips, ChipsProps } from './chips';

const props: ChipsProps = {};

storiesOf('Chips', module).add('Primary', () => <Chips {...props} />);
