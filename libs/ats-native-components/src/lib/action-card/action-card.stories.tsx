import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ActionCard } from './action-card';

const props = { mainText: 'Title' };

storiesOf('Button', module).add('Primary', () => <ActionCard {...props} />);
