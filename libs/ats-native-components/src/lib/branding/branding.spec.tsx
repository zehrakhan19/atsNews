import React from 'react';
import { render } from '@testing-library/react-native';

import Branding from './branding';

describe('Branding', () => {
  it('should render successfully', () => {
    const { container } = render(<Branding />);
    expect(container).toBeTruthy();
  });
});
