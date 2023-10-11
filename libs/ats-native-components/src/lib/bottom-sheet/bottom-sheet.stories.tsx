import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { BottomSheet, BottomSheetProps } from './bottom-sheet';

const props: BottomSheetProps = {};

storiesOf('BottomSheet', module).add('Primary', () => (
  <BottomSheet {...props} />
));
