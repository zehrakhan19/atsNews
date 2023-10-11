import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Image, ImageProps } from './image';

const props: ImageProps = {};

storiesOf('Image', module).add('Primary', () => <Image {...props} />);
