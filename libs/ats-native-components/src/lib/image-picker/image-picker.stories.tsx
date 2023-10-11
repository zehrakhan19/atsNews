import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ImagePicker, ImagePickerProps } from './image-picker';

const props: ImagePickerProps = {};

storiesOf('ImagePicker', module).add('Primary', () => (
  <ImagePicker {...props} />
));
