import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { CustomFlatList, CustomFlatListProps } from './custom-flat-list';

const props: CustomFlatListProps = {};

storiesOf('CustomFlatList', module).add('Primary', () => (
  <CustomFlatList {...props} />
));
