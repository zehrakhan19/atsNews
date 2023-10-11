import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { IntroSlider } from './intro-slider';

const props = {};

storiesOf('IntroSlider', module).add('Primary', () => (
  <IntroSlider {...props} />
));
