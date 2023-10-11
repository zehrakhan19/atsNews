import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { IconButton, IconButtonProps } from './icon-button';

const props: IconButtonProps = {};

storiesOf('IconButton', module).add('Primary', () => <IconButton {...props} />);
