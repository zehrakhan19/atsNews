import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { CustomDialogBox, CustomDialogBoxProps } from './dialog-box';

const props = {
  visible: false,
  onClose: () => null,
  title: '',
  content: ''
};

storiesOf('CustomFlatList', module).add('Primary', () => (
  <CustomDialogBox {...props} />
));
