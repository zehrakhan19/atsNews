import React from 'react';
import { render } from '@testing-library/react-native';

import Forms from './forms';

describe('Forms', () => {
  it('should render successfully', () => {
    const { container } = render(<Forms />);
    expect(container).toBeTruthy();
  });
});
