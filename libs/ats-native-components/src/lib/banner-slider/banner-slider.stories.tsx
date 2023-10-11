import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { BannerSlider, BannerSliderProps } from './banner-slider';

const props: BannerSliderProps = {};

storiesOf('BannerSlider', module).add('Primary', () => (
  <BannerSlider {...props} />
));
