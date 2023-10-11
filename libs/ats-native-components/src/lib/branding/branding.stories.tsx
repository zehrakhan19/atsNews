import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Branding, BrandingProps } from './branding';

const props: BrandingProps = {};

storiesOf('Branding', module).add('Primary', () => <Branding {...props} />);
