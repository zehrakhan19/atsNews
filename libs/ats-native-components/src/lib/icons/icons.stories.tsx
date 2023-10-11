import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Icons, IconsProps } from './icons';

const props: IconsProps = {};

storiesOf('Icons', module).add('Primary', () => <Icons {...props} />);
