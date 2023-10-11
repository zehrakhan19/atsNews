import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Forms, FormsProps } from './forms';

const props: FormsProps = {};

storiesOf('Forms', module).add('Primary', () => <Forms {...props} />);
