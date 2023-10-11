import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { LoadingWrapper, LoadingWrapperProps } from './loading-wrapper';

const props: LoadingWrapperProps = {};

storiesOf('LoadingWrapper', module).add('Primary', () => (
  <LoadingWrapper {...props} />
));
