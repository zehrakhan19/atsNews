import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ImageViewer, ImageViewerProps } from './image-viewer';

const props: ImageViewerProps = {};

storiesOf('ImageViewer', module).add('Primary', () => (
  <ImageViewer {...props} />
));
