import React from 'react';
import { render } from '@testing-library/react-native';

import AutoCompletePicker from './auto-complete-picker';

describe('AutoCompletePicker', () => {
  it('should render successfully', () => {
    const { container } = render(<AutoCompletePicker />);
    expect(container).toBeTruthy();
  });
});
