import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Loading, LottieAnimationsProps } from './lottie-animations';

const props: LottieAnimationsProps = {};

storiesOf('LottieAnimations', module).add('Primary', () => (
  <Loading {...props} />
));
