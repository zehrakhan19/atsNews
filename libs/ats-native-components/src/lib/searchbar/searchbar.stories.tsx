import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Searchbar, SearchbarProps } from './searchbar';

const props: SearchbarProps = {};

storiesOf('Searchbar', module).add('Primary', () => <Searchbar {...props} />);
