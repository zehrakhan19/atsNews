import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Fab } from './fab';

const props = {};

storiesOf('Fab', module).add('Primary', () => <Fab {...props} />);
