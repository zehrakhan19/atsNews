import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Snack, SnackProps } from './snack';

const props: SnackProps = {};

storiesOf('Snack', module).add('Primary', () => <Snack {...props} />);
