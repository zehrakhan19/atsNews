import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Container, ContainerProps } from './container';

const props: ContainerProps = {};

storiesOf('Container', module).add('Primary', () => <Container {...props} />);
