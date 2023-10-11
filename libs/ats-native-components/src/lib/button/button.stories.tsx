import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Button } from './button';

const props = {};

storiesOf('Button', module).add('Primary', () => <Button {...props} />);
