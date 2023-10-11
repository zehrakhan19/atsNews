import React from 'react';
import { render } from '@testing-library/react-native';

import Picker from './picker';

describe('Picker', () => {
  it('should render successfully', () => {
    const { container } = render(<Picker />);
    expect(container).toBeTruthy();
  });
});
