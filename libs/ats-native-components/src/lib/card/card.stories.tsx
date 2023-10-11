import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Card, CardProps } from './card';

const props: CardProps = {};

storiesOf('Card', module).add('Primary', () => <Card {...props} />);
