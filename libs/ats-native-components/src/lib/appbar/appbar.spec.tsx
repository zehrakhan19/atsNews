import React from 'react';
import { render } from '@testing-library/react-native';

import Appbar from './appbar';

describe('Appbar', () => {
  it('should render successfully', () => {
    const { container } = render(<Appbar />);
    expect(container).toBeTruthy();
  });
});
